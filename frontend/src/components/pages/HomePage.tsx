import { motion } from 'framer-motion';
import { IconBrush, IconVideo, IconMicrophone, IconBrandOpenai } from '@tabler/icons-react';
import { BackgroundBeams } from '../ui/background-beams';
import { SparklesCore } from '../ui/sparkles';
import { TracingBeam } from '../ui/tracing-beam';
import { TextGenerateEffect } from '../ui/text-generate-effect';

const features = [
  {
    title: "AI Image Generation",
    description: "Transform your ideas into stunning visuals with our advanced AI image generation technology.",
    icon: IconBrush,
    color: "from-purple-500 to-cyan-500"
  },
  {
    title: "Video Creation",
    description: "Create professional product videos and animations with just a few clicks.",
    icon: IconVideo,
    color: "from-pink-500 to-orange-500"
  },
  {
    title: "Voice Generation",
    description: "Add natural-sounding voiceovers to your content in multiple languages.",
    icon: IconMicrophone,
    color: "from-green-500 to-blue-500"
  },
  {
    title: "AI-Powered Editing",
    description: "Fine-tune your content with intelligent editing tools powered by AI.",
    icon: IconBrandOpenai,
    color: "from-yellow-500 to-red-500"
  }
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <TracingBeam>
        <div className="relative">
          <div className="h-[40rem] w-full rounded-md flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full absolute inset-0 h-screen">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />
            </div>
            
            <div className="relative z-10 text-center">
              <TextGenerateEffect
                words="Welcome to Artxtic Studio"
                className="text-6xl font-bold text-white mb-4"
              />
              <p className="text-xl text-purple-200 max-w-2xl mx-auto px-4">
                Your creative AI companion for generating stunning visuals, videos, and more.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur-xl -z-10"
                    style={{ background: `linear-gradient(to right, ${feature.color})` }}
                  />
                  <div className="relative p-8 rounded-xl bg-black border border-white/10 hover:border-white/20 transition-colors">
                    <feature.icon className="w-12 h-12 mb-4 text-white" />
                    <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-purple-200">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </TracingBeam>
      <BackgroundBeams />
    </div>
  );
}