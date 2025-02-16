import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaExternalLinkAlt } from "react-icons/fa";
import SkillsSection from "../components/Skillsection";
import { FaFileAlt } from 'react-icons/fa';
import profileImage from "../assets/profile.jpg";



const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const projects = [
  //   {
  //     id: 1,
  //     title: "E-Commerce Platform",
  //     image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  //     technologies: ["React", "Node.js", "MongoDB"],
  //     description: "A full-stack e-commerce platform with payment integration and admin dashboard.",
  //   },
  //   {
  //     id: 2,
  //     title: "Task Management App",
  //     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  //     technologies: ["Vue.js", "Firebase"],
  //     description: "Real-time task management application with collaborative features.",
  //   },
  //   {
  //     id: 3,
  //     title: "Weather Dashboard",
  //     image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
  //     technologies: ["React", "Weather API"],
  //     description: "Interactive weather dashboard with location-based forecasts.",
  //   },
  // ];
  const projects = [
    {
      id: 1,
      title: "EduExpose",
      image: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1739699476/Eduexpose_q6ij04.png",
      link: "https://smart-home-dashboard.com",
      technologies: ["React", "Redux", "Typescript", "Bootstrap"],
      description: "Developed a scalable educational platform using React.js, TypeScript, Redux, and Bootstrap, featuring course management, user authentication, and interactive learning modules for an enhanced user experience."
    },
    {
      id: 2,
      title: "NxtTrendz E-Commerce Platform",
      image: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1739700573/Nxttrendzz_bm0lml.png",
      link: "",
      technologies: ["React", "React Context", "Javascript", "Html Css"],
      description: "An intuitive and responsive e-commerce application built with React, React Context, HTML, and CSS. Features include product browsing, cart management, secure checkout, and user authentication for a seamless shopping experience."
    },
    {
      id: 3,
      title: "Task Management App",
      image: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1739700725/TaskManagement_l0rtxw.png",
      link: "https://task-management-app.com",
      technologies: ["React.js", "Redux", "Firebase", "Tailwind Css"],
      description: "Built a task management app using React.js, TypeScript, Redux, and Bootstrap, enabling users to create, prioritize, and track tasks efficiently."
    },
  ];
  
  const ongoingProjects = [
    {
      id: 1,
      title: "AI Assistant Platform [ Coming Soon ]",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      technologies: ["Python", "TensorFlow", "React"],
      description: "Building an intelligent AI assistant platform for automation.",
    },
    {
      id: 2,
      title: "Blockchain Explorer [ Coming Soon ]",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55",
      technologies: ["Web3.js", "Node.js", "GraphQL"],
      description: "Developing a comprehensive blockchain explorer for multiple networks.",
    },
  ];

  const contactInfo = [
    {
      id: 1,
      title: "Email",
      value: "vineethabandi1312@email.com",
      icon: <MdEmail className="text-2xl" />,
    },
    {
      id: 2,
      title: "GitHub",
      value: "github.com/vineetha1312",
      icon: <FaGithub className="text-2xl" />,
    },
    {
      id: 3,
      value: "linkedin.com/in/vineethabandi",
      icon: <FaLinkedin className="text-2xl" />,
    },
  ];

  const aboutData = {
    image: profileImage, 
    description: [
      "Frontend Developer with over 1 year of hands-on experience in building responsive and high-performance web applications using React.js, TypeScript, HTML, and CSS. Adept at developing scalable solutions and integrating APIs to create dynamic user experiences.",
      "In my full-time freelancing role, I’ve worked on diverse projects, collaborating closely with clients and teams to deliver robust, efficient web applications. Passionate about problem-solving, I consistently strive to improve code quality and performance while meeting client expectations.",
      "I’m also dedicated to continuously learning new technologies and best practices to stay ahead in the ever-evolving web development landscape.",
    ],
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div style={{ backgroundColor: "#020202", color: "#FFFFFF" }}>
      <main className="container mx-auto px-4 pt-24 max-w-7xl">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="py-20 pl-8 md:pl-12 lg:pl-16 pr-8 md:pr-12 lg:pr-16"
        >
          <p  className="font-bold text-green-300">
            Hey there!, I'm-
          </p>
  
          <h1 className="text-2xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight font-bold mb-4">
  <TypeAnimation
    sequence={[
      "Vineetha",
      1000,
      "Jr Full Stack Dev",
      1000,
    ]}
    wrapper="span"
    speed={60}
    repeat={Infinity}
  />
</h1>

          <p className="text-2xl  font-medium mb-8">
            <span style={{ color: "#FFFFFF" }}>Front-end Developer.</span> A self-taught developer with an interest in learning new technologies.
          </p>
          <p className="text-lg mb-2">🚀 Currently focusing on expanding my skills in  <span className="text-green-300">Full Stack development.</span></p>
          <p className="text-lg mb-8">⚡ Looking for new job opportunities to grow.</p>
          <div className="flex flex-wrap gap-4">
  {/* For external links, using <a> tags */}
  <a
    href="https://github.com/Vineetha1312" // Replace with your GitHub link
    target="_blank"
    rel="noopener noreferrer"
  >
    <button style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", color: "#FFFFFF" }} className="hover:bg-rgba(78, 78, 78, 0.09) text-white px-4 sm:px-6 py-2 rounded-lg flex items-center transition-colors text-sm sm:text-base">
      <FaGithub className="mr-2 text-green-400" /> GitHub
    </button>
  </a>
  
  <a
    href="https://www.linkedin.com/in/vineethabandi/" // Replace with your LinkedIn link
    target="_blank"
    rel="noopener noreferrer"
  >
    <button style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", color: "#FFFFFF" }} className="hover:bg-rgba(78, 78, 78, 0.09) text-white px-4 sm:px-6 py-2 rounded-lg flex items-center transition-colors text-sm sm:text-base">
      <FaLinkedin className="mr-2 text-green-400" /> LinkedIn
    </button>
  </a>
  
  {/* <a
    href="mailto:your-email@example.com" // Replace with your email
    target="_blank"
    rel="noopener noreferrer"
  >
    <button style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", color: "#FFFFFF" }} className="hover:bg-rgba(78, 78, 78, 0.09) text-white px-4 sm:px-6 py-2 rounded-lg flex items-center transition-colors text-sm sm:text-base">
      <MdEmail className="mr-2 text-green-400" /> Email
    </button>
  </a> */}
  <a
  href="/Vineetha-Resume.pdf" 
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", color: "#FFFFFF" }}
    className="hover:bg-rgba(78, 78, 78, 0.09) text-white px-4 sm:px-6 py-2 rounded-lg flex items-center transition-colors text-sm sm:text-base"
  >
    <FaFileAlt className="mr-2 text-green-400" /> My Resume
  </button>
</a>
</div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
          className="py-20 pl-4 md:pl-12 lg:pl-16 pr-4 md:pr-12 lg:pr-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold mb-8"
            >
              About Me
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4">
              {aboutData.description.map((text, index) => (
                <motion.p
                  key={index}
                  variants={fadeInUp}
                  className="text-lg"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
          <motion.div variants={fadeInUp} className="order-1 md:order-2">
            {/* <div className="h-[400px]">
              <img
                src={aboutData.image}
                alt="Profile"
                style={{
                  borderColor: "#E0E0E0", // Light border color
                }}
                className="w-full h-full object-cover rounded-full shadow-xl transition-transform duration-300 hover:scale-105"
              />
            </div> */}
            <div className="h-[400px] flex items-center justify-center">
  <img
    src={aboutData.image}
    alt="Profile"
    className="w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 object-cover rounded-full border-2 md:border-6 border-gray-300 shadow-xl transition-transform duration-300 hover:scale-105"
  />
</div>

          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 pl-4 md:pl-12 lg:pl-16 pr-4 md:pr-12 lg:pr-16 max-w-7xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-2">
            All Creative Works
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-400">
          Here's some of my projects that I have worked on.
          </motion.p>
          <motion.a
            variants={fadeInUp}
            href="/projects"
            className="hover:underline transition-colors block mb-12 text-green-400"
          >
            Explore more →
          </motion.a>
          {/* <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            <motion.div variants={fadeInUp} className="flex items-center ">
              <div
                          style={{
                            backgroundColor: "#141414",
                          }}
                key={projects[0].id}
                className="group text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer w-full "
                onClick={() => window.location.href = `/project/${projects[0].id}`}
              >
                <div className="overflow-hidden ">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">{projects[0].title}</h3>
                    <FaExternalLinkAlt />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[0].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-green-400 px-2 py-1 rounded rounded-xl text-xs text-gray-900 hover:bg-green-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p style={{ color: "#908f93" }}>{projects[0].description}</p>
                </div>
              </div>
            </motion.div>
            <motion.div variants={staggerContainer} className="flex flex-col gap-8 ">
              {projects.slice(1).map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  style={{
                    backgroundColor: "#141414",
                  }}
                  className="group  text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-950 hover:border-gray-700  hover:border"
                  onClick={() => window.location.href = `/project/${project.id}`}
                >
                  <div className="overflow-hidden" 
                  
                  >
                    
                    <img
                    
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-[calc(100%-192px)]">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <FaExternalLinkAlt />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-green-400 px-2 py-1 rounded rounded-xl text-xs text-gray-900"

                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p style={{ color: "#908f93" }}>{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div> */}
          <motion.div variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
  <motion.div variants={fadeInUp} className="flex items-center ">
    <div
      style={{
        backgroundColor: "#141414",
      }}
      key={projects[0].id}
      className="group text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer w-full "
      onClick={() => window.open(projects[0].link, "_blank")}
    >
      <div className="overflow-hidden ">
        <img
          src={projects[0].image}
          alt={projects[0].title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{projects[0].title}</h3>
          <FaExternalLinkAlt />
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {projects[0].technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-green-400 px-2 py-1 rounded rounded-xl text-xs text-gray-900 hover:bg-green-600"
            >
              {tech}
            </span>
          ))}
        </div>
        <p style={{ color: "#908f93" }}>{projects[0].description}</p>
      </div>
    </div>
  </motion.div>
  <motion.div variants={staggerContainer} className="flex flex-col gap-8 ">
    {projects.slice(1).map((project) => (
      <motion.div
        key={project.id}
        variants={fadeInUp}
        style={{
          backgroundColor: "#141414",
        }}
        className="group text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-950 hover:border-gray-700 hover:border"
        onClick={() => window.open(project.link, "_blank")}
      >
        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6 flex flex-col h-[calc(100%-192px)]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <FaExternalLinkAlt />
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-green-400 px-2 py-1 rounded rounded-xl text-xs text-gray-900"
              >
                {tech}
              </span>
            ))}
          </div>
          <p style={{ color: "#908f93" }}>{project.description}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

        </motion.section>

        {/* <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-20 pl-4 md:pl-12 lg:pl-16 pr-4 md:pr-12 lg:pr-16"
        >
          <motion.div variants={fadeInUp} className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Ongoing Projects</h2>
          </motion.div>
          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingProjects.map((project) => (
              <motion.div
              style={{
                backgroundColor: "#141414",
              }}
                key={project.id}
                variants={fadeInUp}
                className="relative group bg-black text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-white text-2xl font-semibold transform translate-y-15 group-hover:translate-y-0 transition-transform duration-300">
                      Building in Progress
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                      className="bg-green-400 px-2 py-1 rounded rounded-xl text-xs text-gray-900 hover:bg-green-600"

                        key={index}
                        style={{
                          padding: "3px 6px",
                          borderRadius: "9999px",
                          fontSize: "0.75rem",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p style={{ color: "#908f93" }}>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section> */}

        <SkillsSection />
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-12 md:py-20 px-4 md:px-12 lg:px-16 overflow-hidden"
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Keep in Touch
            </h2>
            <p className=" md:text-lg mb-3">
              I'm currently specializing in <span className="text-green-400"> Full Stack Development. </span>
            </p>
            <p className="text-base md:text-lg mb-8 md:mb-12">
              Feel free to get in touch and talk more about your projects.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto px-4"
          >
            {contactInfo.map((contact) => (
              <motion.div
                key={contact.id}
                variants={fadeInUp}
                className="bg-black text-white p-4 md:p-6 rounded-xl border-2 border-gray-800 hover:bg-[rgba(255, 255, 255, 0.08)]  shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="p-2 md:p-3  border border-gray-800 rounded-full text-white flex-shrink-0">
                    {contact.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-base md:text-lg mb-1 truncate ">
                      {contact.title}
                    </h3>
                    <p className="text-sm md:text-base truncate">
                      {contact.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
};

export default Portfolio;