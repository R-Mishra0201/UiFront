'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, User, ShoppingCart, Menu, X, Globe, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-teal-600 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-4 h-4" />
              <Mail className="w-4 h-4" />
              <div className="flex space-x-2">
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-xs">
                  G
                </div>
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-xs">
                  A
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Auto CARE</h1>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Blog & News</a>
            <a href="#" className="text-gray-700 hover:text-teal-600 transition-colors">Become a Seller</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Search Anything" 
                className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-teal-500"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">Dhaka</span>
            </div>
            
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            
            <Button size="sm" className="hidden md:flex bg-teal-600 hover:bg-teal-700">
              Sign Up
            </Button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search Anything" 
                  className="pl-10 pr-4 py-2 w-full"
                />
              </div>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-gray-700 py-2">About</a>
                <a href="#" className="text-gray-700 py-2">Blog & News</a>
                <a href="#" className="text-gray-700 py-2">Become a Seller</a>
              </nav>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="flex-1 bg-teal-600 hover:bg-teal-700">
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}