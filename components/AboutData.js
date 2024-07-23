import React, { useState, useRef, useEffect } from "react";

const AboutData = ({ children, maxCharCount = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setShowButton(contentRef.current.textContent.length > maxCharCount);
    }
  }, [children, maxCharCount]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="read-more-container">
      <div
        ref={contentRef}
        className={`read-more-content ${isExpanded ? "expanded" : ""}`}
        style={{
          maxHeight: isExpanded
            ? `${contentRef.current.scrollHeight}px`
            : `${maxCharCount}px`,
        }}
      >
        {children}
      </div>
      {showButton && (
        <div
          className=" mt-3 mb-2  col-md-2 col-11"
          data-aos="flip"
          data-aos-duration={500}
          data-aos-once="true"
          data-aos-easing="ease-in"
          onClick={toggleReadMore}
        >
          <button className="button button--aylen button--round-l button--text-thick text-uppercase gradient  col-12 mt-3">
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AboutData;
