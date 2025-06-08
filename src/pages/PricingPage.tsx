import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PricingSection } from '../components/PricingSection';
import { Sparkles, Star, Target, Zap } from 'lucide-react';

export const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PricingSection />
      <Footer />
    </div>
  );
};