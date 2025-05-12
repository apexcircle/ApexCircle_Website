import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const testimonials = [
    {
      id: 1,
      name: "Eliza Thompson",
      role: "Entrepreneur & Mentor",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      quote: "Joining Apex Circle was the best decision for my professional growth. The community is supportive, and the networking opportunities have led to valuable partnerships for my business.",
      rating: 5
    },
    {
      id: 2,
      name: "Daniel Foster",
      role: "Tech Lead",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      quote: "What I appreciate most about Apex Circle is the diversity of thought and expertise. Every event I attend, I walk away with new insights that have directly contributed to my career advancement.",
      rating: 5
    },
    {
      id: 3,
      name: "Jasmine Wu",
      role: "Marketing Director",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      quote: "The workshops and resources provided by Apex Circle have helped me develop skills I didn't know I needed. The community's emphasis on continuous learning keeps me coming back.",
      rating: 4
    }
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [inView]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent-50 rounded-full opacity-70"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-50 rounded-full opacity-60"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-primary-500">Members Say</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Hear from our community members about their experiences and the value they've gained from Apex Circle.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-lg">
            <div className="relative h-full">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="flex flex-col lg:flex-row items-center p-6 md:p-12"
              >
                <div className="lg:w-1/3 mb-6 lg:mb-0 flex-shrink-0">
                  <div className="relative w-40 h-40 mx-auto">
                    <div className="absolute inset-0 bg-primary-500 rounded-full opacity-10 transform rotate-12"></div>
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover rounded-full relative border-4 border-white shadow-md"
                    />
                  </div>
                </div>
                
                <div className="lg:w-2/3 lg:pl-8">
                  <div className="text-primary-500 mb-4">
                    <Quote className="h-12 w-12 opacity-20" />
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div>
                      <div className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</div>
                      <div className="text-primary-500">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                  
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonials[currentIndex].rating
                            ? 'text-gold-500'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-500 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-500 w-8'
                      : 'bg-gray-300 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-500 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;