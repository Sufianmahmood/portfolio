import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProfileImage from "./assets/profile.jpg";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import emailjs from "@emailjs/browser";

export default function App() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const skillIcons = [
    { icon: <FaReact />, name: "React", color: "#61DBFB" },
    { icon: <FaNodeJs />, name: "Node.js", color: "#3C873A" },
    { icon: <SiExpress />, name: "Express", color: "#fff" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "#38B2AC" },
    { icon: <FaJsSquare />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <FaHtml5 />, name: "HTML", color: "#E34F26" },
    { icon: <FaCss3Alt />, name: "CSS", color: "#1572B6" },
    { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
  ];

  const projects = [
    {
      name: "Portfolio Website",
      description: "A modern portfolio built with React, TailwindCSS.",
      link: "#",
    },
    {
      name: "Blog Platform",
      description: "Full-stack blog app with authentication.",
      link: "https://myblog-one-beige.vercel.app/",
    }
  ];

  // Typing animation
  const words = [
    "Full Stack Developer 💻",
    "React & Node.js Enthusiast ⚛️",
    "MERN Stack Developer 🌐",
  ];
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < words[currentWord].length) {
        setDisplayText((prev) => prev + words[currentWord][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setDisplayText("");
          setCharIndex(0);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }, 1500);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [charIndex, currentWord, words]);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_l2bigyv", // replace with EmailJS service ID
        "template_fsa3gos", // replace with EmailJS template ID
        formData,
        "uirZD5T_eXUYKV9g7" // replace with EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="font-sans text-white bg-gray-900 scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50">
        <div className="container mx-auto flex justify-center gap-8 py-4 text-lg font-semibold">
          <a href="#home" className="hover:text-blue-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="h-screen flex flex-col md:flex-row justify-center items-center px-6 pt-20 gap-6 md:gap-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm Sufian Mahmood
          </h1>
          <p className="text-xl md:text-2xl mb-6 h-8">
            {displayText}
            <span className="animate-pulse">|</span>
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.a
              href="#projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: "#2563EB" }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              className="bg-gray-800 px-6 py-3 rounded-full font-semibold border border-blue-600"
              whileHover={{ scale: 1.05, backgroundColor: "#1E40AF" }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        >
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-80 md:w-[28rem] h-80 md:h-[28rem] object-cover shadow-lg rounded-xl"
          />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-16 bg-gray-800 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          I'm a passionate Full Stack Developer who loves building clean, modern, and responsive
          web applications. I have experience with React, Node.js, Express, MongoDB, and Tailwind CSS.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-16 bg-gray-900 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {skillIcons.map((skill) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center cursor-pointer"
              whileHover={{ scale: 1.2 }}
            >
              <div style={{ color: skill.color }} className="text-6xl mb-2">
                {skill.icon}
              </div>
              <span className="text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-16 bg-gray-800 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="bg-gray-900 rounded-lg shadow-md p-6 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.5)" }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.name}</h3>
              <p className="text-gray-400">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline mt-2 block"
                target="_blank"
              >
                Live Demo
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 bg-gray-900 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6 text-gray-300">Have a project in mind? Send me a message!</p>
        <form
          className="max-w-xl mx-auto flex flex-col gap-4 text-left"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-400 text-center">
        <p>© 2025 Sufian Mahmood. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2 text-2xl">
          <motion.a href="https://github.com/Sufianmahmood" whileHover={{ scale: 1.2, color: "#2563EB" }}>
            <FaGithub />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/sufian-mahmood-2b3b72211/" whileHover={{ scale: 1.2, color: "#0A66C2" }}>
            <FaLinkedin />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2, color: "#1DA1F2" }}>
            <FaTwitter />
          </motion.a>
        </div>
      </footer>
    </div>
  );
}
