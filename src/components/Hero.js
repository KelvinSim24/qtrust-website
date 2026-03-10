import { useState } from "react";

const Hero = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const scrollToInstallation = () => {
    const element = document.getElementById("installation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      // Create and download a zip file with extension files
      const response = await fetch("/downloads/QTrustExtension.zip");
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "QTrustExtension.zip";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        // Fallback: Create downloadable content dynamically
        const extensionFiles = {
          "manifest.json": JSON.stringify(
            {
              manifest_version: 3,
              name: "QTrust - Fake News Detector",
              version: "1.0.0",
              description: "Detect fake news on X using Quantum AI",
              permissions: ["activeTab", "storage", "scripting"],
              host_permissions: ["https://twitter.com/*", "https://x.com/*"],
              content_scripts: [
                {
                  matches: ["https://twitter.com/*", "https://x.com/*"],
                  js: ["content.js"],
                  css: ["styles.css"],
                },
              ],
              background: { service_worker: "background.js" },
              action: {
                default_popup: "popup.html",
                default_title: "QTrust - Verify Post",
              },
            },
            null,
            2,
          ),
        };

        // Create download
        const blob = new Blob([extensionFiles["manifest.json"]], {
          type: "application/json",
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "QTrust-manifest.json";
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }

      // Show success message
      const notification = document.createElement("div");
      notification.className =
        "fixed top-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg z-50";
      notification.textContent =
        "✅ QTrust extension downloaded! Follow the installation guide below.";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced gradient background with smooth transitions */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #4c1d95 50%, #1f2937 75%, #111827 100%)
          `,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Download{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            QTrust
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Detect Fake News on X using Quantum AI, Crowdsourcing, and Blockchain
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className={`bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
              isDownloading ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isDownloading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Downloading...
              </span>
            ) : (
              "Download for Chrome"
            )}
          </button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-dark text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
          >
            View Source (GitHub)
          </a>
        </div>

        <button
          onClick={scrollToInstallation}
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300 animate-bounce"
        >
          <span className="text-sm mb-2">Installation Guide</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
