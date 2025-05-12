import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StatsCounter from './components/StatsCounter';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-circle-pattern">
        <Navbar />
        <Hero />
        <About />
        <StatsCounter />
        <Gallery />
        <Events />
        <Team />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;