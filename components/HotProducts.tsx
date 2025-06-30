'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const products = [
  {
    id: 1,
    name: 'For Harley Sportster 883 XL1200 X48 Dyna',
    price: 24.00,
    originalPrice: 48.00,
    rating: 4.2,
    reviews: 18,
    discount: '50% OFF',
    image: '🏍️',
    category: 'Motorcycle Parts'
  },
  {
    id: 2,
    name: 'For Harley Sportster 883 XL1200 X48 Dyna',
    price: 35.00,
    originalPrice: 70.00,
    rating: 4.7,
    reviews: 23,
    discount: '50% OFF',
    image: '🔧',
    category: 'Engine Parts'
  },
  {
    id: 3,
    name: 'For Harley Sportster 883 XL1200 X48 Dyna',
    price: 18.00,
    originalPrice: 36.00,
    rating: 4.5,
    reviews: 16,
    discount: '50% OFF',
    image: '⚙️',
    category: 'Transmission'
  },
  {
    id: 4,
    name: 'For Harley Sportster 883 XL1200 X48 Dyna',
    price: 42.00,
    originalPrice: 84.00,
    rating: 4.3,
    reviews: 31,
    discount: '50% OFF',
    image: '🛠️',
    category: 'Tools'
  },
  {
    id: 5,
    name: 'For Harley Sportster 883 XL1200 X48 Dyna',
    price: 28.00,
    originalPrice: 56.00,
    rating: 4.6,
    reviews: 19,
    discount: '50% OFF',
    image: '🔩',
    category: 'Hardware'
  },
  {
    id: 6,
    name: 'For Harley Sportster 883 XL1200 X48 Dyna',
    price: 33.00,
    originalPrice: 66.00,
    rating: 4.1,
    reviews: 27,
    discount: '50% OFF',
    image: '⚡',
    category: 'Electrical'
  }
];

export default function HotProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(products.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(products.length / 3)) % Math.ceil(products.length / 3));
  };

  return (
    <section className="py-16 bg-white scroll-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Hot Product</h2>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevSlide}
              className="w-10 h-10 p-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextSlide}
              className="w-10 h-10 p-0"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(currentSlide * 3, (currentSlide + 1) * 3).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative">
                <div className="aspect-square bg-gray-100 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
                  {product.discount}
                </Badge>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleFavorite(product.id)}
                  className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    favorites.includes(product.id) 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart className="w-4 h-4" fill={favorites.includes(product.id) ? 'currentColor' : 'none'} />
                </motion.button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{product.category}</span>
                </div>
                
                <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-8 h-8 bg-teal-600 hover:bg-teal-700 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-teal-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}