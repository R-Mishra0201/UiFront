'use client';

import { motion } from 'framer-motion';
import { Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MobileApp() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white scroll-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold mb-6"
            >
              Get the Auto CARE Mobile App
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Access thousands of automotive parts and services right from your phone. 
              Shop, compare, and get expert advice on the go.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-lg">4.8 (2.3k Reviews)</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-900 text-white flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
              <Button 
                size="lg" 
                className="bg-black hover:bg-gray-900 text-white flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-teal-500 to-blue-600 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-6 text-black">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-4 h-2 bg-black rounded-sm"></div>
                    <div className="w-4 h-2 bg-black rounded-sm"></div>
                    <div className="w-4 h-2 bg-black rounded-sm"></div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2">Jazz Full Face Helmet</h3>
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-600">(50 Reviews)</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-bold text-teal-600">$112.99</span>
                    <span className="text-sm text-gray-500 line-through">$119.99</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}