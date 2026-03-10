import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InstallationGuide from "../components/InstallationGuide";
import Features from "../components/Features";

const DownloadPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <InstallationGuide />
        <Features />
      </main>
    </div>
  );
};

export default DownloadPage;
