"use client";
import { useRef, useLayoutEffect, useState } from "react";
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
  const triggerComponent2 = useRef(null);
  const triggerComponent3 = useRef(null);

  const handlePopup = () => {
    setShowPopup((prev) => !prev);
  };

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.to(popupRef.current, {
      duration: 2,
      display: "block",
      ease: "power2",
      scrollTrigger: {
        trigger: triggerComponent.current,
        start: "top 70%",
        end: "bottom 30%",
        scrub: true,
      },
    });
    tl.to(popupRef.current, {
      duration: 2,
      display: "none",
      ease: "power2",
      scrollTrigger: {
        trigger: triggerComponent2.current,
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
        <Steps />
        <Pricing />
        <Portfolio />
      </div>
      <div ref={triggerComponent2}>
        <Contact />
      </div>
      {showPopup && <ContactPopup func={handlePopup} />}
      <div ref={popupRef} className="hidden">
        <PopupButton func={handlePopup} isPopupOpen={showPopup} />
      </div>
    </section>
  );
}
