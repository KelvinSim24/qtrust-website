import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImg from "../lib/qtrust-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = (path: string) =>
    `text-xl font-medium px-4 py-2 rounded-full transition ${
      location.pathname === path
        ? "bg-purple-950 text-white"
        : "text-gray-300 hover:text-purple-400 "
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div
        className="max-w-7xl mx-auto px-6 lg:px-8 h-20"
        style={{ marginTop: "0.5rem" }}
      >
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            to="/home"
            className="text-3xl font-bold text-white hover:text-indigo-300 duration-200 flex items-center gap-2"
          >
            <img
              src={LogoImg}
              alt="QTrust logo"
              className="w-10 h-10 object-contain rounded-md"
            />
            QTrust
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/home" className={navItemClass("/home")}>
              Home
            </Link>
            <Link to="/about-us" className={navItemClass("/about-us")}>
              About Us
            </Link>
            <Link to="/proximax" className={navItemClass("/proximax")}>
              ProximaX
            </Link>
            <Link to="/download" className={navItemClass("/download")}>
              Download
            </Link>
            <Link to="/account" className={navItemClass("/account")}>
              Accounts
            </Link>
          </div>

          {/* Mobile burger */}
          <button className="md:hidden text-gray-300 hover:text-indigo-400">
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
