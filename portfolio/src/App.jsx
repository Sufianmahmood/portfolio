import React, { useState } from "react";
import { motion } from "framer-motion";
import ProfileImage from "./assets/profile.jpg";
import "./index.css";
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
import { Typewriter } from "react-simple-typewriter";
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
      description: "A modern portfolio built with React and TailwindCSS.",
      link: "#",
    },
    {
      name: "Blog Platform",
      description: "Full-stack blog app with authentication and Appwrite backend.",
      link: "#",
    },
  ];

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
      .send("service_l2bigyv", "template_fsa3gos", formData, "uirZD5T_eXUYKV9g7")
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Failed to send message. Please try again.");
        console.log(error.text);
      });
  };

  return (
    <div className="app">
      {/* Navbar */}
<nav className="navbar">
  <div className="nav-left">
    <a href="#home" className="nav-logo">My Portfolio</a>
  </div>
</nav>

      {/* Hero Section */}
      <motion.section className="hero" initial="hidden" animate="visible" variants={sectionVariants}>
        <motion.div className="hero-text" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <h1>Hi, I'm Sufian Mahmood</h1>
          <p className="typewriter">
            <Typewriter
              words={[
                "Full Stack Developer 💻",
                "React & Node.js Enthusiast ⚛️",
                "MERN Stack Developer 🌐",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
          <div className="hero-buttons">
            <motion.a href="#projects" className="button" whileHover={{ scale: 1.05 }}>
              View My Work
            </motion.a>
            <motion.a href="/resume.pdf" download className="button-outline" whileHover={{ scale: 1.05 }}>
              Download Resume
            </motion.a>
          </div>
        </motion.div>
        <motion.div className="hero-image" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}>
          <img src={ProfileImage} alt="Profile" className="profile-img" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section className="section" id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2>About Me</h2>
        <p>
          I'm a passionate Full Stack Developer who loves building clean, modern,
          and responsive web applications. I have experience with React, Node.js,
          Express, MongoDB, and Tailwind CSS.
        </p>
      </motion.section>

      {/* Skills Section */}
      <motion.section className="section" id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillIcons.map((skill) => (
            <motion.div key={skill.name} className="skill-card" whileHover={{ scale: 1.2 }}>
              <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section className="section" id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section className="section" id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariants}>
        <h2>Contact Me</h2>
        <p>Have a project in mind? Send me a message!</p>
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit" className="button">Send Message</button>
        </form>
      </motion.section>

      {/* Footer */}
      <footer>
        <p>© 2025 Sufian Mahmood. All rights reserved.</p>
        <div className="social-icons">
          <motion.a href="https://github.com/Sufianmahmood" whileHover={{ scale: 1.2 }}>
            <FaGithub />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/sufian-mahmood-2b3b72211/" whileHover={{ scale: 1.2 }}>
            <FaLinkedin />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2 }}>
            <FaTwitter />
          </motion.a>
        </div>
      </footer>
    </div>
  );
}
