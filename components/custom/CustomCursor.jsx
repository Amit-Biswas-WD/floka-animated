"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const followerRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className="fixed top-0 left-0 w-8 h-8 border border-black rounded-full pointer-events-none z-50 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        borderWidth: "1px",
      }}
    >
      <div className="w-1.5 h-1.5 bg-black rounded-full" />
    </div>
  );
}
