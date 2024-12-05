import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

interface MediaUploadProps {
  type: 'image' | 'audio';
  onUpload: (file: File) => void;
}

export function MediaUpload({ type, onUpload }: MediaUploadProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'image/*': type === 'image' ? ['.png', '.jpg', '.jpeg'] : [],
      'audio/*': type === 'audio' ? ['.mp3', '.wav'] : [],
    },
    maxFiles: 1,
    onDrop: (files) => files[0] && onUpload(files[0]),
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-500'}`}
    >
      <input {...getInputProps()} />
      <Upload className="mx-auto h-12 w-12 text-gray-400" />
      <p className="mt-2 text-sm text-gray-600">
        Drag & drop your {type} here, or click to select
      </p>
    </div>
  );
}