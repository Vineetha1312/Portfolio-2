// import { useState } from "react";
// import { FiUser, FiMail, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
// import { motion } from "framer-motion";

// // Define fade-in and slide-up animation variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [charCount, setCharCount] = useState(0);

//   const validateForm = () => {
//     let tempErrors = {};
//     if (!formData.fullName || formData.fullName.length < 2) {
//       tempErrors.fullName = "Name must be at least 2 characters long";
//     }
//     if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       tempErrors.email = "Please enter a valid email address";
//     }
//     if (!formData.message || formData.message.length < 5) {
//       tempErrors.message = "Message must be at least 5 characters long";
//     }
//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setTimeout(() => {
//         setIsSubmitted(true);
//       }, 1000);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (name === "message") {
//       setCharCount(value.length);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <motion.div
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeInUp}
//         style={{ backgroundColor: "#020202", color: "#FFFFFF" }}
//         className="min-h-screen flex items-center justify-center p-4"
//       >
//         <div className="w-full max-w-4xl text-center space-y-4 bg-card p-8 rounded-lg shadow-sm">
//           <FiCheckCircle className="w-16 h-16 mx-auto text-[#35D18F]" />
//           <h2 className="text-3xl font-bold">Thank you for reaching out!</h2>
//           <p className="text-lg">
//             Your message has been received. I will get back to you shortly with a response.
//           </p>
//           <button
//             onClick={() => {
//               setIsSubmitted(false);
//               setFormData({ fullName: "", email: "", message: "" });
//             }}
//             className="mt-4 px-6 py-2 bg-[#35D18F] text-[#FFFFFF] rounded hover:bg-[#2E9E67] transition-opacity bg-green-400 max-w-6xl w-full"
//           >
//             Send Another Message
//           </button>
//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       variants={fadeInUp}
//       style={{ backgroundColor: "#020202", color: "#FFFFFF" }}
//       className="min-h-screen flex items-center justify-center p-4 "
//     >
//       <div className="w-full max-w-4xl bg-card p-2 rounded-lg shadow-sm">
//         <h1 className="text-3xl font-bold text-center mb-6">Get in Touch</h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <motion.div variants={fadeInUp}>
//             <label className="block mb-2 text-lg" htmlFor="fullName">
//               Full Name
//             </label>
//             <div className="relative">
//               <FiUser className="absolute left-3 top-1/3 -translate-y-1/2 text-[#35D18F]" />
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 placeholder="Your Full Name"
//                 style={{
//                   backgroundColor: "#141414",
//                   color: "#FFFFFF",
//                 }}
//                 className="w-full pl-10 pr-4 py-2 border  border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#35D18F]"
//                 aria-invalid={errors.fullName ? "true" : "false"}
//               />
//             </div>
//             {errors.fullName && (
//               <p className="mt-1 text-sm text-[#FF3B30]">{errors.fullName}</p>
//             )}
//           </motion.div>

//           <motion.div variants={fadeInUp}>
//             <label className="block mb-2 text-lg" htmlFor="email">
//               Email Address
//             </label>
//             <div className="relative">
//               <FiMail className="absolute left-3 top-1/3 -translate-y-1/2 text-[#35D18F]" />
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="your.email@example.com"
//                 style={{
//                   backgroundColor: "#141414",
//                   color: "#FFFFFF",
//                 }}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#35D18F]"
//                 aria-invalid={errors.email ? "true" : "false"}
//               />
//             </div>
//             {errors.email && (
//               <p className="mt-1 text-sm text-[#FF3B30]">{errors.email}</p>
//             )}
//           </motion.div>

//           <motion.div variants={fadeInUp}>
//             <label className="block mb-2 text-lg" htmlFor="message">
//               Message
//             </label>
//             <div className="relative">
//               <FiMessageSquare className="absolute left-3 top-3 text-[#35D18F]" />
//               <textarea
//                 id="message"
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Write your message here..."
//                 rows="4"
//                 style={{
//                   backgroundColor: "#141414",
//                   color: "#FFFFFF",
//                 }}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-[#35D18F]"
//                 aria-invalid={errors.message ? "true" : "false"}
//               />
//             </div>
//             <div className="flex justify-between mt-1">
//               {errors.message && (
//                 <p className="text-sm text-[#FF3B30]">{errors.message}</p>
//               )}
//               <span className="text-sm text-[#E0E0E0]">{charCount}/500</span>
//             </div>
//           </motion.div>

//           <motion.button
//             type="submit"
//             variants={fadeInUp}
//             style={{
//               color: "#FFFFFF",
//               borderColor: "#35D18F",
//             }}
//             className="w-full px-6 py-3 rounded hover:bg-[#2E9E67] transition-opacity focus:outline-none focus:ring-2 focus:ring-[#35D18F] bg-green-400"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </div>
//     </motion.div>
//   );
// };

// export default ContactForm;

import { useState } from "react";
import { FiUser, FiMail, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Import EmailJS

// Define fade-in and slide-up animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // EmailJS Config - Replace with your actual EmailJS credentials
  const serviceID = "service_ljkr3gk"; 
  const templateID = "template_8s25aad"; 
  const publicKey = "d5Z9Qyjnx00nnG4CA"; 

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.fullName || formData.fullName.length < 2) {
      tempErrors.fullName = "Name must be at least 2 characters long";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.message || formData.message.length < 5) {
      tempErrors.message = "Message must be at least 5 characters long";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    // EmailJS Parameters - Matches EmailJS template variables
    const emailParams = {
      to_name: "Vineetha", // Your name (recipient)
      from_name: formData.fullName, // Sender's name
      message: formData.message, // Message content
      reply_to: formData.email, // User's email for reply-to
    };

    emailjs
      .send(serviceID, templateID, emailParams, publicKey)
      .then((response) => {
        console.log("✅ Email sent successfully!", response);
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("❌ Error sending email:", error);
        alert("Oops! Something went wrong. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "message") {
      setCharCount(value.length);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="min-h-screen flex items-center justify-center p-4 bg-black text-white"
      >
        <div className="w-full max-w-4xl text-center space-y-4 p-8 rounded-lg shadow-sm">
          <FiCheckCircle className="w-16 h-16 mx-auto text-green-500" />
          <h3 className="text-3xl font-bold">Thank you for reaching out!</h3>
          <p className="text-lg">
            Your message has been received. I will get back to you shortly.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ fullName: "", email: "", message: "" });
            }}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Send Another Message
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="min-h-screen flex items-center justify-center p-4 bg-black text-white"
    >
      <div className="w-full max-w-4xl p-6 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-center mb-6">Get in Touch</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div variants={fadeInUp}>
            <label className="block mb-2 text-lg" htmlFor="fullName">
              Full Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-green-500" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your Full Name"
                className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {errors.fullName && <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label className="block mb-2 text-lg" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-green-500" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <label className="block mb-2 text-lg" htmlFor="message">
              Message
            </label>
            <div className="relative">
              <FiMessageSquare className="absolute left-3 top-3 text-green-500" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows="4"
                className="w-full pl-10 pr-4 py-2 border border-gray-700 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </motion.div>

          <motion.button
            type="submit"
            variants={fadeInUp}
            className="w-full px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
