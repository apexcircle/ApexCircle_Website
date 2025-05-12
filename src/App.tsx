import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StatsCounter from './components/StatsCounter';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Team from './components/Team';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import JoinNow from './components/JoinNow';
import Contact from './components/Contact';
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
        <Partners />
        <Testimonials />
        <FAQ />
        <JoinNow />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
