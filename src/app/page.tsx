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
import { client } from "@/sanity/lib/client";

export default async function Home() {
  const projects = await client.fetch(`*[_type == "project"] {
    title,
    category,
    image
  }`);

  const services = await client.fetch(`*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon
  }`);

  const about = await client.fetch(`*[_type == "about"][0] {
    aboutText,
    visionText,
    missionText,
    statsProjects,
    statsClients,
    statsBrands,
    statsYears
  }`);

  const siteImages = await client.fetch(`*[_type == "siteImages"][0] {
    heroImage,
    aboutImage,
    servicesBanner,
    realisationsBanner,
    realisationsEndImage,
    methodBanner,
    statsBanner,
    clientLogos
  }`);

  return (
    <main>
      <WelcomeScreen />
      <Navbar />
      <Hero heroImage={siteImages?.heroImage} />
      <About aboutData={about} aboutImage={siteImages?.aboutImage} />
      <Services services={services} bannerImage={siteImages?.servicesBanner} isHomeTeaser={true} />
      <Portfolio projects={projects} isHomeTeaser={true} />
      <Method methodBanner={siteImages?.methodBanner} />
      <WhyUs />
      <Testimonials statsBanner={siteImages?.statsBanner} clientLogos={siteImages?.clientLogos} />
      <Contact />
      <Footer />
    </main>
  );
}
