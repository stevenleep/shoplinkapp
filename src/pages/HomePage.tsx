import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { BusinessValueSection } from '../components/BusinessValueSection';
import { PlatformIntegrationSection } from '../components/PlatformIntegrationSection';
import { ValuesSection } from '../components/ValuesSection';
import { CTASection } from '../components/CTASection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BusinessValueSection />
        <PlatformIntegrationSection />
        <ValuesSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};