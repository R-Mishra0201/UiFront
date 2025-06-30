'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

export default function PromotionalBanners() {
  return (
    <section className="py-16 scroll-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Engine Oil Banner */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-r from-green-100 to-yellow-50 rounded-2xl p-8 overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="mb-4">
                  <div className="inline-flex items-center bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    SPECIAL OFFER
                  </div>
                  <div className="mt-2 text-2xl font-bold text-green-800">
                    50% off
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  100% Genuine
                </h3>
                <h4 className="text-4xl font-black text-gray-900 mb-4">
                  ENGINE OIL
                </h4>
                <p className="text-gray-700 mb-6">
                  5W-40 Fully synthetic motor oil
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Shop Now
                </Button>
              </div>
              <div className="flex-shrink-0 ml-8">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                >
                  <div className="w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛢️</span>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="absolute top-4 right-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center transform rotate-12">
                <span className="text-xs font-bold text-center leading-tight">
                  BEST<br/>VALUE
                </span>
              </div>
            </div>
          </motion.div>

          {/* Car Service Banner */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Book a Car
                </h3>
                <h4 className="text-3xl font-bold text-blue-600 mb-2">
                  Service
                </h4>
                <h5 className="text-xl text-gray-700 mb-4">
                  Online
                </h5>
                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Find Service in Your Location</span>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Book Service
                </Button>
              </div>
              <div className="flex-shrink-0 ml-8">
                <div className="relative">
                  <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-32 h-20 bg-blue-500 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-white text-2xl">🚗</span>
                  </motion.div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">👨‍🔧</span>
                </div>
                 <span className="text-sm text-gray-600">Expert Technicians</span>
              </div>
            </div>
          </motion.div> {/* ✅ Correctly closes the Car Service Banner */}
        </div>
      </div>
    </section>
  );
}