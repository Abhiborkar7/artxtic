import { motion } from 'framer-motion';

const categories = ['All', 'Fashion', 'Perfume', 'Cosmatic', 'Architecture', 'Furniture', 'Style', 'Sneakers'];

const creations = [
  {
    title: 'Neon Cat',
    image: 'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'Butterfly Effect',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
  },
  {
    title: 'Urban Dreams',
    image: 'https://images.unsplash.com/photo-1615396899839-c99c121888b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
  }
];

export function CommunitySection() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">
          <span className="text-purple-500">Community</span> Creations
        </h2>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            className="px-4 py-1 text-sm rounded-full bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {creations.map((creation, index) => (
          <motion.div
            key={creation.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-xl overflow-hidden cursor-pointer"
          >
            <div className="aspect-square relative">
              <img
                src={creation.image}
                alt={creation.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}