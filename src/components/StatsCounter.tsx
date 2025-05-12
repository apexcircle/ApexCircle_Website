import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Calendar, MapPin } from 'lucide-react';

const Counter = ({ target, title, icon }: { target: number; title: string; icon: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number;
    const duration = 2000; // 2 seconds

    if (inView) {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * target));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all text-center"
    >
      <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-primary-500 mb-2">{count.toLocaleString()}+</div>
      <div className="text-gray-700 font-medium">{title}</div>
    </motion.div>
  );
};

const StatsCounter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 md:py-24 px-6 bg-gray-50 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-100 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Growing Impact</h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Since our founding, we've created a significant impact through our community. 
            Here's a look at our achievements by the numbers.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter 
            target={5000} 
            title="Community Members" 
            icon={<Users className="h-8 w-8 text-primary-500" />} 
          />
          <Counter 
            target={120} 
            title="Monthly Events" 
            icon={<Calendar className="h-8 w-8 text-accent-500" />} 
          />
          <Counter 
            target={50} 
            title="Global Locations" 
            icon={<MapPin className="h-8 w-8 text-gold-500" />} 
          />
          <Counter 
            target={250} 
            title="Success Stories" 
            icon={<Award className="h-8 w-8 text-primary-500" />} 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;