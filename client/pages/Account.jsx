import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { rtdb } from "../../src/lib/firebase";
import { ref, onValue, off } from "firebase/database"; // <-- add off here
import "./Account.css";
import "./AboutUsPage.css";

const Account = () => {
  // ── State ──────────────────────────────────────────────
  const [selectedTab, setSelectedTab] = useState("history");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Glow refs — one per interactive card/button
  const sidebarCardRef = useRef(null);
  const panelRef = useRef(null);
  const navInfoRef = useRef(null);
  const navHistoryRef = useRef(null);
  const navLogoutRef = useRef(null);

  // User info state
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    dateCreated: "",
    profilePicture: null,
  });

  // ── Fetch User Info from Firebase ──────────────────────
  useEffect(() => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) return;

    const userRef = ref(rtdb, `qtrust/user_login/${currentUser.uid}`);

    const unsubscribe = onValue(userRef, (snapshot) => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setUserInfo({
          username: userData.username || "",
          email: userData.email || currentUser.email || "",
          dateCreated: userData.registered_at || "",
          profilePicture: userData.profile_image || null,
        });
      } else {
        setUserInfo({
          username: "",
          email: currentUser.email || "",
          dateCreated: "",
          profilePicture: null,
        });
      }
    });

    return () => {
      off(userRef); // cleanup
    };
  }, []);

  // ── Transactions from Firebase ─────────────────────────
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const tweetsRef = ref(rtdb, "qtrust/tweets");

    const unsubscribe = onValue(tweetsRef, async (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        const txArray = await Promise.all(
          Object.keys(data).map(async (key, index) => {
            const tweet = data[key];

            const blockchainRef = ref(rtdb, `qtrust/blockchain/${key}`);
            let latestTxHeight = "None";
            let latestTxHash = "None";
            let latestRecordHash = "None";
            let history = [];

            const blockchainSnap = await new Promise((resolve) =>
              onValue(blockchainRef, resolve, { onlyOnce: true })
            );

            if (blockchainSnap.exists()) {
              const blockchainData = blockchainSnap.val();
              latestTxHeight = blockchainData.latest_height || "None";
              latestTxHash = blockchainData.latest_tx_hash || "None";
              latestRecordHash = blockchainData.latest_record_hash || "None";

              if (blockchainData.history) {
                history = Object.values(blockchainData.history).map((h) => ({
                  tx_hash: h.tx_hash,
                  height: h.height,
                  inserted_at: h.inserted_at,
                  record_hash: h.record_hash,
                }));
              }
            }

            return {
              id: index + 1,
              postLink: tweet.url_link || "",
              transactionHash: latestTxHash, // full hash
              blockNumber: latestTxHeight,
              timestamp: tweet.inserted_at || "",
              status: "pending",
              trustScore: tweet.ai_index || 0,
              postContent: tweet.text || "",
              history, // array of past blockchain records
            };
          })
        );


        setTransactions(txArray);
      } else {
        setTransactions([]);
      }
    });

    return () => {
      off(tweetsRef);
    };
  }, []);


  // ── Glow helper ────────────────────────────────────────
  const handleMouseMove = (e, ref) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  // ── Effects ────────────────────────────────────────────
  useEffect(() => {
    if (searchInput.trim() === "") {
      setFilteredTransactions(transactions);
    } else {
      const q = searchInput.toLowerCase();
      setFilteredTransactions(
        transactions.filter(
          (tx) =>
            tx.postLink.toLowerCase().includes(q) ||
            tx.postContent.toLowerCase().includes(q) ||
            tx.transactionHash.toLowerCase().includes(q),
        ),
      );
    }
    setCurrentPage(1);
  }, [searchInput, transactions]);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex);

  // ── Handlers ───────────────────────────────────────────
  const handleProfilePictureUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showNotification("Image must be < 5 MB", "error");
      return;
    }
    if (!file.type.startsWith("image/")) {
      showNotification("Please select a valid image", "error");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      setUserInfo((prev) => ({ ...prev, profilePicture: ev.target?.result }));
      showNotification("Profile picture updated!", "success");
    };
    reader.readAsDataURL(file);
  };

  const handleSearch = () => {
    showNotification(
      searchInput.trim()
        ? `Showing ${filteredTransactions.length} matching post(s)`
        : "Enter keywords to search your history",
      "success",
    );
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(getAuth())
      .then(() => {
        showNotification("Logged out successfully!", "success");
        setShowLogoutModal(false);
        navigate("/signin");
      })
      .catch(() => showNotification("Error during logout", "error"));
  };

  const showNotification = (message, type) => {
    const el = document.createElement("div");
    el.className = `acct-toast acct-toast--${type}`;
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => el.classList.add("acct-toast--in"), 100);
    setTimeout(() => {
      el.classList.remove("acct-toast--in");
      setTimeout(() => document.body.removeChild(el), 300);
    }, 3000);
  };

  // ── Helpers ────────────────────────────────────────────
  const truncateHash = (h) => `${h.slice(0, 16)}...`;
  const truncateLink = (l) => (l.length > 55 ? `${l.slice(0, 52)}...` : l);
  const formatTs = (ts) => {
    const d = new Date(ts);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
  };
  const scoreColor = (s) => (s >= 80 ? "green" : s >= 60 ? "yellow" : "red");
  const statusClass = (s) =>
    `acct-status acct-status--${s >= 80 ? "verified" : s >= 60 ? "moderate" : "flagged"}`;
  const statusText = (s) =>
    s >= 80 ? "Verified" : s >= 60 ? "Moderate" : "Flagged";

  // ── Sub-components ─────────────────────────────────────
  const LogoutModal = () => (
    <div className="acct-modal-backdrop">
      <div
        className="acct-modal-overlay"
        onClick={() => setShowLogoutModal(false)}
      />
      <div className="acct-modal">
        <h3 className="acct-modal-title">Confirm Logout</h3>
        <p className="acct-modal-body">
          Are you sure you want to log out? You'll need to sign in again to
          access your account.
        </p>
        <div className="acct-modal-actions">
          <button
            onClick={() => setShowLogoutModal(false)}
            className="acct-modal-cancel"
          >
            Cancel
          </button>
          <button onClick={handleLogout} className="acct-modal-confirm">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );

  const renderMyInformation = () => (
    <div className="acct-tab fade-in">
      <div className="acct-tab-header">
        <div className="qa-label">Account</div>
        <h2 className="acct-tab-title">My Information</h2>
        <p className="acct-tab-subtitle">
          Your account details linked to QTrust.
        </p>
      </div>

      <div className="acct-info-fields">
        <div className="acct-field">
          <label className="acct-field-label">Username</label>
          <div className="acct-field-value">{userInfo.username}</div>
        </div>
        <div className="acct-field">
          <label className="acct-field-label">Email Address</label>
          <div className="acct-field-value">{userInfo.email}</div>
        </div>
        <div className="acct-field">
          <label className="acct-field-label">Member Since</label>
          <div className="acct-field-value">
            {new Date(userInfo.dateCreated).toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );



  // At the top of your component
  const [expandedRows, setExpandedRows] = useState({}); // track which rows are expanded

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Helper: break long hashes into chunks
  // Break hash into chunks and return as an array
  const formatHashForDisplay = (hash, chunkSize = 32) => {
    if (!hash) return [];
    return hash.match(new RegExp(`.{1,${chunkSize}}`, "g")) || [];
  };

  const renderPostHistory = () => (
    <div className="acct-tab fade-in">
      <div className="acct-tab-header">
        <div className="qa-label">Blockchain</div>
        <h2 className="acct-tab-title">Post History</h2>
        <p className="acct-tab-subtitle">
          Every verification is recorded on the ProximaX blockchain and visible on{" "}
          <a
            href="https://bctestnetexplorer.xpxsirius.io/#/"
            target="_blank"
            rel="noreferrer"
            className="acct-inline-link"
          >
            Sirius Explorer ↗
          </a>
        </p>
      </div>

      {/* Search */}
      <div className="acct-search-row">
        <input
          type="text"
          placeholder="Search by post link, content, or hash..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          className="acct-search-input"
        />
        <button onClick={handleSearch} className="acct-search-btn">
          Search
        </button>
      </div>

      {/* Table */}
      {filteredTransactions.length === 0 && searchInput.trim() !== "" ? (
        <div className="acct-empty">
          <div className="acct-empty-icon">🔍</div>
          <p className="acct-empty-title">No results for "{searchInput}"</p>
          <button onClick={() => setSearchInput("")} className="acct-clear-btn">
            Clear Search
          </button>
        </div>
      ) : transactions.length === 0 ? (
        <div className="acct-empty">
          <div className="acct-empty-icon">📊</div>
          <p className="acct-empty-title">No verification history yet.</p>
        </div>
      ) : (
        <div className="acct-table-wrap">
          {/* Header */}
          <div className="acct-table-head">
            <div>Post</div>
            <div>Latest Transaction Hash</div>
            <div>Hash History</div>
          </div>

          {/* Rows */}
          <div className="acct-table-body">
            {currentTransactions.map((tx) => {
              const isExpanded = expandedRows[tx.id] || false;
              const lastRecord =
                tx.history.length > 0 ? tx.history[tx.history.length - 1] : null;

              return (
                <div key={tx.id} className="acct-row">
                  {/* Post */}
                  <div className="acct-cell">
                    <a
                      href={tx.postLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="acct-post-link"
                    >
                      {truncateLink(tx.postLink)}
                    </a>
                    <p className="acct-post-content">{tx.postContent}</p>
                  </div>

                  {/* Latest Transaction Hash */}
                  <div className="acct-cell">
                    <code className="acct-hash acct-hash-wrap bright-white">
                      {formatHashForDisplay(tx.transactionHash).map((chunk, idx) => (
                        <div key={idx}>{chunk}</div>
                      ))}
                    </code>
                    <span className="acct-block bright-white">
                      Block #{tx.blockNumber}
                    </span>
                    <span className="acct-ts bright-white">
                      {formatTs(tx.timestamp)}
                    </span>
                  </div>

                  {/* Hash History */}
                  <div className="acct-cell">
                    {tx.history.length === 0 ? (
                      <span className="acct-empty-history">None</span>
                    ) : (
                      <>
                        <button
                          className="acct-dropdown-btn"
                          onClick={() => toggleRow(tx.id)}
                        >
                          {isExpanded
                            ? "Hide Full History ↑"
                            : `View Full History ↓ (${tx.history.length} records)`}
                        </button>

                        {!isExpanded && lastRecord && (
                          <div className="acct-history-row">
                            <code className="acct-hash acct-hash-wrap bright-white">
                              {formatHashForDisplay(lastRecord.tx_hash).map(
                                (chunk, idx) => (
                                  <div key={idx}>{chunk}</div>
                                )
                              )}
                            </code>
                            <span className="acct-block bright-white">
                              Block #{lastRecord.height}
                            </span>
                            <span className="acct-ts bright-white">
                              {formatTs(lastRecord.inserted_at)}
                            </span>
                          </div>
                        )}

                        {isExpanded &&
                          tx.history.map((h, idx) => (
                            <div key={idx} className="acct-history-row">
                              <code className="acct-hash acct-hash-wrap bright-white">
                                {formatHashForDisplay(h.tx_hash).map(
                                  (chunk, cIdx) => (
                                    <div key={cIdx}>{chunk}</div>
                                  )
                                )}
                              </code>
                              <span className="acct-block bright-white">
                                Block #{h.height}
                              </span>
                              <span className="acct-ts bright-white">
                                {formatTs(h.inserted_at)}
                              </span>
                            </div>
                          ))}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="acct-pagination">
            <div className="acct-pag-btns">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="acct-pag-arrow"
              >
                ← Prev
              </button>
              <span className="acct-pag-current">
                {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="acct-pag-arrow"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );



  // ── Main render ────────────────────────────────────────
  return (
    <div className="acct-page">
      <Navbar />
      {showLogoutModal && <LogoutModal />}

      <main className="acct-main">
        {/* ── Page header band ── */}
        <div className="acct-page-header">
          <div className="acct-page-header-inner">
            <h1 className="acct-page-title">My Account</h1>
          </div>
        </div>

        {/* ── Content area ── */}
        <div className="acct-body">
          <div className="acct-layout">
            {/* ── Sidebar ── */}
            <aside className="acct-sidebar">
              <div
                className="acct-sidebar-card"
                ref={sidebarCardRef}
                onMouseMove={(e) => handleMouseMove(e, sidebarCardRef)}
              >
                {/* Avatar */}
                <div className="acct-avatar-wrap">
                  <input
                    type="file"
                    id="pfpInput"
                    accept="image/*"
                    onChange={handleProfilePictureUpload}
                    className="acct-file-hidden"
                  />
                  <label htmlFor="pfpInput" className="acct-avatar">
                    {userInfo.profilePicture ? (
                      <img
                        src={userInfo.profilePicture}
                        alt="Profile"
                        className="acct-avatar-img"
                      />
                    ) : (
                      <span className="acct-avatar-icon">👤</span>
                    )}
                    {/* {!userInfo.profilePicture && (
                      <div className="acct-avatar-overlay">
                        <span>Upload</span>
                      </div>
                    )} */}
                  </label>
                </div>

                <p className="acct-sidebar-name">{userInfo.username}</p>
                <p className="acct-sidebar-email">{userInfo.email}</p>

                <div className="acct-sidebar-divider" />

                {/* Nav buttons — each with glow */}
                <nav className="acct-nav">
                  <button
                    ref={navInfoRef}
                    onMouseMove={(e) => handleMouseMove(e, navInfoRef)}
                    onClick={() => setSelectedTab("info")}
                    className={`nav-btn-primary ${selectedTab === "info" ? "nav-btn-primary--active" : ""}`}
                  >
                    <span>My Information</span>
                  </button>
                  <button
                    ref={navHistoryRef}
                    onMouseMove={(e) => handleMouseMove(e, navHistoryRef)}
                    onClick={() => setSelectedTab("history")}
                    className={`nav-btn-primary ${selectedTab === "history" ? "nav-btn-primary--active" : ""}`}
                  >
                    <span>Post History</span>
                  </button>
                  <button
                    ref={navLogoutRef}
                    onMouseMove={(e) => handleMouseMove(e, navLogoutRef)}
                    onClick={() => setShowLogoutModal(true)}
                    className="acct-nav-btn--danger"
                  >
                    <span>Log Out</span>
                  </button>
                </nav>
              </div>
            </aside>

            {/* ── Main panel ── */}
            {/* ── Main panel ── */}
            <div className="acct-panel">
              <div className="acct-panel-bg" />
              <div className="acct-panel-content">
                {selectedTab === "info"
                  ? renderMyInformation()
                  : renderPostHistory()}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Account;
