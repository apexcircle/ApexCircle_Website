import React from 'react';
import { motion } from 'framer-motion';
import { Circle, Mail, Phone, MapPin, Instagram, Bot, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "Home", href: "#home" },
        { name: "About Us", href: "#about" },
        { name: "Events", href: "#events" },
        { name: "Gallery", href: "#gallery" },
        { name: "Team", href: "#team" }
      ]
    },
    {
      title: "Community",
      links: [
        { name: "Join Us", href: "https://linktr.ee/Apex_Circle" },
        { name: "Member Benefits", href: "#benefits" },
        { name: "Success Stories", href: "#testimonials" },
        { name: "Resources", href: "#resources" },
        { name: "FAQ", href: "#faq" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#terms" },
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Community Guidelines", href: "#guidelines" }
      ]
    }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white relative pt-20 pb-12 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-900 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-900 rounded-full translate-x-1/2 translate-y-1/2 opacity-10"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 font-bold text-2xl text-white mb-6">
              <Circle className="h-7 w-7 fill-primary-500 stroke-gray-900" />
              <span>Apex Circle</span>
            </div>
            
            <p className="text-gray-400 mb-6">
            Apex Circle is a platform for innovators, tech enthusiasts to turn bold ideas into reality.Collaborate, create impactful solutions, and push the boundaries of technology. Let’s drive change and shape the future of innovation together.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/apex_circle_official/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://discord.gg/6JmtCcDG" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Bot className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/apex-circle-official/" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-6">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-primary-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                  <span className="text-gray-400">apexcircleofficial2025@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                  <span className="text-gray-400">+91 9330304037</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                  <span className="text-gray-400">
                    Kolkata<br />
                    West Bengal, India
                  </span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="text-lg font-bold mb-6">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest events, resources, and community news.</p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-white"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Apex Circle. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
