import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Mail, Globe } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    email?: string;
    website?: string;
  };
}

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alexandra Chen",
      role: "Founder & President",
      image: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      bio: "Alexandra founded Apex Circle with a vision to create a supportive community for professionals. She brings 15 years of leadership experience.",
      socials: {
        twitter: "#",
        linkedin: "#",
        email: "alexandra@apexcircle.com",
        website: "#"
      }
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Community Director",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      bio: "Marcus oversees community engagement and event planning. His background in community building has been instrumental in our growth.",
      socials: {
        twitter: "#",
        linkedin: "#",
        email: "marcus@apexcircle.com"
      }
    },
    {
      id: 3,
      name: "Sophia Rivera",
      role: "Partnership Lead",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      bio: "Sophia builds strategic partnerships that enhance our community offerings. Her network spans across industries and continents.",
      socials: {
        linkedin: "#",
        email: "sophia@apexcircle.com",
        website: "#"
      }
    },
    {
      id: 4,
      name: "Ethan Park",
      role: "Education Coordinator",
      image: "https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      bio: "Ethan develops educational programs and workshops. His innovative approaches make learning engaging and impactful.",
      socials: {
        twitter: "#",
        linkedin: "#",
        email: "ethan@apexcircle.com"
      }
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
    <section id="team" ref={ref} className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-60"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-primary-500">Team</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Meet the passionate individuals who work tirelessly to make Apex Circle a thriving community.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="group"
              variants={itemVariants}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg mb-4">
                <div className="aspect-w-1 aspect-h-1 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-[300px] object-cover object-center" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {member.bio}
                    </p>
                    <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-primary-500 hover:bg-primary-500 hover:text-white transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-primary-500 hover:bg-primary-500 hover:text-white transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a href={`mailto:${member.socials.email}`} className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-primary-500 hover:bg-primary-500 hover:text-white transition-colors">
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.website && (
                        <a href={member.socials.website} className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-primary-500 hover:bg-primary-500 hover:text-white transition-colors">
                          <Globe className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Add decorative shape */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary-500 rounded-full opacity-20"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-primary-500 font-medium">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;