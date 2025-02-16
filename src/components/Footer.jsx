// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Define the fadeInUp animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      style={{
        backgroundColor: '#020202', // Dark background
        borderColor: '#353233', // Light border color
      }}
      className="py-8 text-center border-t border-gray-600"
    >
      <div className="container mx-auto px-4" style={{ color: '#FFFFFF' }}> {/* Light text color */}
        <p className="mb-2">
          Designed and Developed by Peter Parker
        </p>
        <p>
          Built with React.js & Tailwind CSS · Hosted on Vercel
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;