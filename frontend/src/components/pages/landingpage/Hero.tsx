import { motion } from 'framer-motion';
import { HeroButtons } from './HeroButtons';
import ImagesGrid from './ImagesGrid';
import Footer from './Footer';

export function Hero() {


	return (
		<div className="relative pt-32 pb-5 px-4 sm:px-6 lg:px-8">
			<div className="text-center max-w-7xl mx-auto space-y-8">
				<motion.h1
					className="max-w-prose text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-8xl"
					style={{ fontFamily: 'TomatoGrotesk, sans-serif' }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Create Stunning <span className="rounded-md bg-[rgb(55,48,163)] px-2">Visuals</span> from Just an Idea

				</motion.h1>
				<motion.p
					className="text-xl text-purple-100"
					style={{ fontFamily: 'PolySans, sans-serif' }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					Elevate Your Product Showcase with Engaging Videos & images!
				</motion.p>
				<HeroButtons />
			</div>
			<motion.div
				className="mt-16 max-w-5xl mx-auto"
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.6 }}
			>
				<img
					src='/images/hero.png'
					alt="AI Generated Art"
					className="w-full"
				/>

			</motion.div>

			<div className='text-center max-w-7xl mx-auto space-y-8 mt-20 mb-20' >
				<motion.h2
					className="max-w-prose text-4xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl"
					style={{ fontFamily: 'TomatoGrotesk, sans-serif' }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					AI-powered tool that creates professional visuals instantly
				</motion.h2>
			</div>


			<ImagesGrid />


			{/* <Footer /> */}

		</div>



	);
}