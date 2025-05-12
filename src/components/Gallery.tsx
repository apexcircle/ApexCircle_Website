import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Image, Grid } from 'lucide-react';

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Community Meetup",
      category: "Events"
    },
    {
      url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Leadership Workshop",
      category: "Workshops"
    },
    {
      url: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Annual Conference",
      category: "Conferences"
    },
    {
      url: "https://images.pexels.com/photos/7551367/pexels-photo-7551367.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Virtual Gathering",
      category: "Online"
    },
    {
      url: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Team Building",
      category: "Activities"
    },
    {
      url: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      title: "Networking Event",
      category: "Networking"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="gallery" ref={ref} className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-100 rounded-full -translate-x-1/2 translate-y-1/2 opacity-60"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Circle <span className="text-primary-500">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Glimpses of our community events, workshops, and moments that capture the essence of Apex Circle.
          </p>
        </motion.div>
        
        <motion.div
          className="mb-12 flex items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="px-4 py-2 rounded-full bg-primary-500 text-white">All</button>
          <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-all">Events</button>
          <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-all">Workshops</button>
          <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-all">Conferences</button>
          <button className="px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-all">Activities</button>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
            >
              <div className="overflow-hidden h-64">
                <img 
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="inline-block px-3 py-1 bg-primary-500 text-white text-sm rounded-full mb-2">{image.category}</span>
                <h3 className="text-xl font-bold text-white">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a href="#" className="flex items-center justify-center gap-2 mx-auto btn-secondary">
            <Grid className="w-5 h-5" />
            View All Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;