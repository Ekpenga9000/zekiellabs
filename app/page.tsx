"use client";
import {useRef, useLayoutEffect, useState} from "react";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ContactPopup from "./components/ContactPopup";
import Hero from "./components/Hero";
import PopupButton from "./components/PopupButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const triggerComponent = useRef(null);


  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.to(popupRef.current, {
      duration: 2,
      display: "block",
      ease: "power2",
      scrollTrigger: {
        trigger: triggerComponent.current,
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section>
      <Hero />
      <div ref={triggerComponent}>
      <Services />
      </div>
      <Steps />
      <Pricing />
      <Portfolio />
      <Contact />
      {/* <ContactPopup /> */}
      <div ref={popupRef} className="hidden">
        <PopupButton />
      </div>
    </section>
  );
}
