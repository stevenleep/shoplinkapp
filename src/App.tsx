import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Solutions from './components/Solutions';
// import Features from './components/Features';
import Stats from './components/Stats';
// import Story from './components/Story';
import BookingForm from './components/BookingForm';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Vision />
      <Solutions />
      {/* <Features /> */}
      <Stats />
      {/* <Story /> */}
      <BookingForm />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
