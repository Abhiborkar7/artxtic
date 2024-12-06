import { motion } from 'framer-motion';
import PromptsSlider from "./PromptsSlider";
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/contexts/authContext';


export function ImageCreation() {
  
  const [prompt, setPrompt ] = useState<string | null>();
  const { currentUser } = useAuth();
  
  const placeholders = [
    "Eye-catching product banner design",
    "Creative ad layout ideas",
    "Vibrant product advertisement concept",
    "Modern promotional banner style",
    "Bold and attractive ad visuals",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPrompt(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted", prompt);

    backendRequestforImage();
  };

  const getImage = async (requestId: string) => {
    try {
      if (currentUser) {
        const token = await currentUser.getIdToken();

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const data = {
          request_id: requestId
        };

        const response = await axios.post(`/api/image/get/`, data, config);
        console.log('Response: ', response);
      } else {
        console.error('User not authenticated');
      }
    } catch (error) {
      console.error('Error getting image:', error);
    }
  };

  const backendRequestforImage = async () => {
    try {
      if (currentUser) {
        const token = await currentUser.getIdToken();

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        };

        const data = {
          prompt: prompt
        };

        const response = await axios.post('/api/image/generate', data, config);
        console.log('Response: ', response);


        getImage(response.data.request_id);

      } else {
        console.error('User not authenticated');
      }
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };





  return (
    <div className='mt-50'>

      <div className='text-center max-w-7xl mx-auto space-y-8 mt-28 mb-28' >
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

      <div className="dark h-[20rem] flex flex-col justify-center  items-center px-4">

        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
}