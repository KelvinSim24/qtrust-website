import { useState, useRef, useCallback } from "react";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Index.css";
import LogoImg from "../lib/qtrust-logo.png";

// ─────────────────────────────────────────
// HERO  (matches proximax-hero / about-hero pattern)
// ─────────────────────────────────────────
const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const downloadBtnRef = useRef(null);

  const handleMouseMove = (e, btnRef) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    btnRef.current.style.setProperty("--x", `${e.clientX - rect.left}px`);
    btnRef.current.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const scrollToInstallation = () => {
    const element = document.getElementById("installation");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch("/QTrustExtension.zip");
      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "QTrust-Extension.zip";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      const notification = document.createElement("div");
      notification.className = "idx-toast";
      notification.textContent =
        "QTrust extension downloaded! Follow the installation guide below.";
      document.body.appendChild(notification);
      setTimeout(() => {
        document.body.removeChild(notification);
        scrollToInstallation();
      }, 3000);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Download failed. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section className="idx-hero">
      <div className="idx-hero-overlay" />
      <div className="idx-hero-bg" />

      <div className="idx-hero-content">
        <div className="idx-hero-text">
          <h1 className="idx-hero-title">
            Download <span className="brand-text-1">QTrust</span>
          </h1>
          <p className="idx-hero-subtitle">
            Detect Fake News on X using Quantum AI, Crowdsourcing, and
            Blockchain
          </p>
          <div className="idx-hero-buttons">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              ref={downloadBtnRef}
              onMouseMove={(e) => handleMouseMove(e, downloadBtnRef)}
              className={`btn-primary ${isDownloading ? "idx-btn--loading" : ""}`}
            >
              {isDownloading ? (
                <span className="idx-btn-inner">
                  <svg className="idx-spinner" viewBox="0 0 24 24">
                    <circle
                      className="idx-spinner-track"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="idx-spinner-fill"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Downloading...
                </span>
              ) : (
                <span>Download for Chrome</span>
              )}
            </button>
            <button onClick={scrollToInstallation} className="btn-secondary">
              Installation Guide
            </button>
          </div>
        </div>
      </div>
      {/* Scroll down indicator */}
      <button
        className="idx-scroll-cta"
        onClick={scrollToInstallation}
        aria-label="Scroll to installation"
      >
        <span className="idx-scroll-cta-label">Installation Guide</span>
        <span className="idx-scroll-cta-arrow">
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
    </section>
  );
};

// ─────────────────────────────────────────
// INSTALLATION GUIDE  (matches px-features section pattern)
// ─────────────────────────────────────────
// ── Shared glow hook ──────────────────────────────
const useGlow = () => {
  const handleMouseMove = useCallback((e, el) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--gx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--gy", `${e.clientY - rect.top}px`);
  }, []);

  const handleMouseLeave = useCallback((el) => {
    if (!el) return;
    el.style.setProperty("--gx", `-999px`);
    el.style.setProperty("--gy", `-999px`);
  }, []);

  return { handleMouseMove, handleMouseLeave };
};

// ── Glow card wrapper ─────────────────────────────
const GlowCard = ({ className, children }) => (
  <div className={`idx-glow-card ${className || ""}`}>
    <div className="idx-glow-card-bg" />
    <div className="idx-glow-card-content">{children}</div>
  </div>
);

