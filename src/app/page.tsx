import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/IPhone";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-black max-sm:overflow-y-auto">
      <Navbar />
      <Hero />
      <Highlights />
      {/* <Model /> */}
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
}
