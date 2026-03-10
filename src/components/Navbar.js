import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/20 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">QTrust</span>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              >
                Download
              </button>
              <a
                href="/history"
                className="text-gray-300 hover:text-indigo-400 transition-colors duration-200"
              >
                History
              </a>

              {/* === Auth Links === */}
              <Link
                to="/signin"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                Sign Up
              </Link>
              <Link
                to="/reset"
                className="text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                Reset
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