const InstallationGuide = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);

  const toggleStepCompletion = (stepId) => {
    setCompletedSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId],
    );
  };

  const steps = [
    {
      id: 1,
      title: "Download the Extension",
      description:
        "Click the 'Download for Chrome' button above to download the QTrust extension zip file. The file will be saved to your Downloads folder automatically.",
      details: [
        "File size: ~2MB",
        "File name: QTrustExtension.zip",
        "Contains all necessary extension files",
        "Virus-free and safe to install",
      ],
      code: "QTrustExtension.zip",
    },
    {
      id: 2,
      title: "Extract the ZIP File",
      description:
        "Right-click on the downloaded QTrustExtension.zip file and select 'Extract All' (Windows) or double-click (Mac). Choose a location you can easily remember.",
      details: [
        "Create a new folder like 'Chrome Extensions'",
        "Extract to Desktop for easy access",
        "Remember the folder location",
        "Don't delete the folder after installation",
      ],
      code: "Right-click → Extract All → Choose location",
    },
    {
      id: 3,
      title: "Open Chrome Extensions",
      description:
        "Open Google Chrome browser and navigate to the extensions management page using one of these methods:",
      details: [
        'Type "chrome://extensions" in address bar',
        "Or: Menu (⋮) → More Tools → Extensions",
        "Or: Settings → Extensions",
        "Make sure you're using Chrome browser",
      ],
      code: "chrome://extensions",
    },
    {
      id: 4,
      title: "Enable Developer Mode",
      description:
        "In the top-right corner of the Extensions page, find the 'Developer mode' toggle switch and turn it ON. This enables installation of unpacked extensions.",
      details: [
        "Look for toggle in top-right corner",
        "Switch should turn blue when enabled",
        "New buttons will appear below",
        "Required for installing unpacked extensions",
      ],
      code: "Developer mode: [Toggle ON]",
    },
    {
      id: 5,
      title: "Load Unpacked Extension",
      description:
        "Click the 'Load unpacked' button that appears after enabling Developer mode. Navigate to and select the extracted QTrust folder.",
      details: [
        "Click 'Load unpacked' button",
        "Browse to extracted QTrust folder",
        "Select the folder (not individual files)",
        "Click 'Select Folder' or 'Open'",
      ],
      code: "Load unpacked → Select QTrust folder",
    },
    {
      id: 6,
      title: "Verify & Start Using",
      description:
        "QTrust should now appear in your extensions list and toolbar. Navigate to X (Twitter) to start detecting fake news with quantum AI technology!",
      details: [
        "QTrust icon appears in toolbar",
        "Extension shows as 'Enabled'",
        "Pin icon for easy access",
        "Visit twitter.com or x.com to test",
      ],
      code: "Ready to detect fake news! 🎉",
    },
  ];

  const progressPct = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <section id="installation" className="idx-install">
      <div className="container">
        {/* Header */}
        <div className="idx-install-header">
          <div className="qa-label">Setup</div>
          <h2 className="section-title">Installation Guide</h2>
          <p className="px-section-subtitle">
            Follow these steps to install QTrust and start detecting fake news
            with AI.
          </p>
          <div className="idx-progress-wrap">
            <div className="idx-progress-bar">
              <div
                className="idx-progress-fill"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <span className="idx-progress-label">
              <span className="idx-progress-count">
                {completedSteps.length}
              </span>{" "}
              / {steps.length} completed
            </span>
          </div>
        </div>

        <div className="idx-install-grid">
          {/* Steps nav */}
          <div className="idx-steps-nav">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`idx-step-row ${
                  completedSteps.includes(step.id)
                    ? "idx-step-row--done"
                    : activeStep === step.id
                      ? "idx-step-row--active"
                      : ""
                }`}
              >
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`idx-step-btn ${activeStep === step.id ? "idx-step-btn--active" : ""}`}
                >
                  <div className="idx-step-btn-inner">
                    <div className="idx-step-left">
                      <div
                        className={`idx-step-num ${
                          completedSteps.includes(step.id)
                            ? "idx-step-num--done"
                            : activeStep === step.id
                              ? "idx-step-num--active"
                              : ""
                        }`}
                      >
                        {completedSteps.includes(step.id) ? "✓" : `0${step.id}`}
                      </div>
                      <p className="idx-step-label">{step.title}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStepCompletion(step.id);
                      }}
                      className={`idx-check ${completedSteps.includes(step.id) ? "idx-check--done" : ""}`}
                    >
                      {completedSteps.includes(step.id) && <span>✓</span>}
                    </button>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Detail panel */}
          <GlowCard className="idx-detail-panel">
            <div className="idx-detail-top">
              <div className="px-impact-card-index">Step 0{activeStep}</div>
              <div className="idx-detail-status">
                {completedSteps.includes(activeStep)
                  ? "✅ Completed"
                  : "🔧 In Progress"}
              </div>
            </div>

            <h3 className="px-feature-title">{steps[activeStep - 1].title}</h3>
            <p className="idx-feature-description">
              {steps[activeStep - 1].description}
            </p>

            <div className="idx-code-block">
              <code className="idx-code">{steps[activeStep - 1].code}</code>
            </div>

            <div className="idx-points">
              <p className="idx-points-title">Key Points</p>
              {steps[activeStep - 1].details.map((detail, i) => (
                <div key={i} className="idx-point-row">
                  <span className="vm-accent-purple">→</span>
                  <span className="idx-point-text">{detail}</span>
                </div>
              ))}
            </div>

            <div className="idx-detail-actions">
              {activeStep > 1 && (
                <button
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="idx-nav-btn"
                >
                  ← Prev
                </button>
              )}
              {activeStep < 6 && (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="idx-nav-btn idx-nav-btn--next"
                >
                  Next →
                </button>
              )}
              <button
                onClick={() => toggleStepCompletion(activeStep)}
                className={`idx-complete-btn ${completedSteps.includes(activeStep) ? "idx-complete-btn--done" : ""}`}
              >
                {completedSteps.includes(activeStep)
                  ? "✓ Completed"
                  : "Mark Complete"}
              </button>
            </div>
          </GlowCard>
        </div>

        {/* Troubleshooting */}
        <div className="idx-troubleshoot">
          <div className="qa-label">Help</div>
          <h3 className="section-title" style={{ fontSize: "1.8rem" }}>
            Troubleshooting
          </h3>
          <div className="idx-troubleshoot-grid">
            <div className="idx-trouble-card">
              <div className="px-impact-card-body">
                <div className="px-impact-card-index">Common Issues</div>
                <ul className="idx-trouble-list">
                  <li>Extension not loading — Refresh the extensions page</li>
                  <li>
                    Developer mode missing — Update Chrome to latest version
                  </li>
                  <li>
                    Folder selection error — Choose the extracted folder, not a
                    file
                  </li>
                  <li>
                    Permission errors — Try running Chrome as administrator
                  </li>
                </ul>
              </div>
            </div>

            <div className="idx-trouble-card">
              <div className="px-impact-card-body">
                <div className="px-impact-card-index">Need Help?</div>
                <ul className="idx-trouble-list">
                  <li>Check Chrome version — minimum version 88+ required</li>
                  <li>Restart browser after installation to refresh</li>
                  <li>Contact support via GitHub Issues</li>
                  <li>Video tutorial — coming soon</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────
