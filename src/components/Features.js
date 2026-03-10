const Features = () => {
  const features = [
    {
      icon: "🔬",
      title: "Hybrid QML",
      subtitle: "Quantum Machine Learning",
      description:
        "Advanced quantum computing algorithms combined with classical AI for unprecedented accuracy in fake news detection.",
      details: [
        "Quantum pattern recognition",
        "Neural network integration",
        "95% accuracy rate",
        "Real-time analysis",
      ],
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: "🧠",
      title: "Crowdsourcing",
      subtitle: "Community Intelligence",
      description:
        "Harnesses collective wisdom through community verification and voting to continuously improve trust scoring.",
      details: [
        "Community verification",
        "Reputation-based voting",
        "Bias reduction algorithms",
        "Continuous learning",
      ],
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: "🔐",
      title: "Blockchain",
      subtitle: "ProximaX Network",
      description:
        "Immutable trust score logging on ProximaX blockchain ensures transparency and prevents data manipulation.",
      details: [
        "Immutable logging",
        "Transparent scoring",
        "Decentralized storage",
        "Audit trail",
      ],
      color: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <section
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
            Why Use QTrust?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Advanced technology stack combining quantum computing, community
            wisdom, and blockchain security for the most reliable fake news
            detection available.
          </p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>95% Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Real-time Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Blockchain Verified</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-dark p-8 rounded-2xl group hover:scale-105 transition-all duration-500 hover:bg-white/15 cursor-pointer border border-gray-700 hover:border-gray-500"
            >
              {/* Icon and header */}
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div
                  className={`inline-block px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${feature.color} text-black mb-2`}
                >
                  {feature.subtitle}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Feature details */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Key Features:
                </h4>
                {feature.details.map((detail, detailIndex) => (
                  <div
                    key={detailIndex}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                    <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technical indicator */}
              <div className="mt-6 pt-6 border-t border-gray-700 group-hover:border-gray-600 transition-colors duration-300">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Technology Status</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">Active</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical specifications */}
        <div className="mt-16 glass-dark p-8 rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Technical Specifications
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-400 mb-2">
                &lt;100ms
              </div>
              <div className="text-gray-300 text-sm">Analysis Speed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">
                95.7%
              </div>
              <div className="text-gray-300 text-sm">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-gray-300 text-sm">Posts Analyzed</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Ready to experience the future of fake news detection?
          </p>
          <button
            onClick={() =>
              document
                .getElementById("installation")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
