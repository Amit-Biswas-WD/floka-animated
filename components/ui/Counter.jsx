"use client";
import { useEffect, useState, useRef } from "react";

function NumberTicker({ end, duration = 3000 }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Percentage calculate kora hocche (0 theke 1 er moddhe)
      const percentage = Math.min(progress / duration, 1);

      // Current number set kora
      const currentCount = Math.floor(percentage * end);

      setCount(currentCount);

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

import React from "react";

const Counter = ({ className, value, duration }) => {
  return (
    <p
      className={`text-[110px] font-medium leading-none tracking-tighter flex items-center gap-0.5 ${className}`}
    >
      <NumberTicker end={value} duration={duration ? duration : 3000} />
      <span className="text-gray-200 ml-[-2px]">+</span>
    </p>
  );
};

export default Counter;
