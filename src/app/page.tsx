import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Home() {
  return (
    <main>
      <WelcomeScreen />
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
