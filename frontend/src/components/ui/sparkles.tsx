import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SparklesProps {
  id: string;
  background: string;
  minSize: number;
  maxSize: number;
  particleDensity: number;
  className: string;
  particleColor: string;
}

export function SparklesCore({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: SparklesProps) {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const particleCount = Math.floor((window.innerWidth * window.innerHeight) / (10000 / particleDensity));
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
    }));
    setParticles(newParticles);
  }, [particleDensity, minSize, maxSize]);

  return (
    <div id={id} className={className} style={{ background }}>
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            borderRadius: "50%",
            backgroundColor: particleColor,
          }}
        />
      ))}
    </div>
  );
}