"use client";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

// Make sure to register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollComponent = ({ children }) => {
  const viewportRef = useRef(null);

  useEffect(() => {
    // Enable ScrollTrigger for the viewport element
    ScrollTrigger.create({
      trigger: viewportRef.current,
      start: "top top", // Trigger the animation when the top of the viewport hits the top of the element
      end: "bottom bottom", // Trigger the animation when the bottom of the viewport hits the bottom of the element
      scrub: 1, // Adjust this value for the desired smoothness
    });

    // Clean up on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTriggers
    };
  }, []);

  return (
    <div ref={viewportRef} className="viewport">
      {children}
    </div>
  );
};

export default ScrollComponent;
