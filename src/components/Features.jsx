import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Features.scss";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Fast Performance",
    desc: "Chrome loads pages quickly and efficiently so you can browse without delays.",
  },
  {
    title: "Built-in Security",
    desc: "Stay safe with automatic updates and built-in protection from threats.",
  },
  {
    title: "Sync Across Devices",
    desc: "Access your bookmarks, passwords, and settings from any device.",
  },
];

const Features = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    const cards = featuresRef.current.querySelectorAll(".feature-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="features" ref={featuresRef}>
      <h2>Why Choose Chrome?</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
