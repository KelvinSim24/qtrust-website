import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { Download, ExternalLink, AlertTriangle } from "lucide-react";
import "./Homepage.css"; // Homepage-specific styles
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoImg from "../lib/qtrust-logo.png";

const Homepage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const downloadBtnRef = useRef(null);
  const aboutBtnRef = useRef(null);

  // Mouse move handler for glow effect
  const handleMouseMove = (e, btnRef) => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Debunked":
      case "False":
        return "status-red";
      case "Misleading":
        return "status-orange";
      case "Hoax":
      case "Fabricated":
        return "status-red";
      case "AI-Generated":
        return "status-purple";
      default:
        return "status-gray";
    }
  };

  return (
    <div className="homepage">
      <Navbar />
      {/* Hero Section WITH ANIMATED BACKGROUND */}
      <section className="homepage-hero">
        {/* Background Layers - Pure CSS Magic */}
        <div className="homepage-hero-bg">
          <video
            autoPlay
            loop
            muted
            playsInline
            // poster="/path/to/poster-image.jpg"
          >
            <source src="client\lib\homepage-bg-1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Hero Content */}
        <section className="homepage-hero-container">
          <div className="homepage-hero-content">
            <h1 className="homepage-hero-title">
              Welcome to <span className="brand-text-1">QTrust</span>
            </h1>

            <h2 className="homepage-hero-subtitle">
              Harness the power of quantum AI, blockchain verification, and
              democratic crowdsourcing to detect fake news with
              <span className="homepage-hero-accent"> 98.28% accuracy</span>
              —before misinformation spreads.
            </h2>

            <div className="homepage-hero-buttons">
              {/* Secondary Button */}
              <Link
                to="/about-us"
                className="btn btn-secondary"
                ref={aboutBtnRef}
                onMouseMove={(e) => handleMouseMove(e, aboutBtnRef)}
              >
                <span>More About Us</span>
              </Link>

              {/* Primary Button with Glow */}
              <Link
                to="/download"
                className="btn btn-primary flex items-center"
                ref={downloadBtnRef}
                onMouseMove={(e) => handleMouseMove(e, downloadBtnRef)}
              >
                <Download className="btn-icon mr-2" />
                <span>DOWNLOAD QTrust</span>
              </Link>
            </div>
          </div>
        </section>
      </section>
      {/* Introduction */}
      <section className="homepage-intro">
        <div className="homepage-intro-container">
          <div className="homepage-intro-content">
            <h1 className="homepage-intro-title">
              Combat Misinformation with{" "}
              <span className="brand-text">QTrust</span>
            </h1>
            <p className="homepage-intro-description">
              QTrust is an AI-powered system to detect fake news on social media
              X (Formerly Known as Twitter). Utilizing Hybrid Quantum Machine
              Learning, Crowdsourcing, and Blockchain, it helps users verify the
              credibility of social media X content.
            </p>
            <div className="homepage-stats">
              <div className="homepage-stat-item-1">
                <div className="homepage-stat-number">98.28%</div>
                <div className="homepage-stat-label">Accuracy Rate</div>
              </div>
              <div className="homepage-stat-item">
                <div className="homepage-stat-number">50+</div>
                <div className="homepage-stat-label">Tweet Evaluated</div>
              </div>
              <div className="homepage-stat-item">
                <div className="homepage-stat-number">100%</div>
                <div className="homepage-stat-label">Blockchain Secured</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT US SECTION (NEW - IMAGE + TEXT) */}
      <section className="homepage-about">
        <div className="homepage-about-container">
          {/* Image + Text Grid */}
          <div className="homepage-about-grid">
            {/* Left Side - Image */}
            <div className="homepage-about-content">
              <h2 className="homepage-about-title">
                Why <span className="brand-text">QTrust</span>?
              </h2>

              <p className="homepage-about-description">
                Twitter/X lacks content verification, letting misinformation
                spread unchecked. QTrust changes this. Our hybrid
                quantum-classical AI achieves 98.28% accuracy by quantum machine
                learning. Every result is transparent and tamper-proof—finally
                bringing real-time trust to social media by using blockchain
                verification on ProximaX.
              </p>

              {/* CTA Button */}
              <div className="homepage-about-cta">
                <Link
                  to="/about-us"
                  className="btn btn-secondary homepage-about-btn"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="homepage-about-image">
              <img
                src="client\lib\img-1.png"
                alt="About QTrust - Quantum AI Fake News Detection Platform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =================== CAN YOU TELL WHAT'S FAKE? SECTION =================== */}
      <section className="homepage-interactive">
        <div className="container-1">
          {/* Section Header */}
          <div className="homepage-interactive-header">
            <h2 className="section-title">Can You Tell What's Fake?</h2>
            <p className="homepage-interactive-subtitle">
              Hover over each tweet to reveal if it's real news or
              misinformation. See how easy it is to be fooled and why QTrust
              matters.
            </p>
            <div className="homepage-interactive-disclaimer">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path
                  d="M12 16v-4M12 8h.01"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span> Not actual tweets from X/Twitter</span>
            </div>
          </div>

          {/* Scrolling Tweets Container */}
          <div className="homepage-tweets-marquee">
            {/* Row 1: Left Direction */}
            <div className="homepage-tweets-row">
              <div className="homepage-tweets-track">
                {/* Tweet 1 - FAKE */}
                <div className="homepage-tweet-card" data-verdict="fake">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=33" alt="User" />
                      <div className="homepage-tweet-verified">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#1DA1F2"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">
                        Breaking News Daily
                      </span>
                      <span className="homepage-tweet-handle">
                        @BreakingNewsNow
                      </span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    🚨 BREAKING: Scientists confirm coffee cures cancer! New
                    study shows 5 cups daily eliminates all cancer cells. Share
                    this now! #Health #Miracle
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>2.3M views</span>
                    <span>89K retweets</span>
                    <span>156K likes</span>
                  </div>
                  {/* Verdict Overlay */}
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      FAKE NEWS
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      No credible scientific study supports this claim. This is
                      classic health misinformation designed to go viral.
                    </p>
                  </div>
                </div>

                {/* Tweet 2 - REAL */}
                <div className="homepage-tweet-card" data-verdict="real">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=68" alt="User" />
                      <div className="homepage-tweet-verified">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#1DA1F2"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">NASA</span>
                      <span className="homepage-tweet-handle">@NASA</span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    New images from James Webb Space Telescope reveal
                    unprecedented details of distant galaxies formed 13 billion
                    years ago. Full report: nasa.gov/webb
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>8.7M views</span>
                    <span>234K retweets</span>
                    <span>892K likes</span>
                  </div>
                  {/* Verdict Overlay */}
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      VERIFIED REAL
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Official NASA account with verifiable link to their
                      website. Consistent with other credible space news
                      sources.
                    </p>
                  </div>
                </div>

                {/* Tweet 3 - FAKE */}
                <div className="homepage-tweet-card" data-verdict="fake">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=52" alt="User" />
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">Truth Exposed</span>
                      <span className="homepage-tweet-handle">
                        @RealTruthNews
                      </span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    🔥 SHOCKING: Government admits 5G towers cause COVID-19!
                    Leaked documents prove cover-up. They don't want you to
                    know! #WakeUp #Truth
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>1.8M views</span>
                    <span>67K retweets</span>
                    <span>103K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      FAKE NEWS
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Debunked conspiracy theory. No scientific evidence
                      supports this claim. Radio waves cannot cause viral
                      infections.
                    </p>
                  </div>
                </div>

                {/* Tweet 4 - REAL */}
                <div className="homepage-tweet-card" data-verdict="real">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=12" alt="User" />
                      <div className="homepage-tweet-verified">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#1DA1F2"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">
                        World Health Organization
                      </span>
                      <span className="homepage-tweet-handle">@WHO</span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    Regular hand washing with soap and water for at least 20
                    seconds remains one of the most effective ways to prevent
                    disease transmission.
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>4.2M views</span>
                    <span>178K retweets</span>
                    <span>567K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      VERIFIED REAL
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Official WHO account sharing scientifically proven health
                      advice. Verified by multiple health authorities.
                    </p>
                  </div>
                </div>

                {/* Duplicate tweets for seamless loop */}
                {/* Tweet 1 - FAKE (duplicate) */}
                <div className="homepage-tweet-card" data-verdict="fake">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=33" alt="User" />
                      <div className="homepage-tweet-verified">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#1DA1F2"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">
                        Breaking News Daily
                      </span>
                      <span className="homepage-tweet-handle">
                        @BreakingNewsNow
                      </span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    🚨 BREAKING: Scientists confirm coffee cures cancer! New
                    study shows 5 cups daily eliminates all cancer cells. Share
                    this now! #Health #Miracle
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>2.3M views</span>
                    <span>89K retweets</span>
                    <span>156K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      FAKE NEWS
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      No credible scientific study supports this claim. This is
                      classic health misinformation designed to go viral.
                    </p>
                  </div>
                </div>

                {/* Tweet 2 - REAL */}
                <div className="homepage-tweet-card" data-verdict="real">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=68" alt="User" />
                      <div className="homepage-tweet-verified">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#1DA1F2"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">NASA</span>
                      <span className="homepage-tweet-handle">@NASA</span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    New images from James Webb Space Telescope reveal
                    unprecedented details of distant galaxies formed 13 billion
                    years ago. Full report: nasa.gov/webb
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>8.7M views</span>
                    <span>234K retweets</span>
                    <span>892K likes</span>
                  </div>
                  {/* Verdict Overlay */}
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      VERIFIED REAL
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Official NASA account with verifiable link to their
                      website. Consistent with other credible space news
                      sources.
                    </p>
                  </div>
                </div>

                {/* Tweet 3 - FAKE */}
                <div className="homepage-tweet-card" data-verdict="fake">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=52" alt="User" />
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">Truth Exposed</span>
                      <span className="homepage-tweet-handle">
                        @RealTruthNews
                      </span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    🔥 SHOCKING: Government admits 5G towers cause COVID-19!
                    Leaked documents prove cover-up. They don't want you to
                    know! #WakeUp #Truth
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>1.8M views</span>
                    <span>67K retweets</span>
                    <span>103K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      FAKE NEWS
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Debunked conspiracy theory. No scientific evidence
                      supports this claim. Radio waves cannot cause viral
                      infections.
                    </p>
                  </div>
                </div>

                {/* Tweet 4 - REAL */}
                <div className="homepage-tweet-card" data-verdict="real">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=12" alt="User" />
                      <div className="homepage-tweet-verified">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#1DA1F2"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">
                        World Health Organization
                      </span>
                      <span className="homepage-tweet-handle">@WHO</span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    Regular hand washing with soap and water for at least 20
                    seconds remains one of the most effective ways to prevent
                    disease transmission.
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>4.2M views</span>
                    <span>178K retweets</span>
                    <span>567K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      VERIFIED REAL
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Official WHO account sharing scientifically proven health
                      advice. Verified by multiple health authorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Right Direction (Reverse) */}
            <div className="homepage-tweets-row">
              <div className="homepage-tweets-track homepage-tweets-track-reverse">
                {/* Different set of tweets for row 2 */}
                {/* Tweet 5 - FAKE */}
                <div className="homepage-tweet-card" data-verdict="fake">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=47" alt="User" />
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">Viral Trends</span>
                      <span className="homepage-tweet-handle">
                        @ViralTrends24
                      </span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    💰 Billionaire admits market crash coming next week! Insider
                    trading leaked. Get out NOW before you lose everything!
                    #StockMarket #Urgent
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>3.1M views</span>
                    <span>125K retweets</span>
                    <span>210K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      FAKE NEWS
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Financial fear-mongering with no credible sources.
                      Designed to create panic and drive engagement.
                    </p>
                  </div>
                </div>

                {/* Tweet 5 - FAKE: Market Crash */}
                <div className="homepage-tweet-card" data-verdict="fake">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=47" alt="User" />
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">Viral Trends</span>
                      <span className="homepage-tweet-handle">
                        @ViralTrends24
                      </span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    💰 Billionaire admits market crash coming next week! Insider
                    trading leaked. Get out NOW before you lose everything!
                    #StockMarket #Urgent
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>3.1M views</span>
                    <span>125K retweets</span>
                    <span>210K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      FAKE NEWS
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Financial fear-mongering with no credible sources.
                      Designed to create panic and drive engagement.
                    </p>
                  </div>
                </div>

                {/* Tweet 6 - REAL: NYT Fed Rate */}
                <div className="homepage-tweet-card" data-verdict="real">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=60" alt="User" />
                      <div className="homepage-tweet-verified">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#1DA1F2"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">
                        The New York Times
                      </span>
                      <span className="homepage-tweet-handle">@nytimes</span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    Breaking: Federal Reserve announces 0.25% interest rate
                    adjustment following economic data review. Full analysis:
                    nyti.ms/fed-rate
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>6.8M views</span>
                    <span>145K retweets</span>
                    <span>421K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      VERIFIED REAL
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Verified news organization reporting on official Federal
                      Reserve announcement with credible source link.
                    </p>
                  </div>
                </div>

                {/* Tweet 7 - FAKE: Weight Loss Scam */}
                <div className="homepage-tweet-card" data-verdict="fake">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=15" alt="User" />
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">
                        Health News Today
                      </span>
                      <span className="homepage-tweet-handle">
                        @HealthNews247
                      </span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    🔥 DOCTORS SHOCKED: This one weird trick melts belly fat
                    overnight! FDA trying to ban it! Click now before they
                    delete this! #WeightLoss
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>2.9M views</span>
                    <span>98K retweets</span>
                    <span>187K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      FAKE NEWS
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Classic clickbait scam. No legitimate weight loss happens
                      overnight. Using fear tactics and false urgency.
                    </p>
                  </div>
                </div>

                {/* Tweet 8 - REAL: BBC Climate */}
                <div className="homepage-tweet-card" data-verdict="real">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=28" alt="User" />
                      <div className="homepage-tweet-verified">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#1DA1F2"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">BBC News</span>
                      <span className="homepage-tweet-handle">@BBCNews</span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    Climate summit concludes with 150+ nations committing to
                    carbon reduction targets. Details from our environment
                    correspondent: bbc.in/climate
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>5.4M views</span>
                    <span>189K retweets</span>
                    <span>567K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      VERIFIED REAL
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Official BBC News account reporting on verifiable
                      international summit with credible source link.
                    </p>
                  </div>
                </div>

                {/* Tweet 9 - FAKE: Apple Delete Hoax */}
                <div className="homepage-tweet-card" data-verdict="fake">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=41" alt="User" />
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">Tech Insider</span>
                      <span className="homepage-tweet-handle">
                        @TechInsider99
                      </span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    ⚠️ ALERT: Apple will delete all iPhones remotely tomorrow at
                    midnight! Backup NOW or lose everything forever! Apple won't
                    warn you! SHARE!!!
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>4.2M views</span>
                    <span>178K retweets</span>
                    <span>298K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      FAKE NEWS
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Completely fabricated scare tactic. Apple has never and
                      would never do this. Pure misinformation to cause panic.
                    </p>
                  </div>
                </div>

                {/* Tweet 10 - REAL: Reuters EU */}
                <div className="homepage-tweet-card" data-verdict="real">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=19" alt="User" />
                      <div className="homepage-tweet-verified">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#1DA1F2"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">Reuters</span>
                      <span className="homepage-tweet-handle">@Reuters</span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    European Union announces new data privacy regulations
                    affecting tech companies operating in member states.
                    Implementation begins Q2 2025.
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>3.9M views</span>
                    <span>112K retweets</span>
                    <span>334K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      VERIFIED REAL
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Reuters is a trusted global news agency. This reports on
                      official EU policy announcement with factual details.
                    </p>
                  </div>
                </div>
                {/* Tweet 5 - FAKE: Market Crash */}
                <div className="homepage-tweet-card" data-verdict="fake">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=47" alt="User" />
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">Viral Trends</span>
                      <span className="homepage-tweet-handle">
                        @ViralTrends24
                      </span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    💰 Billionaire admits market crash coming next week! Insider
                    trading leaked. Get out NOW before you lose everything!
                    #StockMarket #Urgent
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>3.1M views</span>
                    <span>125K retweets</span>
                    <span>210K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      FAKE NEWS
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Financial fear-mongering with no credible sources.
                      Designed to create panic and drive engagement.
                    </p>
                  </div>
                </div>

                {/* Tweet 6 - REAL: NYT Fed Rate */}
                <div className="homepage-tweet-card" data-verdict="real">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=60" alt="User" />
                      <div className="homepage-tweet-verified">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#1DA1F2"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">
                        The New York Times
                      </span>
                      <span className="homepage-tweet-handle">@nytimes</span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    Breaking: Federal Reserve announces 0.25% interest rate
                    adjustment following economic data review. Full analysis:
                    nyti.ms/fed-rate
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>6.8M views</span>
                    <span>145K retweets</span>
                    <span>421K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      VERIFIED REAL
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Verified news organization reporting on official Federal
                      Reserve announcement with credible source link.
                    </p>
                  </div>
                </div>

                {/* Tweet 7 - FAKE: Weight Loss Scam */}
                <div className="homepage-tweet-card" data-verdict="fake">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=15" alt="User" />
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">
                        Health News Today
                      </span>
                      <span className="homepage-tweet-handle">
                        @HealthNews247
                      </span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    🔥 DOCTORS SHOCKED: This one weird trick melts belly fat
                    overnight! FDA trying to ban it! Click now before they
                    delete this! #WeightLoss
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>2.9M views</span>
                    <span>98K retweets</span>
                    <span>187K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      FAKE NEWS
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Classic clickbait scam. No legitimate weight loss happens
                      overnight. Using fear tactics and false urgency.
                    </p>
                  </div>
                </div>

                {/* Tweet 8 - REAL: BBC Climate */}
                <div className="homepage-tweet-card" data-verdict="real">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=28" alt="User" />
                      <div className="homepage-tweet-verified">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#1DA1F2"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">BBC News</span>
                      <span className="homepage-tweet-handle">@BBCNews</span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    Climate summit concludes with 150+ nations committing to
                    carbon reduction targets. Details from our environment
                    correspondent: bbc.in/climate
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>5.4M views</span>
                    <span>189K retweets</span>
                    <span>567K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      VERIFIED REAL
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Official BBC News account reporting on verifiable
                      international summit with credible source link.
                    </p>
                  </div>
                </div>

                {/* Tweet 9 - FAKE: Apple Delete Hoax */}
                <div className="homepage-tweet-card" data-verdict="fake">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=41" alt="User" />
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">Tech Insider</span>
                      <span className="homepage-tweet-handle">
                        @TechInsider99
                      </span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    ⚠️ ALERT: Apple will delete all iPhones remotely tomorrow at
                    midnight! Backup NOW or lose everything forever! Apple won't
                    warn you! SHARE!!!
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>4.2M views</span>
                    <span>178K retweets</span>
                    <span>298K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 17L12 22L22 17"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M2 12L12 17L22 12"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      FAKE NEWS
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Completely fabricated scare tactic. Apple has never and
                      would never do this. Pure misinformation to cause panic.
                    </p>
                  </div>
                </div>

                {/* Tweet 10 - REAL: Reuters EU */}
                <div className="homepage-tweet-card" data-verdict="real">
                  <div className="homepage-tweet-header">
                    <div className="homepage-tweet-avatar">
                      <img src="https://i.pravatar.cc/150?img=19" alt="User" />
                      <div className="homepage-tweet-verified">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#1DA1F2"
                        >
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      </div>
                    </div>
                    <div className="homepage-tweet-info">
                      <span className="homepage-tweet-name">Reuters</span>
                      <span className="homepage-tweet-handle">@Reuters</span>
                    </div>
                  </div>
                  <p className="homepage-tweet-text">
                    European Union announces new data privacy regulations
                    affecting tech companies operating in member states.
                    Implementation begins Q2 2025.
                  </p>
                  <div className="homepage-tweet-meta">
                    <span>3.9M views</span>
                    <span>112K retweets</span>
                    <span>334K likes</span>
                  </div>
                  <div className="homepage-tweet-verdict">
                    <div className="homepage-tweet-verdict-badge">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                      VERIFIED REAL
                    </div>
                    <p className="homepage-tweet-verdict-reason">
                      Reuters is a trusted global news agency. This reports on
                      official EU policy announcement with factual details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="idx-faq">
        <div className="container">
          <div className="idx-faq-inner1">
            {/* Image */}
            <div className="idx-faq-image2" />
            <div className="idx-faq-inner-1">
              <div className="idx-faq-header">
                <div className="qa-label">FAQ</div>
                <h2 className="section-title">Frequently Asked Questions</h2>
                <p className="px-section-subtitle">
                  Everything you need to know about QTrust.
                </p>
              </div>
              {/* Questions */}
              <div className="idx-faq-list">
                {[
                  {
                    q: "What is QTrust and why should I care?",
                    a: "QTrust is a free Chrome extension that automatically checks whether a tweet on X (formerly Twitter) is real or fake — right as you scroll. With misinformation spreading faster than ever, QTrust gives you a trust score for every post so you can read with confidence, not doubt.",
                  },
                  {
                    q: "How does QTrust know if something is fake?",
                    a: "QTrust combines three things: an AI model trained to spot misinformation, votes from real users who flag or verify content, and blockchain records that prevent anyone from tampering with the results. Together they produce a Trust Index — a simple score that tells you how credible a tweet is.",
                  },
                  {
                    q: "Do I need to be tech-savvy to use it?",
                    a: "Not at all. Once installed, QTrust works silently in the background. As you browse X, it automatically displays a trust score next to tweets. No buttons to press, no settings to configure — it just works.",
                  },
                  {
                    q: "Is QTrust free? Do I need to sign up?",
                    a: "QTrust is completely free to download and use. You can start detecting fake news right away without creating an account. An optional account lets you participate in community voting and see your personal history.",
                  },
                  {
                    q: "Will QTrust tell me what to believe?",
                    a: "No — and that's intentional. QTrust gives you information, not instructions. It shows you a credibility score and the reasoning behind it so you can make your own informed decision. Think of it as a second opinion, not a verdict.",
                  },
                ].map((faq, i) => (
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
          </div>
        </div>
      </section>
      {/* Footer */}
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
};

export default Homepage;
