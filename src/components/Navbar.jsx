import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/Navbar.scss";

const Navbar = () => {
  const navbarRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    // Animate navbar slide-down
    gsap.from(navbarRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Animate links staggered
    gsap.from(linksRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      stagger: 0.15,
      ease: "power2.out"
    });
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar__logo">
        <img src="/logo.png" alt="Logo" />
        <span>Chrome UI</span>
      </div>
      <ul className="navbar__links">
        {["Home", "Features", "Download", "Support"].map((item, i) => (
          <li
            key={i}
            ref={(el) => (linksRef.current[i] = el)}
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
