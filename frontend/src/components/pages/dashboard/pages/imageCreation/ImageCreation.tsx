import { motion } from 'framer-motion';
import PromptsSlider from "./PromptsSlider";

export function ImageCreation() {


  return (
    <div className='mt-50'>

      <div className='text-center max-w-7xl mx-auto space-y-8 mt-20 mb-20' >
        <motion.h2
          className="max-w-prose text-4xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: 'TomatoGrotesk, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AI-driven platform that creates professional designs in no time.
        </motion.h2>
      </div>

      <PromptsSlider />
    </div>
  );
}