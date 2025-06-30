import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Star, Sparkles, Package } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'new' | 'second-hand'>('new');

  const filteredProducts = products.filter(product => product.category === activeCategory);

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Hi Nexgen, I'm interested in ${product.name}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/9779812345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our premium collection of new and certified second-hand tech products
          </p>
        </motion.div>

        {/* Category Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-full p-1 border border-blue-500/20">
            {(['new', 'second-hand'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {category === 'new' ? (
                    <Sparkles className="w-4 h-4" />
                  ) : (
                    <Package className="w-4 h-4" />
                  )}
                  <span className="capitalize">
                    {category === 'second-hand' ? 'Second-Hand' : 'New'}
                  </span>
                </div>
                {activeCategory === category && (
                  <motion.div
                    layoutId="category-bg"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                      product.category === 'new'
                        ? 'bg-blue-600/80 text-blue-100'
                        : 'bg-green-600/80 text-green-100'
                    }`}>
                      {product.category === 'new' ? 'New' : 'Second-Hand'}
                    </div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/0 via-blue-600/0 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-xs text-blue-400 font-medium">{product.type}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-white">
                        Rs {product.price.toLocaleString()}
                      </span>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>

                    {/* Order Button */}
                    <motion.button
                      onClick={() => handleWhatsAppOrder(product)}
                      className="w-full flex items-center justify-center space-x-2 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Order on WhatsApp</span>
                    </motion.button>
                  </div>

                  {/* Hover Glow Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-blue-500/0 group-hover:border-blue-500/30 transition-colors duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Can't find what you're looking for? Contact us directly!
          </p>
          <motion.button
            onClick={() => window.open('https://wa.me/9779812345678?text=Hi%20Nexgen,%20I%20have%20a%20custom%20requirement', '_blank')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Custom Order via WhatsApp
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;