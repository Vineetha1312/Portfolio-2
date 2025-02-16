// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Projects = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
//       technologies: ["React", "Node.js", "MongoDB"],
//       description: "A full-stack e-commerce platform with payment integration and admin dashboard."
//     },
//     {
//       id: 2,
//       title: "Task Management App",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
//       technologies: ["Vue.js", "Firebase"],
//       description: "Real-time task management application with collaborative features."
//     },
//     {
//       id: 3,
//       title: "Weather Dashboard",
//       image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
//       technologies: ["React", "Weather API"],
//       description: "Interactive weather dashboard with location-based forecasts."
//     },
//     {
//       id: 4,
//       title: "Social Media Dashboard",
//       image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
//       technologies: ["React", "Redux", "Firebase"],
//       description: "Social media analytics dashboard with real-time data visualization."
//     },
//     {
//       id: 5,
//       title: "Fitness Tracking App",
//       image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
//       technologies: ["React Native", "Node.js", "MongoDB"],
//       description: "Mobile app for tracking workouts and nutrition with personalized recommendations."
//     },
//     {
//       id: 6,
//       title: "AI Image Generator",
//       image: "https://images.unsplash.com/photo-1547954575-855750c57bd3",
//       technologies: ["Python", "TensorFlow", "React"],
//       description: "Web application that generates unique images using AI and machine learning."
//     },
//     {
//       id: 7,
//       title: "Crypto Portfolio Tracker",
//       image: "https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f",
//       technologies: ["React", "Web3.js", "Node.js"],
//       description: "Cryptocurrency portfolio tracking with real-time price updates and analytics."
//     },
//     {
//       id: 8,
//       title: "Smart Home Dashboard",
//       image: "https://images.unsplash.com/photo-1558002038-1055907df827",
//       technologies: ["React", "IoT", "Node.js"],
//       description: "IoT dashboard for controlling and monitoring smart home devices."
//     }
//   ];

//   const filteredProjects = projects.filter(project =>
//     project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
//   );

//   const projectVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <div style={{ backgroundColor: "#020202", color: "#FFFFFF" }} className="min-h-screen">
//       <main className="container mx-auto px-4 pt-24">
//         <section className="py-20 pl-8 md:pl-12 lg:pl-16 pr-8 md:pr-12 lg:pr-16">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
//             Projects Archive
//           </h1>
//           <p className="text-xl mb-8" style={{ color: "#E0E0E0" }}>
//             I love building projects and practice my engineering skills. Here's an archive of things that I've worked on.
//           </p>
          
//           <div className="mb-12">
//             <input
//               type="text"
//               placeholder="Search projects..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               style={{
//                 backgroundColor: "#141414",
//                 color: "#FFFFFF"
//               }}
//               className="w-full max-w-md px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0D6EFD] border border-gray-800"
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProjects.map((project, index) => (
//               <motion.div
//                 key={project.id}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, margin: "-100px" }}
//                 variants={projectVariants}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 style={{
//                   backgroundColor: "#141414",
//                   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                 }}
//                 className="rounded-xl overflow-hidden cursor-pointer group"
//                 onClick={() => window.location.href = `/project/${project.id}`}
//               >
//                 <div className="overflow-hidden">
//                   <motion.img
//                     initial={{ opacity: 0, scale: 1.1 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.3 }}
//                     loading="lazy"
//                     src={project.image}
//                     alt={project.title}
//                     style={{
//                       height: "150px",
//                       transition: "transform 0.3s ease",
//                     }}
//                     className="w-full object-cover group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
//                     {project.title}
//                   </h3>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.technologies.map((tech, index) => (
//                       <span
//                         key={index}

//                         className="bg-green-400 px-2 py-1 rounded rounded-xl text-xs text-gray-900 transition-colors duration-300 hover:bg-green-600"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                   <p style={{ color: "#E0E0E0" }}>
//                     {project.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default Projects;



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    {
      id: 4,
      title: "Jobby App",
      image: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1739637484/jobby-app_slkpgu.png",
      link: "https://weather-dashboard.com",
      technologies: ["React", "React Context"],
      description: "Developed Jobby App, a job search platform using React.js, Javascript, React Context, and Bootstrap, featuring job listings, filters, user authentication, and a seamless application process for job seekers."
    },
    {
      id: 5,
      title: "PrimeVideo",
      image: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1739698638/Prime_Video_pr1efx.png",
      link: "https://social-media-dashboard.com",
      technologies: ["React", "React Context", "Html CSS"],
      description: "Developed a Prime Video App using React.js, Javascript, React Context, and Bootstrap, featuring movie browsing, search, categorization, and a seamless streaming experience with a responsive UI."
    },
    {
      id: 6,
      title: "Events App",
      image: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1739698060/Events_e4nxeb.png",
      link: "https://fitness-tracker.com",
      technologies: ["React Js", "Html", "Css"],
      description: "Developed an Events App using React.js, HTML, CSS, and JavaScript, enabling users to browse, register, and manage events with a seamless and responsive user experience."
    },
    {
      id: 7,
      title: "App Store",
      image: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1739698059/App_store_rkrwzf.png",
      link: "https://ai-image-generator.com",
      technologies: ["React", "Html Css"],
      description: "Developed an App Store using React.js, HTML, CSS, and JavaScript, featuring app listings, search functionality, categorization, and a user-friendly interface for seamless browsing and downloads."
    },
    {
      id: 8,
      title: "DreamScape",
      image: "https://res.cloudinary.com/dwlbneeh4/image/upload/v1739701062/Dreamspace_f3wced.png",
      link: "https://crypto-tracker.com",
      technologies: ["React", "Typescript", "Redux", 'Bootstrap'],
      description: "Developed Dreamscape, a wedding planning and photoshoot booking app using React.js, HTML, CSS, and JavaScript, featuring venue selection, photographer bookings, event scheduling, and a seamless user experience for dream weddings."
    }
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div style={{ backgroundColor: "#020202", color: "#FFFFFF" }} className="min-h-screen">
      <main className="container mx-auto px-4 pt-24">
        <section className="py-20 pl-4 md:pl-6 lg:pl-16 pr-4 md:pr-6 lg:pr-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
            Projects Archive
          </h1>
          <p className="text-xl mb-8" style={{ color: "#E0E0E0" }}>
            I love building projects and practice my engineering skills. Here's an archive of things that I've worked on.
          </p>
          
          <div className="mb-12">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                backgroundColor: "#141414",
                color: "#FFFFFF"
              }}
              className="w-full max-w-md px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#0D6EFD] border border-gray-800"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={projectVariants}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                style={{
                  backgroundColor: "#141414",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
                className="rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => window.open(project.link, "_blank")}
              >
                <div className="overflow-hidden">
                  <motion.img
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    loading="lazy"
                    src={project.image}
                    alt={project.title}
                    style={{
                      height: "150px",
                      objectFit : "cover",
                      transition: "transform 0.3s ease",
                    }}
                    className="w-full object-cover group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-green-400 px-2 py-1 rounded rounded-xl text-xs text-gray-900 transition-colors duration-300 hover:bg-green-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p style={{ color: "#E0E0E0" }}>
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
