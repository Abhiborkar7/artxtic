import { Image, Video, Wand2, Pencil, Upload, MoreHorizontal } from 'lucide-react';

const tools = [
  { icon: Image, label: 'Image Creation' },
  { icon: Video, label: 'Video Creation' },
  { icon: Wand2, label: 'AI Generation' },
  { icon: Pencil, label: 'Canvas Editor' },
  { icon: Upload, label: 'Upscaler' },
  { icon: MoreHorizontal, label: 'More' },
];

export function ToolGrid() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <button
            key={tool.label}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <Icon className="w-6 h-6 text-white mb-2" />
            <span className="text-sm text-gray-300">{tool.label}</span>
          </button>
        );
      })}
    </div>
  );
}