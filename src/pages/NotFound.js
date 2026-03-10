import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-20">
        <section
          className="py-20 px-6 flex items-center justify-center min-h-screen"
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
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-8xl mb-8">🔍</div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Go Home
              </a>
              <a
                href="/history"
                className="glass-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
              >
                View History
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NotFound;
