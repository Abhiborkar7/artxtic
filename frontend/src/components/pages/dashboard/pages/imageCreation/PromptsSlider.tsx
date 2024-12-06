import { motion } from 'framer-motion';
import './infiniteSlide.css';

interface PromptsSliderProps {
    setPrompt: (prompt: string) => void;
}

const PromptsSlider: React.FC<PromptsSliderProps> = ({ setPrompt }) => {
    const prompts = [
        '🌟 Limited Edition',
        '🔥 Hot Deal',
        '💎 Premium Quality',
        '🏷️ Special Offer',
        '🚚 Free Shipping',
        '📦 In Stock Now',
        '🛒 Add to Cart',
        '📣 New Arrival',
        '🤩 Customer Favorite',
        '🔖 Best Seller',
        '💡 Innovative Design',
        '⚡ Flash Sale',
        '🎁 Exclusive Bundle',
        '📈 Trending Now',
        '🛍️ Shop Now',
        '🔒 Secure Checkout',
        '🌐 Worldwide Shipping',
        '🆕 Latest Model',
        '🌿 Eco-Friendly',
        '🛠️ Easy Installation',
        '💰 Money Back Guarantee',
        '🔬 Advanced Technology',
        '👗 Fashion Forward',
        '🏋️‍♀️ High Performance',
    ];

    const handleClick = (prompt: string) => {
        setPrompt(prompt);
    }

    return (
        <motion.div
            style={{ fontFamily: 'TomatoGrotesk, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                <div className="wrapper line1">
                    {prompts.slice(0, 8).map((prompt, index) => (
                        <div onClick={() => handleClick(prompt)} key={index} className={`item item${index + 1}`}>
                            {prompt}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="wrapper line2">
                    {prompts.slice(8, 16).map((prompt, index) => (
                        <div onClick={() => handleClick(prompt)} key={index} className={`item item${index + 1}`}>
                            {prompt}
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="wrapper line3">
                    {prompts.slice(16, 24).map((prompt, index) => (
                        <div onClick={() => handleClick(prompt)} key={index} className={`item item${index + 1}`}>
                            {prompt}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default PromptsSlider