import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Leadership Summit",
      date: "June 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Grand Hyatt, New York",
      attendees: 250,
      image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      category: "Conference",
      color: "primary" // primary, accent, gold
    },
    {
      id: 2,
      title: "Networking Mixer",
      date: "July 8, 2025",
      time: "6:30 PM - 9:00 PM",
      location: "The Circle Lounge, San Francisco",
      attendees: 120,
      image: "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      category: "Networking",
      color: "accent"
    },
    {
      id: 3,
      title: "Entrepreneurship Workshop",
      date: "August 22, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Innovation Hub, Austin",
      attendees: 80,
      image: "https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&h=750&w=1260",
      category: "Workshop",
      color: "gold"
    }
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case 'primary': return 'bg-primary-500';
      case 'accent': return 'bg-accent-500';
      case 'gold': return 'bg-gold-500';
      default: return 'bg-primary-500';
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="events" ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary-50 rounded-full -translate-x-1/2 opacity-80"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-accent-50 rounded-full translate-x-1/2 opacity-70"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming <span className="text-primary-500">Events</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Join us for exciting opportunities to connect, learn, and grow with fellow community members.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className="card overflow-hidden group"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative h-48 mb-4 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute top-4 right-4 ${getColorClass(event.color)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {event.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">{event.title}</h3>
                
                <div className="flex items-center mb-2 text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-primary-500" />
                  <span>{event.date}</span>
                </div>
                
                <div className="flex items-center mb-2 text-gray-600">
                  <Clock className="h-4 w-4 mr-2 text-primary-500" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-center mb-2 text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                  <span>{event.location}</span>
                </div>
                
                <div className="flex items-center mb-4 text-gray-600">
                  <Users className="h-4 w-4 mr-2 text-primary-500" />
                  <span>{event.attendees} Attendees</span>
                </div>
                
                <button className="w-full btn-primary flex items-center justify-center gap-2">
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#" className="btn-secondary inline-flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            View All Events
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;