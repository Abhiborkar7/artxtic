// FILE: frontend/src/components/pages/dashboard/ImageCreation.tsx

import React, { useState } from 'react';
import { MediaUpload } from '@/components/generator/media-upload';
import { Button } from '@/components/ui/button';

const photos = [  
  'https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1681500563090-c56e78a7ea1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1556228578-dd539282b964?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1532667449560-72a95c8d381b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1516962126636-27ad087061cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1542598953-41310c43f54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
];

export function ImageCreation() {
  const [image, setImage] = useState<File | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleUpload = (file: File) => {
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setImages((prevImages) => [...prevImages, reader.result as string]);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRender = () => {
    if (image) {
      // Implement rendering logic here
      console.log('Rendering image:', image);
    } else {
      alert('Please select an image to render.');
    }
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="pt-16 px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Image Creation</h1>
            <p className="mt-2 text-gray-400">Upload an image to get started.</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <MediaUpload type="image" onUpload={handleUpload} />
              <Button onClick={handleRender} className="mt-4 w-full">
                Render
              </Button>
            </div>
          </div>
          </div>
          <div className="mt-24 px-10">
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-1">
              {photos.map((src, index) => (
                <div key={index} className="mb-1 break-inside-avoid">
                  <img
                    src={src}
                    alt={`Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        
      </div>
    </div>
  );
}