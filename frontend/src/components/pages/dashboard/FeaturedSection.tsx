import { motion } from 'framer-motion';

const guides = [
  {
    title: 'Style Reference',
    image: 'https://images.unsplash.com/photo-1524638067-feba7e8ed70f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    tag: 'How to Use'
  },
  {
    title: 'Consistent Characters',
    image: 'https://images.unsplash.com/photo-1549049950-48d5887197a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    tag: 'Creating'
  },
  {
    title: 'Content Reference',
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
    tag: 'Using'
  }
];

export function FeaturedSection() {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">
          <span className="text-purple-500">Featured</span> Guides
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {guides.map((guide, index) => (
          <motion.div
            key={guide.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative rounded-xl overflow-hidden"
          >
            <div className="aspect-[4/3] relative">
              <img
                src={guide.image}
                alt={guide.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="inline-block px-2 py-1 text-xs rounded-full bg-purple-500 text-white mb-2">
                {guide.tag}
              </span>
              <h3 className="text-lg font-semibold text-white">{guide.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}