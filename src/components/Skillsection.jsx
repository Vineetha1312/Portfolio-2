import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  // Skills data (You can pass this as a prop if it's dynamic)
  const skills = {
    languages: ['Python', 'JavaScript', 'TypeScript'],
    frontend: ['React','Redux', 'HTML', 'CSS', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js'],
    tools: ['Git', 'Figma', 'Canva', 'Postman', 'Insomnia'],
    databases: ['MongoDB', 'MySQL'],
  };

  // Animation Variants
  const staggerContainer = {
    hidden: { opacity: 0, transition: { staggerChildren: 0.3 } },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      style={{
        backgroundColor: '#020202', // Dark background
      }}
      className="py-20 pl-8 md:pl-12 lg:pl-16 pr-8 md:pr-12 lg:pr-16 max-w-7xl mx-auto"
    >
      <motion.h2 variants={fadeInUp} style={{ color: '#FFFFFF' }} className="text-3xl font-bold mb-4">
        My Skills
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-between"
      >
        {/* Languages Section */}
        <motion.div variants={fadeInUp}>
          <h3 style={{ color: '#FFFFFF' }} className="text-xl font-semibold mb-2">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                }}
                className="hover:bg-[rgba(99, 99, 99, 0.09)] text-white px-4 sm:px-6 py-2 rounded-lg flex items-center transition-colors text-sm sm:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Frontend Section */}
        <motion.div variants={fadeInUp}>
          <h3 style={{ color: '#FFFFFF' }} className="text-xl font-semibold mb-2">
            Frontend Development
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                }}
                className="hover:bg-[rgba(78,78,78,0.09)] text-white px-4 sm:px-6 py-2 rounded-lg flex items-center transition-colors text-sm sm:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Backend Section */}
        <motion.div variants={fadeInUp}>
          <h3 style={{ color: '#FFFFFF' }} className="text-xl font-semibold mb-2">
            Backend Development
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                }}
                className="hover:bg-[rgba(78,78,78,0.09)] text-white px-4 sm:px-6 py-2 rounded-lg flex items-center transition-colors text-sm sm:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div variants={fadeInUp}>
          <h3 style={{ color: '#FFFFFF' }} className="text-xl font-semibold mb-2">
          Tools & APIs
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                }}
                className="hover:bg-[rgba(78,78,78,0.09)] text-white px-4 sm:px-6 py-2 rounded-lg flex items-center transition-colors text-sm sm:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Design & Other Technologies Section */}
        <motion.div variants={fadeInUp}>
          <h3 style={{ color: '#FFFFFF' }} className="text-xl font-semibold mb-2">
            Databases
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.databases.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#FFFFFF',
                }}
                className="hover:bg-[rgba(101, 101, 101, 0.09)] text-white px-4 sm:px-6 py-2 rounded-lg flex items-center transition-colors text-sm sm:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default SkillsSection;
