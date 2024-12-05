import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

export function HeroButtons() {

  const navigate = useNavigate();

  const handleLaunchAppClick = () => {
    navigate('/home');
  };
  
  
  return (
    <motion.div
      className="flex justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50" onClick={handleLaunchAppClick}>
        Get Started
      </Button>
    </motion.div>
  );
}