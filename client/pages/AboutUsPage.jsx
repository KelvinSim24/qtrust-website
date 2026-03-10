import React, { useRef, useEffect } from "react";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./AboutUsPage.css";

import MatthewYapImage from "../lib/Matthew Yap.png";
import JaydenLotanImage from "../lib/Jayden Lotan.png";
import KelvinSimImage from "../lib/Kelvin Sim.png";
import WongHeeSoonImage from "../lib/Wong Hee Soon.png";
import OoiXianBiaoImage from "../lib/Ooi Xian Biao.png";
import TeeWeeJingImage from "../lib/Tee Wei Jing.png";
import LogoImg from "../lib/qtrust-logo.png";

const AboutUsPage = () => {
  const trackRef = useRef(null);
  const prevBtnRef = useRef(null);
  const nextBtnRef = useRef(null);
  const SCROLL_AMOUNT = 320;

  // ── Arrow scroll — must be inside useEffect so the DOM exists ──
  useEffect(() => {
    const track = trackRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    if (!track || !prevBtn || !nextBtn) return;

    const updateArrows = () => {
      prevBtn.style.opacity = track.scrollLeft <= 0 ? "0.3" : "1";
      nextBtn.style.opacity =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 4
          ? "0.3"
          : "1";
    };

    const handleNext = () =>
      track.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    const handlePrev = () =>
      track.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });

    nextBtn.addEventListener("click", handleNext);
    prevBtn.addEventListener("click", handlePrev);
    track.addEventListener("scroll", updateArrows);
    updateArrows();

    return () => {
      nextBtn.removeEventListener("click", handleNext);
      prevBtn.removeEventListener("click", handlePrev);
      track.removeEventListener("scroll", updateArrows);
    };
  }, []);

  // ── Team data ───────────────────────────────────────
  const supervisor = {
    name: "Tee Wee Jing",
    role: "Supervisor",
    image: TeeWeeJingImage,
  };

  const teamMembers = [
    {
      name: "Matthew Yap",
      role: "Bachelor of Software Engineering",
      image: MatthewYapImage,
    },
    {
      name: "Jayden Lotan",
      role: "Bachelor of Computer Science",
      image: JaydenLotanImage,
    },
    {
      name: "Kelvin Sim",
      role: "Bachelor of Software Engineering",
      image: KelvinSimImage,
    },
    {
      name: "Wong Hee Soon",
      role: "Bachelor of Software Engineering",
      image: WongHeeSoonImage,
    },
    {
      name: "Ooi Xian Biao",
      role: "Bachelor of Software Engineering",
      image: OoiXianBiaoImage,
    },
  ];

  const allMembers = [supervisor, ...teamMembers];

  return (
    <div className="about-page">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────── */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1 className="about-hero-title">About Us</h1>
            <p className="about-hero-subtitle">
              Pioneering the future of news verification through quantum-powered
              AI technology
            </p>
          </div>
        </div>
      </section>

      {/* ── Intro / Origin Story ──────────────────────── */}
      <section className="about-feature">
        <div className="about-intro-overlay"></div>
        <div className="about-intro-container">
          {/* Two-col grid: text left, image right */}
          <div className="about-intro-grid">
            <div className="about-intro-content">
              <div className="qa-label">Our Origin Story</div>
              <h2 className="about-intro-title">
                Built to bring <span className="brand-text">trust back</span> to
                the internet.
              </h2>
              <p className="about-intro-description">
                We grew up in a world shaped by social media — platforms where
                information spreads faster than it can be verified. During major
                events like elections, health crises, and breaking news, we saw
                how easily misleading content could circulate online.{" "}
                <em>
                  "Anyone can post anything. The speed of a share often outpaces
                  the speed of a fact-check."
                </em>{" "}
                This led us to explore how technology could help people evaluate
                information more clearly. QTrust is our attempt to experiment
                with quantum machine learning and blockchain to support more
                transparent and real-time content verification.
              </p>
            </div>

            <div className="about-intro-image">
              <img
                src="client\lib\img-2.png"
                alt="About QTrust - Quantum AI Fake News Detection Platform"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="about-intro">
        {/* Vision & Mission */}
        <div className="container">
          <div className="vm-header">
            <h2 className="vm-header-title">Our Vision &amp; Mission</h2>
            <p className="vm-header-subtitle">
              Two sides of the same belief that the internet can be a place
              where truth has a fighting chance.
            </p>
          </div>

          <div className="vm-grid">
            <div className="vm-block">
              <div className="qa-label">Vision</div>
              <h3 className="vm-block-title">
                A world where anyone can tell{" "}
                <em className="vm-accent-blue">what's real.</em> on social
                media.
              </h3>
              <p className="vm-block-description">
                We imagine a future where spotting misinformation on social
                media is as natural as reading it. Where every post carries a
                trust signal, every claim can be verified, and no one has to
                wonder if what they just read is true. QTrust is building that
                world — one tweet at a time.
              </p>
            </div>

            <div className="vm-block">
              <div className="qa-label">Mission</div>
              <h3 className="vm-block-title">
                Detect, explain, and eliminate fake news{" "}
                <em className="vm-accent-purple">in real time.</em>
              </h3>
              <p className="vm-block-description">
                Our mission is to harness quantum machine learning and
                blockchain technology to create real-time, transparent content
                verification that anyone can use — giving everyday people the
                power to question what they read and share with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features / Stats ──────────────────────────── */}
      <section className="about-feature-1">
        <div className="container">
          <div className="about-stats">
            <div className="homepage-stat-item-1">
              <div className="homepage-stat-title">
                Fake News Detection with AI
              </div>
              <div className="homepage-stat-label">
                Uses the combination of classical machine learning and Quantum
                Machine Learning model to detect fake news on social media.
              </div>
            </div>
            <div className="homepage-stat-item">
              <div className="homepage-stat-title">Crowdsourced Voting</div>
              <div className="homepage-stat-label">
                Users can vote whether a tweet is real or fake, adding a layer
                of human judgment to support the system's accuracy.
              </div>
            </div>
            <div className="homepage-stat-item">
              <div className="homepage-stat-title">
                Blockchain Verification via ProximaX
              </div>
              <div className="homepage-stat-label">
                All Trust Index scores are stored securely on the blockchain,
                and users can verify them through Sirius Explorer.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Section ──────────────────────────────── */}
      <section className="about-team">
        <div className="container">
          <div className="about-team__header-left">
            <div className="qa-label">The People Behind QTrust</div>
            <h2 className="about-team__title">Meet the Team</h2>
            {/* <p className="about-team__subtitle">
              Students from Taylor's University who decided frustration wasn't
              enough — and built something instead.
            </p> */}
          </div>
          <div className="about-team__header-right">
            <button
              ref={prevBtnRef}
              className="about-team__arrow"
              aria-label="Scroll left"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              ref={nextBtnRef}
              className="about-team__arrow"
              aria-label="Scroll right"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="container">
          <div className="about-team__track" ref={trackRef}>
            {allMembers.map((member, index) => (
              <div className="about-team__card" key={index}>
                <div className="about-team__photo-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="about-team__photo"
                  />
                  <div className="about-team__overlay" />
                </div>
                <div className="about-team__info">
                  <h3 className="about-team__name">{member.name}</h3>
                  <p className="about-team__degree">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="about-cta">
        <div className="about-cta-overlay"></div>
        <div className="about-cta-bg"></div>
        <div className="about-cta-container">
          <h2 className="about-cta-title">
            Ready to Experience the Future of News Verification?
          </h2>
          <p className="about-cta-subtitle">
            Join thousands of users who trust QTrust for reliable, verified
            news.
          </p>
          <div
            className="about-cta-buttons"
            style={{ justifyContent: "center" }}
          >
            <Link to="/download" className="btn btn-secondary about-cta-btn">
              <Download className="btn-icon mr-2" />
              Download QTrust
            </Link>
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
};

export default AboutUsPage;
