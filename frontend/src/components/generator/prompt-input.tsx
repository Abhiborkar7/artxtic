import React from 'react';
import { Wand2 } from 'lucide-react';
import { Button } from '../ui/button';

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
}

export function PromptInput({ onSubmit }: PromptInputProps) {
  const [prompt, setPrompt] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you want to create..."
          className="w-full min-h-[100px] p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
      <Button type="submit" className="w-full">
        <Wand2 className="w-5 h-5 mr-2" />
        Generate Content
      </Button>
    </form>
  );
}