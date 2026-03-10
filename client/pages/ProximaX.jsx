import React from "react";
import "../pages/ProximaX.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import StreamingImg from "../lib/streaming.jpg";
import BlockchainImg from "../lib/blockchain.png";
import DatabaseImg from "../lib/database.jpg";
import StorageImg from "../lib/storage.jpg";
import MwalletImg from "../lib/mwallet.jpg";
import SiriusidImg from "../lib/siriusid.jpg";
import EdlxImg from "../lib/edlx.jpg";
import LogoImg from "../lib/qtrust-logo.png";

function ProximaX() {
  return (
    <div className="proximax-page">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="proximax-hero">
        <div className="proximax-hero-overlay"></div>
        <div className="proximax-hero-bg"></div>
        <div className="proximax-hero-content">
          <div className="proximax-hero-text">
            <h1 className="proximax-hero-title">ProximaX</h1>
            <p className="proximax-hero-subtitle">
              ProximaX is a powerful next-generation platform integrating
              blockchain with storage, streaming, and database layers for
              scalable decentralized applications.
            </p>
          </div>
        </div>
      </section>

      {/* ── Key Features Section ──────────────────────── */}
      <section className="px-features">
        <div className="container">
          <div className="px-features-header">
            <div className="qa-label">Key Features</div>
            <h2 className="section-title">
              Built on <span className="brand-text">four pillars</span> of
              trust.
            </h2>
            <p className="px-section-subtitle">
              ProximaX Sirius combines blockchain security with enterprise-grade
              infrastructure layers — each designed to complement the others.
            </p>
          </div>

          {/* Feature 01 — image LEFT, text RIGHT */}
          <div className="px-feature-row">
            <div className="px-feature-image">
              <img src={StreamingImg} alt="Streaming" />
            </div>
            <div className="px-feature-text">
              <div className="qa-label1">Streaming</div>
              <h3 className="px-feature-title">
                Real-time messaging with{" "}
                <em className="vm-accent-blue">end-to-end encryption.</em>
              </h3>
              <p className="px-feature-description">
                The Sirius Stream Protocol (SSP) provides a high-security and
                high-performance streaming layer for real-time messaging and
                streaming services with end-to-end encryption.
              </p>
            </div>
          </div>

          {/* Feature 02 — text LEFT, image RIGHT */}
          <div className="px-feature-row1 px-feature-row--reverse">
            <div className="px-feature-image">
              <img src={BlockchainImg} alt="Blockchain" />
            </div>
            <div className="px-feature-text">
              <div className="qa-label1">Blockchain</div>
              <h3 className="px-feature-title">
                Secure, decentralised{" "}
                <em className="vm-accent-purple">transactions at scale.</em>
              </h3>
              <p className="px-feature-description">
                The blockchain layer forms the immutable base of the platform,
                enabling secure, decentralized transactions and tamper-proof
                data storage for every operation across the network.
              </p>
            </div>
          </div>

          {/* Feature 03 — image LEFT, text RIGHT */}
          <div className="px-feature-row">
            <div className="px-feature-image">
              <img src={DatabaseImg} alt="Database" />
            </div>
            <div className="px-feature-text">
              <div className="qa-label1">Database</div>
              <h3 className="px-feature-title">
                Distributed enforcement with{" "}
                <em className="vm-accent-blue">Tendermint core.</em>
              </h3>
              <p className="px-feature-description">
                The database layer uses Firebase as the document-oriented
                database, driven by the Tendermint core for distributed network
                enforcement — ensuring consistency across all nodes.
              </p>
            </div>
          </div>

          {/* Feature 04 — text LEFT, image RIGHT */}
          <div className="px-feature-row1 px-feature-row--reverse">
            <div className="px-feature-image">
              <img src={StorageImg} alt="Storage" />
            </div>
            <div className="px-feature-text">
              <div className="qa-label1">Storage</div>
              <h3 className="px-feature-title">
                Decentralised, encrypted{" "}
                <em className="vm-accent-purple">file management.</em>
              </h3>
              <p className="px-feature-description">
                The distributed file management system (DFMS) protocol enables
                decentralized, encrypted, and secure file storage — giving
                applications full control over their data without a central
                point of failure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Real-World Impact Section ─────────────────── */}
      <section className="px-impact">
        <div className="container">
          <div className="px-impact-header">
            <div className="qa-label">Real-World Impact</div>
            <h2 className="section-title">
              Technology that{" "}
              <span className="brand-text">works in the real world.</span>
            </h2>
            <p className="px-section-subtitle">
              ProximaX powers real applications solving real problems — from
              digital identity to legal documentation and mobile payments.
            </p>
          </div>

          <div className="px-impact-grid">
            {/* Card 01 — mWallet */}
            <div className="px-impact-card">
              <div className="px-impact-card-image">
                <img src={MwalletImg} alt="Mwallet" />
                <div className="px-impact-card-image-overlay" />
              </div>
              <div className="px-impact-card-body">
                <div className="px-impact-card-top">
                  <h3 className="px-impact-card-title">mWallet</h3>
                </div>
                <p className="px-impact-card-description">
                  A blockchain-powered mobile wallet built on ProximaX, offering
                  secure peer-to-peer transfers, digital identity verification
                  (KYC), and features like payroll, remittance, and
                  point-of-sale payments.
                </p>
                <a
                  href="https://www.proximax.ltd/en/solutions/mwallet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-impact-card-link"
                >
                  Visit Project
                  <span className="px-link-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Card 02 — eDLX */}
            <div className="px-impact-card">
              <div className="px-impact-card-image">
                <img src={EdlxImg} alt="Edlx" />
                <div className="px-impact-card-image-overlay" />
              </div>
              <div className="px-impact-card-body">
                <div className="px-impact-card-top">
                  <h3 className="px-impact-card-title">eDLX</h3>
                </div>
                <p className="px-impact-card-description">
                  A secure platform for creating, signing, and exchanging legal
                  documents using ProximaX blockchain. It ensures document
                  authenticity and tamper-proof audit trails for every
                  transaction.
                </p>
                <a
                  href="https://www.proximax.ltd/en/solutions/edlx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-impact-card-link"
                >
                  Visit Project
                  <span className="px-link-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Card 03 — SiriusID */}
            <div className="px-impact-card">
              <div className="px-impact-card-image">
                <img src={SiriusidImg} alt="Siriusid" />
                <div className="px-impact-card-image-overlay" />
              </div>
              <div className="px-impact-card-body">
                <div className="px-impact-card-top">
                  <h3 className="px-impact-card-title">SiriusID</h3>
                </div>
                <p className="px-impact-card-description">
                  A decentralized identity system on ProximaX that enables
                  secure, self-managed digital identities for KYC and access
                  control — giving users full ownership of their credentials.
                </p>
                <a
                  href="https://www.proximax.ltd/en/solutions/siriusid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-impact-card-link"
                >
                  Visit Project
                  <span className="px-link-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ── Footer ────────────────────────────────────── */}
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
    </div>
  );
}

export default ProximaX;
