'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Find Your Automotive Parts and Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-teal-100 max-w-2xl mx-auto"
          >
            Explore a vast selection of automotive parts and services tailored to your needs. Whether you're seeking specific components or specialized maintenance
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-sm">
              <TabsTrigger 
                value="products" 
                className="data-[state=active]:bg-white data-[state=active]:text-teal-700 text-white"
              >
                <Search className="w-4 h-4 mr-2" />
                Search for Products...
              </TabsTrigger>
              <TabsTrigger 
                value="services"
                className="data-[state=active]:bg-white data-[state=active]:text-teal-700 text-white"
              >
                <Settings className="w-4 h-4 mr-2" />
                Search for Services...
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="products" className="mt-6">
              <div className="bg-white rounded-lg p-6 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-3">
                    <Input
                      placeholder="What product are you looking for?"
                      className="h-12 text-lg border-gray-300 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <select className="w-full h-12 px-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none">
                      <option>All Categories</option>
                      <option>Engine Parts</option>
                      <option>Brake System</option>
                      <option>Suspension</option>
                      <option>Electrical</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button 
                    size="lg" 
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="services" className="mt-6">
              <div className="bg-white rounded-lg p-6 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-3">
                    <Input
                      placeholder="What service do you need?"
                      className="h-12 text-lg border-gray-300 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <select className="w-full h-12 px-3 border border-gray-300 rounded-md focus:border-teal-500 focus:outline-none">
                      <option>All Services</option>
                      <option>Oil Change</option>
                      <option>Brake Service</option>
                      <option>Tire Service</option>
                      <option>Engine Service</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button 
                    size="lg" 
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
                  >
                    Search
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Floating Question Mark */}
        <motion.div 
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 hidden lg:block"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <span className="text-3xl text-white">?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}