import React from "react";

const Calender = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 128 128"
        width={256}
        height={256}
      >
        <path
          fill="#ff8686"
          d="M107 55H27v-8a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v8Z"
          className="colorFF8686 svgShape"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M30 52h68"
          className="colorStroke000 svgStroke"
        />
        <path
          stroke="#000"
          strokeWidth={2}
          d="M32 35a9 9 0 0 0-9 9v40a9 9 0 0 0 9 9h64a9 9 0 0 0 9-9V44a9 9 0 0 0-9-9H32Z"
          className="colorStroke000 svgStroke"
        />
        <circle
          cx={88}
          cy={65}
          r={3}
          stroke="#000"
          strokeWidth={2}
          className="colorStroke000 svgStroke"
        />
        <circle
          cx={88}
          cy={79}
          r={3}
          stroke="#000"
          strokeWidth={2}
          className="colorStroke000 svgStroke"
        />
        <circle
          cx={72}
          cy={65}
          r={3}
          stroke="#000"
          strokeWidth={2}
          className="colorStroke000 svgStroke"
        />
        <circle
          cx={72}
          cy={79}
          r={3}
          stroke="#000"
          strokeWidth={2}
          className="colorStroke000 svgStroke"
        />
        <circle
          cx={56}
          cy={65}
          r={3}
          stroke="#000"
          strokeWidth={2}
          className="colorStroke000 svgStroke"
        />
        <circle
          cx={56}
          cy={79}
          r={3}
          stroke="#000"
          strokeWidth={2}
          className="colorStroke000 svgStroke"
        />
        <circle
          cx={40}
          cy={65}
          r={3}
          stroke="#000"
          strokeWidth={2}
          className="colorStroke000 svgStroke"
        />
        <circle
          cx={40}
          cy={79}
          r={3}
          stroke="#000"
          strokeWidth={2}
          className="colorStroke000 svgStroke"
        />
        <rect
          width={4}
          height={10}
          x={84}
          y={30}
          stroke="#000"
          strokeWidth={2}
          rx={2}
          className="colorStroke000 svgStroke"
        />
        <rect
          width={4}
          height={10}
          x={40}
          y={30}
          stroke="#000"
          strokeWidth={2}
          rx={2}
          className="colorStroke000 svgStroke"
        />
      </svg>
    </>
  );
};

export default Calender;
