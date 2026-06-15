import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Method from "@/components/sections/Method";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";

export default function Home() {
  return (
    <main>
      <WelcomeScreen />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Method />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
