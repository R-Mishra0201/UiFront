'use client';

import { motion } from 'framer-motion';
import { Shield, Truck, CheckCircle, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Original Brand Product',
    description: 'Genuine parts from trusted manufacturers',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Fast shipping across the country',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: CheckCircle,
    title: 'Verified Service Center',
    description: 'Certified and trusted service providers',
    color: 'bg-teal-100 text-teal-600'
  },
  {
    icon: DollarSign,
    title: 'Best Price Guarantee',
    description: 'Competitive pricing with quality assurance',
    color: 'bg-purple-100 text-purple-600'
  }
];

export default function ServiceHighlights() {
  return (
    <section className="py-16 bg-white scroll-reveal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}