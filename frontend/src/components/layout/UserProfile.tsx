import { ChevronDown } from 'lucide-react';

export function UserProfile() {
  return (
    <div className="p-4 border-b border-white/10">
      <button className="flex items-center w-full px-2 py-2 text-sm rounded-lg hover:bg-white/5">
        <div className="flex items-center flex-1">
          <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
            A
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Artxtic Studio</p>
            <p className="text-xs text-gray-400">Free Plan</p>
          </div>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>
    </div>
  );
}