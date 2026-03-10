import { useState } from "react";

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
      title: "Download the QTrust Extension",
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
      title: "Open Chrome Extensions Page",
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
      title: "Verify Installation & Start Using",
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

  return (
    <section
      id="installation"
      className="py-20 px-6 relative"
      style={{
        background: `
          linear-gradient(180deg, 
            rgba(49, 46, 129, 0.3) 0%, 
            rgba(76, 29, 149, 0.4) 25%, 
            rgba(31, 41, 55, 0.5) 50%, 
            rgba(17, 24, 39, 0.6) 75%, 
            rgba(0, 0, 0, 0.8) 100%
          )
        `,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-black/40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Installation Guide
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow these detailed steps to install QTrust and start detecting
            fake news with AI
          </p>
          <div className="mt-6 text-sm text-gray-400">
            Progress: {completedSteps.length}/6 steps completed
          </div>
        </div>

        {/* Centered grid container */}
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl w-full">
            {/* Steps Navigation */}
            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`border-l-4 transition-all duration-300 ${
                    completedSteps.includes(step.id)
                      ? "border-green-500"
                      : activeStep === step.id
                        ? "border-indigo-500"
                        : "border-gray-600"
                  }`}
                >
                  <button
                    onClick={() => setActiveStep(step.id)}
                    className={`w-full text-left p-6 rounded-r-2xl transition-all duration-300 ${
                      activeStep === step.id
                        ? "glass border-indigo-500 bg-indigo-500/10"
                        : "glass-dark hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                            completedSteps.includes(step.id)
                              ? "bg-green-500 text-white"
                              : activeStep === step.id
                                ? "bg-indigo-500 text-white"
                                : "bg-gray-600 text-gray-300"
                          }`}
                        >
                          {completedSteps.includes(step.id) ? "✓" : step.id}
                        </div>
                        <div>
                          <h3
                            className={`font-semibold text-lg ${
                              activeStep === step.id
                                ? "text-white"
                                : "text-gray-300"
                            }`}
                          >
                            Step {step.id}
                          </h3>
                          <p className="text-gray-400 text-sm">{step.title}</p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleStepCompletion(step.id);
                        }}
                        className={`w-6 h-6 rounded border-2 transition-colors ${
                          completedSteps.includes(step.id)
                            ? "bg-green-500 border-green-500"
                            : "border-gray-400 hover:border-green-400"
                        }`}
                      >
                        {completedSteps.includes(step.id) && (
                          <span className="text-white text-sm">✓</span>
                        )}
                      </button>
                    </div>
                  </button>
                </div>
              ))}
            </div>

            {/* Step Details */}
            <div className="glass-dark p-8 rounded-2xl sticky top-24">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">
                    {completedSteps.includes(activeStep) ? "✅" : "🔧"}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {steps[activeStep - 1].title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  {steps[activeStep - 1].description}
                </p>

                {/* Code snippet */}
                <div className="bg-gray-800/70 rounded-lg p-4 mb-6 border border-gray-700">
                  <code className="text-green-400 font-mono text-sm">
                    {steps[activeStep - 1].code}
                  </code>
                </div>

                {/* Details list */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-3">
                    Key Points:
                  </h4>
                  {steps[activeStep - 1].details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-indigo-400 mt-1">•</span>
                      <span className="text-gray-300">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 mt-8">
                  {activeStep > 1 && (
                    <button
                      onClick={() => setActiveStep(activeStep - 1)}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                    >
                      ← Previous
                    </button>
                  )}
                  {activeStep < 6 && (
                    <button
                      onClick={() => setActiveStep(activeStep + 1)}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                    >
                      Next →
                    </button>
                  )}
                  <button
                    onClick={() => toggleStepCompletion(activeStep)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      completedSteps.includes(activeStep)
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : "bg-gray-600 hover:bg-gray-500 text-white"
                    }`}
                  >
                    {completedSteps.includes(activeStep)
                      ? "✓ Completed"
                      : "Mark Complete"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Troubleshooting section */}
        <div className="mt-16 glass-dark p-8 rounded-2xl max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">
            Troubleshooting
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-indigo-400 mb-3">
                Common Issues:
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Extension not loading: Refresh extensions page</li>
                <li>• Developer mode missing: Update Chrome browser</li>
                <li>• Folder selection: Choose the extracted folder</li>
                <li>• Permission errors: Run Chrome as administrator</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-3">
                Need Help?
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Check Chrome version (minimum 88+)</li>
                <li>• Restart browser after installation</li>
                <li>• Contact support via GitHub</li>
                <li>• View video tutorial (coming soon)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationGuide;
