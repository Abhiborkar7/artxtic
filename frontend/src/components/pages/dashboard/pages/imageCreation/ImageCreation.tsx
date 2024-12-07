import { motion } from 'framer-motion';
import PromptsSlider from "./PromptsSlider";
import { PlaceholdersAndVanishInput } from '@/components/ui/placeholders-and-vanish-input';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@/contexts/authContext';
import { ArrowDownToLine, ArrowUpRight, X } from 'lucide-react';

export function ImageCreation() {

  const [prompt, setPrompt] = useState<string>("");
  const [divide, setDivide] = useState<boolean>(false);
  const { currentUser } = useAuth();
  const [imagePresent, setImagePresent] = useState<string | null>(null);

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
    setDivide(true);
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
        setImagePresent(response.data.imageUrl);
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

        setTimeout(() => {
          getImage(response.data.response);
        }
          , 5000);

      } else {
        console.error('User not authenticated');
      }
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };





  return (
    <div className='realative flex justify-center gap-40' >

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

        <PromptsSlider setPrompt={setPrompt} />

        <div className="dark h-[20rem] flex flex-col justify-center  items-center px-4">

          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
            promptValue={prompt}
          />
        </div>
      </div>

      {divide && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: "spring", stiffness: 30 }}


          className="flex relative justify-center items-center h-screen bg-black/10 backdrop-blur-md border-white/10 z-50 w-[50vw]"
        >
          {
            imagePresent ? (
              <div className="flex flex-col items-center justify-center ">
                <img src={imagePresent} alt="Generated Image" className="w-[50vw] h-[50vh] object-contain" />
                <div className="absolute top-0 right-0 mr-5 flex justify-center items-center gap-4 mt-4">
                  <div
                    className="flex items-center gap-2 px-4 py-2  text-white rounded-md"
                  >
                    <ArrowDownToLine size={22} />
                  </div>
                  <a href={imagePresent} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2  text-white ">
                    <ArrowUpRight size={22} />
                  </a>
                  <button onClick={() => { setImagePresent(null); setDivide(false) }} className="flex items-center gap-2 px-4 py-2  text-white  ">
                    <X size={22} />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <div className="text-2xl font-semibold text-white">Generating Image...</div>
              </div>
            )
          }
        </motion.div>
      )}
    </div>
  );
}

