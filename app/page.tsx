import Image from "next/image";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <section>
      <Hero />
      <Services />
      <Steps />
      <Pricing />
      <Portfolio />
      <Contact />
    </section>
  );
}
