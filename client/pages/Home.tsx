import Navbar from "../components/Navbar";

// Home component - Landing page separate from Download page
// Educational Note: This creates a distinct homepage that's different from the download functionality
const Home = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero Section - Different from Download page */}
        <section
          className="py-20 px-6 relative min-h-screen flex items-center justify-center overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #4c1d95 50%, #1f2937 75%, #111827 100%)
            `,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-3xl animate-pulse" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            {/* Main heading - different from Download page */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Welcome to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                QTrust
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              The future of fake news detection using Quantum AI, Crowdsourcing,
              and Blockchain technology. Protect yourself and others from
              misinformation on social media.
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a href="/#download" className="btn-primary text-lg">
                Get Started
              </a>

              <button
                onClick={scrollToFeatures}
                className="btn-secondary text-lg"
              >
                Learn More
              </button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-400 mb-2">
                  95%
                </div>
                <div className="text-gray-400">Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  1M+
                </div>
                <div className="text-gray-400">Posts Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-400">Real-time Protection</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-20 px-6 relative"
          style={{
            background: `
              linear-gradient(180deg, 
                rgba(17, 24, 39, 0.8) 0%, 
                rgba(31, 41, 55, 0.6) 25%, 
                rgba(55, 65, 81, 0.4) 50%, 
                rgba(75, 85, 99, 0.3) 75%, 
                rgba(0, 0, 0, 0.9) 100%
              )
            `,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose QTrust?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced technology stack for the most reliable fake news
                detection
              </p>
            </div>

            {/* Feature cards */}
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔬",
                  title: "Quantum AI",
                  description:
                    "Advanced quantum machine learning algorithms provide unprecedented accuracy in detecting misinformation patterns.",
                },
                {
                  icon: "🧠",
                  title: "Community Wisdom",
                  description:
                    "Harness collective intelligence through community verification and reputation-based voting systems.",
                },
                {
                  icon: "🔐",
                  title: "Blockchain Security",
                  description:
                    "Immutable trust score logging on ProximaX blockchain ensures transparency and prevents data manipulation.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="content-card text-center group cursor-pointer"
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center mt-16">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Start Detecting Fake News?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of users already protecting themselves from
                misinformation
              </p>
              <a href="/#download" className="btn-primary text-lg">
                Download QTrust Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
