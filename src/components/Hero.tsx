import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Users, Calendar, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Circles */}
      <motion.div 
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-primary-500 opacity-5"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-accent-500 opacity-5"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -15, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-primary-100 text-primary-600 font-medium text-sm mb-4">Welcome to our community</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Join the <span className="text-primary-500">Apex Circle</span> Community
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                A vibrant community of like-minded individuals coming together to learn, grow, and create meaningful connections in a supportive circle.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a href="#join" className="btn-primary flex items-center gap-2">
                  <Users size={20} />
                  Join Our Circle
                </a>
                <a href="#events" className="btn-secondary flex items-center gap-2">
                  <Calendar size={20} />
                  Upcoming Events
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div className="flex items-center">
                  <Globe className="w-6 h-6 text-primary-500 mr-2" />
                  <span className="text-gray-700">Global Community</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-primary-500 mr-2" />
                  <span className="text-gray-700">Monthly Meetups</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-primary-500 mr-2" />
                  <span className="text-gray-700">5000+ Members</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-accent-500 opacity-10 animate-pulse-soft"></div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                alt="Apex Circle Community Meeting" 
                className="relative z-10 rounded-2xl shadow-xl object-cover w-full h-[400px]"
              />
              
              {/* Decorative Circles */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary-500 rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gold-500 rounded-full opacity-80"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-primary-50 hover:text-primary-500 hover:border-primary-500 transition-all"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown />
      </motion.a>
    </section>
  );
};

export default Hero;