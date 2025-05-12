import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Target, Users, Sparkles } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Heart className="h-8 w-8 text-primary-500" />,
      title: 'Supportive Community',
      description: 'A nurturing environment where members help each other grow and succeed together.'
    },
    {
      icon: <Target className="h-8 w-8 text-primary-500" />,
      title: 'Shared Goals',
      description: 'United by common objectives, we collaborate to achieve collective success.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: 'Diverse Network',
      description: 'Connect with professionals from various backgrounds, industries, and expertise.'
    },
    {
      icon: <Sparkles className="h-8 w-8 text-primary-500" />,
      title: 'Personal Growth',
      description: 'Opportunities for learning, skill development, and personal advancement.'
    }
  ];

  return (
    <section id="about" ref={ref} className="section-padding bg-white relative">
      {/* Decorative circle */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary-500">Apex Circle</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Founded in 2020, Apex Circle brings together individuals who believe in the power of community, 
            collaboration, and continuous growth. Our circle represents unity, wholeness, and the infinite 
            potential of connected minds.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary-100 transform -rotate-6"></div>
              <img 
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                alt="Apex Circle Team" 
                className="relative rounded-2xl shadow-lg object-cover w-full max-w-md h-[400px]"
              />
            </div>
          </motion.div>
          
          <motion.div
            variants={variants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              At Apex Circle, we're committed to creating a vibrant ecosystem where members inspire and 
              empower each other. Our mission is to foster meaningful connections, facilitate knowledge 
              sharing, and provide a platform for personal and professional growth.
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-6">
              We envision a global community where collaboration transcends boundaries, ideas flourish, 
              and every member has the opportunity to reach their highest potential within our supportive circle.
            </p>
            
            <div className="flex gap-4">
              <button className="btn-primary">Learn More</button>
              <button className="btn-secondary">Our History</button>
            </div>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="card text-center"
            >
              <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-primary-50">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;