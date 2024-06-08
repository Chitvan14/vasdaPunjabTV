"use client";
import React, { useEffect, useRef, useState } from "react";
import { Post } from "../utils/interface";

// const newsItems = [
//   "Breaking News Item 1",
//   "Breaking News Item 2",
//   "Breaking News Item 3",
//   "Breaking News Item 4",
// ];
interface Props {
  post: Post[];
}

const NewsTicker = ({ post }: Props) => {
  const tickerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const clonedNodes = Array.from(ticker.children).map((child) =>
      child.cloneNode(true)
    );
    clonedNodes.forEach((node) => ticker.appendChild(node));

    let start: number | null = null;
    let scrollPos = 0;
    const speed = 40; // Adjust the speed here

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      if (!isHovered) {
        const tickerWidth = ticker.scrollWidth / 2; // Since we cloned the children, divide by 2
        scrollPos = (elapsed / speed) % tickerWidth;
        ticker.style.transform = `translateX(-${scrollPos}px)`;
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isHovered]);

  return (
    <div
      className="relative overflow-hidden whitespace-nowrap w-full bg-red-500 text-white py-2 mb-4 md:rounded-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-y-0 left-0 w-10 md:bg-red-500 backdrop-blur-gradient pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-10 md:bg-red-500 backdrop-blur-gradient-toleft shadow-inner-right pointer-events-none z-10"></div>
      <div
        className="inline-block"
        ref={tickerRef}
        style={{ willChange: "transform" }}
      >
        {post.map((item, index) => (
          <span key={index} className="inline-block px-4">
            {item.title}
          </span>
        ))}
        {post.map((item, index) => (
          <span key={index + post.length} className="inline-block px-4">
            {item.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
