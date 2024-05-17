
"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const BubbleAnimation = () => {
  const bubbleRefs = useRef([]);

  useEffect(() => {
    const defaultPage1Height = "150";

    const animateBubbles = () => {
      const timeline = gsap.timeline();

      // Animate DefaultBubble1
      timeline.to(bubbleRefs, {
        y: defaultPage1Height * 0.8,
        duration: 1,
        ease: "none",
      });
    };

    animateBubbles();

    // Clean up function
    return () => {
      // Kill the GSAP timeline if needed
    };
  }, []);

  // Render bubbles with unique keys

  return (
    <canvas
      class="bubble DefaultBubble6 AnimateMe"
      id="bubble-5"
      ref={bubbleRefs}
      height="300"
    ></canvas>
  );
};

export default BubbleAnimation;
