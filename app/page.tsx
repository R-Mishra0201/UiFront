'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PromotionalBanners from '@/components/PromotionalBanners';
import ServiceHighlights from '@/components/ServiceHighlights';
import ProductCategories from '@/components/ProductCategories';
import HotProducts from '@/components/HotProducts';
import MobileApp from '@/components/MobileApp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // GSAP animations for page load
    gsap.fromTo('.fade-in', 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      }
    );

    // Scroll-triggered animations
    gsap.utils.toArray('.scroll-reveal').forEach((element: any) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <PromotionalBanners />
        <ServiceHighlights />
        <ProductCategories />
        <HotProducts />
        <MobileApp />
      </main>
    </div>
  );
}