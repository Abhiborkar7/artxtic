import React from 'react';
import { Download, Share2 } from 'lucide-react';
import { Button } from '../ui/button';

interface OutputPreviewProps {
  type: 'video' | 'image';
  mediaUrl?: string;
  audioUrl?: string;
}

export function OutputPreview({ type, mediaUrl, audioUrl }: OutputPreviewProps) {
  if (!mediaUrl) {
    return (
      <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Generated content will appear here</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {type === 'video' ? (
        <video
          controls
          className="w-full rounded-lg"
          src={mediaUrl}
        >
          {audioUrl && <source src={audioUrl} type="audio/mpeg" />}
        </video>
      ) : (
        <img
          src={mediaUrl}
          alt="Generated content"
          className="w-full rounded-lg"
        />
      )}
      
      <div className="flex gap-2">
        <Button variant="outline" className="flex-1">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
        <Button variant="outline" className="flex-1">
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
}