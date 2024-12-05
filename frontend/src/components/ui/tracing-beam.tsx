import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TracingBeamProps {
  children: React.ReactNode;
}

export const TracingBeam = ({ children }: TracingBeamProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const mouseY = useMotionValue(0);
  const springY = useSpring(mouseY, {
    damping: 25,
    stiffness: 700,
  });

  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const y = e.clientY - rect.top;
        mouseY.set(y);
      }
    };

    ref.current.addEventListener("mousemove", handleMouseMove);
    return () => {
      ref.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseY]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <div className="relative z-10">{children}</div>
      <motion.div
        className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-purple-500 to-transparent"
        style={{
          opacity: isHovered ? 1 : 0,
          top: springY,
        }}
      />
    </div>
  );
};