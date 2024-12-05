import { motion } from "framer-motion";

export function BackgroundBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 [mask-image:url(/grid.svg)] [mask-size:40px]"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}