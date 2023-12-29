import React, { useRef, useEffect, useState } from "react";

const SmoothScroll = ({ children }) => {
  const pageRef = useRef(null);
  const wrapperRef = useRef(null);

  const [scroll, setScroll] = useState({
    current: 0,
    target: 0,
    limit: 0,
  });

  const ease = 0.10000;

  const updateTarget = (e) => {
    setScroll((prevScroll) => ({
      ...prevScroll,
      target: prevScroll.target + e.deltaY,
    }));
  };

  const lerp = (current, target) => {
    const distanceBetween = target - current;
    const distanceToTravel = distanceBetween * ease;
    return current + distanceToTravel;
  };

  const clamp = (min, max, value) => {
    return Math.min(Math.max(value, min), max);
  };

  const smoothScroll = () => {
    const maxScroll = wrapperRef.current.clientHeight - window.innerHeight;

    setScroll((prevScroll) => ({
      ...prevScroll,
      target: clamp(0, maxScroll, prevScroll.target),
    }));

    setScroll((prevScroll) => {
      const transition = lerp(prevScroll.current, prevScroll.target);
      return {
        ...prevScroll,
        current: transition,
      };
    });

    wrapperRef.current.style.transform = `translateY(-${scroll.current}px)`;

    window.requestAnimationFrame(smoothScroll);
  };

  useEffect(() => {
    document.addEventListener("wheel", updateTarget);
    smoothScroll();

    return () => {
      document.removeEventListener("wheel", updateTarget);
    };
  }, []);

  return (
    <>
      <div className="scroll-container" ref={pageRef}>
        <div className="page__wrapper" ref={wrapperRef}>
          {children}
        </div>
      </div>
    </>
  );
};

export default SmoothScroll;
