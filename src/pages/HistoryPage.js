import Navbar from "../components/Navbar";

const HistoryPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <section
          className="py-20 px-6"
          style={{
            background: `
              linear-gradient(135deg, 
                #1e1b4b 0%, 
                #312e81 25%, 
                #4c1d95 50%, 
                #1f2937 75%, 
                #111827 100%
              )
            `,
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trust Score History
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              View your complete history of verified posts and trust scores
            </p>

            <div className="glass-dark p-12 rounded-2xl">
              <div className="text-6xl mb-6">📊</div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-300">
                The history feature is currently in development. Soon you'll be
                able to view all your verification history, trust scores, and
                analytics.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HistoryPage;
