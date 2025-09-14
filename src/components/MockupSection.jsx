import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/MockupSection.scss";

gsap.registerPlugin(ScrollTrigger);

const MockupSection = () => {
  const sectionRef = useRef(null);
  const mockupRef = useRef(null);
  const screensRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3000", // controls scroll distance
          scrub: true,
          pin: mockupRef.current,
        },
      });

      // Animate through screens
      screensRef.current.forEach((screen, i) => {
        tl.to(
          screen,
          {
            autoAlpha: 1,
            duration: 1,
          },
          i * 2 // offset each by 2 scroll units
        ).to(
          screen,
          {
            autoAlpha: 0,
            duration: 1,
          },
          i * 2 + 1
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="mockup-section" ref={sectionRef}>
      <div className="mockup-container" ref={mockupRef}>
        <div className="mockup-frame">
          {/* Screens inside mockup */}
          {["Fast", "Secure", "Easy"].map((text, i) => (
            <div
              key={i}
              className="mockup-screen"
              ref={(el) => (screensRef.current[i] = el)}
            >
              <h2>{text} browsing</h2>
              <p>
                {text === "Fast" &&
                  "Chrome loads pages quickly and smoothly."}
                {text === "Secure" &&
                  "Built-in protection keeps you safe online."}
                {text === "Easy" &&
                  "Sync across devices and get things done effortlessly."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MockupSection;
