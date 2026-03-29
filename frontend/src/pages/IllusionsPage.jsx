import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Projects', 'Events', 'Fun'];

const galleryItems = [
  {
    id: 1,
    title: 'AI Dashboard',
    category: 'Projects',
    image: 'https://images.unsplash.com/photo-1762279388952-85187155e48d?crop=entropy&cs=srgb&fm=jpg&q=85',
    description: 'Real-time analytics dashboard with AI-powered insights',
  },
  {
    id: 2,
    title: 'Tech Conference 2025',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1677078610152-8a627d8ced8d?crop=entropy&cs=srgb&fm=jpg&q=85',
    description: 'Annual technology summit bringing together industry leaders',
  },
  {
    id: 3,
    title: 'Neon City',
    category: 'Fun',
    image: 'https://images.unsplash.com/photo-1757705759617-ff88e68fe5af?crop=entropy&cs=srgb&fm=jpg&q=85',
    description: 'Cyberpunk-inspired digital art exploration',
  },
  {
    id: 4,
    title: 'E-Commerce Platform',
    category: 'Projects',
    image: 'https://images.unsplash.com/photo-1764258560191-d8f338c823a7?crop=entropy&cs=srgb&fm=jpg&q=85',
    description: 'Modern shopping experience with seamless checkout',
  },
  {
    id: 5,
    title: 'Team Building Workshop',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1677078610152-8a627d8ced8d?crop=entropy&cs=srgb&fm=jpg&q=85',
    description: 'Creative collaboration and innovation workshop',
  },
  {
    id: 6,
    title: '3D Abstract Art',
    category: 'Fun',
    image: 'https://images.unsplash.com/photo-1676099748858-6d4c18fa7c88?crop=entropy&cs=srgb&fm=jpg&q=85',
    description: 'Minimalist geometric shapes in motion',
  },
];

export const IllusionsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Illusions - Supabass Tech</title>
        <meta name="description" content="Explore our gallery of projects, events, and creative work" />
      </Helmet>

      {/* Parallax Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <main className="relative z-10 min-h-screen pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-slate-100 mb-6">
              Illusions Gallery
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              A showcase of our work, events, and creative experiments
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3" data-testid="filter-buttons">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  data-testid={`filter-${category.toLowerCase()}`}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                      : 'bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-cyan-500/10'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-testid="gallery-grid"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
                data-testid={`gallery-item-${item.id}`}
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                </div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/80 text-xs font-semibold mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-200">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>
    </>
  );
};