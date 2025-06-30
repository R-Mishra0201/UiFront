'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wrench, Zap, Navigation, Disc } from 'lucide-react';

const categories = {
  'engine': {
    icon: Wrench,
    title: 'Engine & Transmission',
    items: [
      { name: 'Engine Oils', count: 245 },
      { name: 'Transmission Fluids', count: 186 },
      { name: 'Gear Oils', count: 156 }
    ]
  },
  'electrical': {
    icon: Zap,
    title: 'Electrical & Electronics',
    items: [
      { name: 'Engine Oils', count: 342 },
      { name: 'Transmission Fluids', count: 289 },
      { name: 'Gear Oils', count: 167 }
    ]
  },
  'steering': {
    icon: Navigation,
    title: 'Steering',
    items: [
      { name: 'Engine Oils', count: 198 },
      { name: 'Transmission Fluids', count: 145 },
      { name: 'Gear Oils', count: 134 }
    ]
  },
  'brakes': {
    icon: Disc,
    title: 'Brakes & Suspension',
    items: [
      { name: 'Engine Oils', count: 267 },
      { name: 'Transmission Fluids', count: 198 },
      { name: 'Gear Oils', count: 156 }
    ]
  }
};

export default function ProductCategories() {
  const [activeCategory, setActiveCategory] = useState('engine');

  return (
    <section className="py-16 bg-gray-50 scroll-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            PRODUCT CATEGORY
          </h2>
          <div className="flex items-center space-x-4">
            <h3 className="text-xl font-semibold text-gray-700">
              Purchase Automobile Parts and Engine Oil
            </h3>
            <span className="text-gray-500">fro any where</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Product Image */}
          <div className="lg:col-span-1">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-6xl">🔧</span>
              </div>
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Browse All Products
              </Button>
            </motion.div>
          </div>

          {/* Categories */}
          <div className="lg:col-span-3">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-8 bg-white">
                {Object.entries(categories).map(([key, category]) => (
                  <TabsTrigger 
                    key={key}
                    value={key}
                    className="flex flex-col items-center p-4 data-[state=active]:bg-teal-50 data-[state=active]:text-teal-600"
                  >
                    <category.icon className="w-6 h-6 mb-2" />
                    <span className="text-sm font-medium">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(categories).map(([key, category]) => (
                <TabsContent key={key} value={key}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <category.icon className="w-8 h-8 text-teal-600" />
                          <span className="text-sm text-gray-500">
                            {item.count} items
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {item.name}
                        </h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>• Transmission Fluids</div>
                          <div>• Gear Oils</div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="mt-4 text-teal-600 hover:text-teal-700 p-0"
                        >
                          See All
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}