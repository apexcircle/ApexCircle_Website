import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs: FAQItem[] = [
    {
      question: "How can I join Apex Circle?",
      answer: "Joining Apex Circle is simple! Click on the 'Join Us' button at the top of the page and fill out the membership application. Once submitted, our team will review your application and reach out within 48 hours."
    },
    {
      question: "What are the benefits of joining Apex Circle?",
      answer: "As a member, you'll have access to exclusive events, networking opportunities, educational resources, mentorship programs, and a supportive community of like-minded individuals committed to personal and professional growth."
    },
    {
      question: "How often does Apex Circle host events?",
      answer: "We host various types of events throughout the month, including weekly virtual meetups, monthly in-person networking events, quarterly workshops, and annual conferences. Our calendar is always filled with opportunities to connect and learn."
    },
    {
      question: "Is there a membership fee?",
      answer: "Yes, Apex Circle offers different membership tiers to suit your needs. We have a basic membership that's free, as well as premium options that provide additional benefits. Details about our membership plans can be found on our Membership page."
    },
    {
      question: "Can I volunteer or contribute to Apex Circle?",
      answer: "Absolutely! We welcome members who want to contribute their skills and time. We have various volunteer opportunities, from event organization to content creation. Contact our Community Director to learn more about how you can get involved."
    },
    {
      question: "Does Apex Circle have chapters in different cities?",
      answer: "Yes, we currently have chapters in 50+ cities globally. If there isn't a chapter in your city yet, you can apply to become a chapter lead and establish Apex Circle in your local community with our support."
    }
  ];
  
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="faq" ref={ref} className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-50 rounded-full translate-x-1/3 -translate-y-1/3 opacity-70"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-50 rounded-full opacity-60"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="text-primary-500">Questions</span></h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Find answers to common questions about Apex Circle membership, events, and community involvement.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-4 text-gray-700">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-gray-700 mb-4">Still have questions?</p>
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;