// FEATURES  (matches px-impact section pattern)
// ─────────────────────────────────────────
const Features = () => {
  const features = [
    {
      icon: "🔬",
      title: "Hybrid QML",
      subtitle: "Quantum Machine Learning",
      tag: "AI Engine",
      description:
        "Advanced quantum computing algorithms combined with classical AI for unprecedented accuracy in fake news detection.",
      details: [
        "Quantum pattern recognition",
        "Neural network integration",
        "95% accuracy rate",
        "Real-time analysis",
      ],
      index: "01",
    },
    {
      icon: "🧠",
      title: "Crowdsourcing",
      subtitle: "Community Intelligence",
      tag: "Community",
      description:
        "Harnesses collective wisdom through community verification and voting to continuously improve trust scoring.",
      details: [
        "Community verification",
        "Reputation-based voting",
        "Bias reduction algorithms",
        "Continuous learning",
      ],
      index: "02",
    },
    {
      icon: "🔐",
      title: "Blockchain",
      subtitle: "ProximaX Network",
      tag: "ProximaX",
      description:
        "Immutable trust score logging on ProximaX blockchain ensures transparency and prevents data manipulation.",
      details: [
        "Immutable logging",
        "Transparent scoring",
        "Decentralized storage",
        "Audit trail",
      ],
      index: "03",
    },
  ];

  return (
    <section className="idx-features">
      <div className="container">
        <div className="px-features-header">
          <div className="qa-label">Technology</div>
          <h2 className="section-title">
            Why Use <span className="brand-text">QTrust?</span>
          </h2>
          <p className="px-section-subtitle">
            Advanced technology stack combining quantum computing, community
            wisdom, and blockchain security for the most reliable fake news
            detection available.
          </p>
        </div>

        {/* Cards — matches px-impact-grid */}
        <div className="px-impact-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="idx-feature-card"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty(
                  "--fx",
                  `${e.clientX - rect.left}px`,
                );
                e.currentTarget.style.setProperty(
                  "--fy",
                  `${e.clientY - rect.top}px`,
                );
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty("--fx", `-999px`);
                e.currentTarget.style.setProperty("--fy", `-999px`);
              }}
            >
              <div className="idx-feature-card-bg" />
              <div className="idx-feature-card-content">
                {/* <div className="idx-feat-icon">{feature.icon}</div> */}
                <div
                  className="px-impact-card-top"
                  style={{ marginTop: "1rem" }}
                >
                  <span className="px-impact-card-index">{feature.index}</span>
                  <h3 className="px-impact-card-title">{feature.title}</h3>
                </div>
                <p className="px-impact-card-description">
                  {feature.description}
                </p>
                {/* <div className="px-impact-card-tags">
                  <span className="px-tag">{feature.tag}</span>
                  {feature.details.map((d, i) => (
                    <span key={i} className="px-tag">
                      {d}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Tech specs row — matches homepage-stats pattern */}
        {/* <div className="idx-specs-row">
          <div className="idx-spec-item">
            <div className="homepage-stat-number">&lt;100ms</div>
            <div className="homepage-stat-label">Analysis Speed</div>
          </div>
          <div className="homepage-stat-item">
            <div className="homepage-stat-number">95.7%</div>
            <div className="homepage-stat-label">Accuracy Rate</div>
          </div>
          <div className="homepage-stat-item">
            <div className="homepage-stat-number">1M+</div>
            <div className="homepage-stat-label">Posts Analyzed</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Is QTrust a browser extension or an app?",
      a: "QTrust is a Chrome browser extension, not a standalone app. It runs directly inside your Chrome browser and automatically analyzes posts on X (Twitter) as you browse — no separate app installation required.",
    },
    {
      q: "Is QTrust free to download and use?",
      a: "Yes, QTrust is completely free to download and use. Simply download the ZIP file, follow the installation guide, and you're ready to start detecting fake news at no cost.",
    },
    {
      q: "Does QTrust work on browsers other than Chrome?",
      a: "Currently QTrust is built specifically for Google Chrome. Support for other Chromium-based browsers like Brave and Edge may work but is not officially supported yet. Firefox and Safari are not supported at this time.",
    },
    {
      q: "Why do I need to enable Developer Mode to install it?",
      a: "Because QTrust is not yet published on the Chrome Web Store, it must be loaded as an unpacked extension. Developer Mode is required by Chrome to allow this. It is safe to enable — it simply allows locally installed extensions to run.",
    },
    {
      q: "Will QTrust slow down my browser?",
      a: "No. QTrust is designed to be lightweight and runs analysis in under 100ms. It only activates on X (Twitter) pages and has no impact on your browsing experience on other websites.",
    },
  ];

  return (
    <section className="idx-faq">
      <div className="container">
        {/* <div className="idx-faq-header">
          <div className="qa-label">FAQ</div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="px-section-subtitle">
            Everything you need to know about downloading and using QTrust.
          </p>
        </div> */}

        <div className="idx-faq-inner">
          <div className="idx-faq-inner-1">
            <div className="idx-faq-header">
              <div className="qa-label">FAQ</div>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="px-section-subtitle">
                Everything you need to know about downloading and using QTrust.
              </p>
            </div>
            {/* Questions */}
            <div className="idx-faq-list">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`idx-faq-item ${openIndex === i ? "idx-faq-item--open" : ""}`}
                >
                  <button
                    className="idx-faq-question"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="idx-faq-icon">
                      {openIndex === i ? "−" : "+"}
                    </span>
                  </button>
                  <div className="idx-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="idx-faq-image" />
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="about-cta">
      <div className="about-cta-overlay"></div>
      <div className="about-cta-bg"></div>
      <div className="about-cta-container">
        <h2 className="about-cta-title">
          Ready to Experience the Future of News Verification?
        </h2>
        <p className="about-cta-subtitle">
          Join thousands of users who trust QTrust for reliable, verified news.
        </p>
        <div className="about-cta-buttons" style={{ justifyContent: "center" }}>
          <Link
            to="/download"
            onClick={() =>
              setTimeout(
                () => window.scrollTo({ top: 0, behavior: "smooth" }),
                100,
              )
            }
            className="btn btn-secondary about-cta-btn"
          >
            <Download className="btn-icon mr-2" />
            Download QTrust
          </Link>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src={LogoImg}
                alt="QTrust logo"
                className="footer-logo-img"
              />
              <span>QTrust</span>
            </div>
            <p className="footer-description">
              Revolutionizing news verification through quantum-powered AI and
              blockchain technology — one post at a time.
            </p>
          </div>

          {/* General */}
          <div className="footer-links">
            <h4 className="footer-heading">General</h4>
            <ul className="footer-list">
              <li>
                <Link to="/home" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="footer-link">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="footer-links">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-list">
              <li>
                <Link to="/proximax" className="footer-link">
                  ProximaX
                </Link>
              </li>
              <li>
                <Link to="/download" className="footer-link">
                  Download
                </Link>
              </li>
              <li>
                <Link to="/account" className="footer-link">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} QTrust. All rights reserved.
          </p>
          <p className="footer-tagline">
            Built with Quantum AI · Powered by ProximaX
          </p>
        </div>
      </div>
    </footer>
  );
};

// ─────────────────────────────────────────
// INDEX (page root)
// ─────────────────────────────────────────
const Index = () => {
  return (
    <div className="idx-page">
      <Navbar />
      <main>
        <Hero />
        <InstallationGuide />
        <Features />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
