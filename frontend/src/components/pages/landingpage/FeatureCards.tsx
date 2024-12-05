import { Wand2, Image, Video } from 'lucide-react';
import { FeatureCard } from '../FeatureCard';

const features = [
  {
    icon: <Wand2 className="w-6 h-6" />,
    title: "AI-Powered Generation",
    description: "Create stunning visuals with just a text prompt using our advanced AI models."
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "Image Enhancement",
    description: "Transform and enhance your product images with professional-grade tools."
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Video Creation",
    description: "Generate engaging product videos and animations automatically."
  }
];

export function FeatureCards() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex w-full overflow-x-auto justify-between pb-4 scrollbar-hide">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}