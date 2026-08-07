import { useState, useEffect } from 'react';
import { Github, Facebook, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Imports remain unchanged ---
import lna from './img/lna.jpg';
import inno2025 from './img/inno2025.jpg';
import inno2024 from './img/inno2024.jpg';
import fwl from './img/fwl.jpg';
import samsung from './img/samsung.JPG';
import asc from './img/asc.jpg';

import ecm1 from './img/earthquakemap/ecm1.jpeg'
import ecm2 from './img/earthquakemap/ecm2.jpeg'
import ecm3 from './img/earthquakemap/ecm3.jpeg'

import phms1 from './img/pahtama_salesman/phms1.png'
import phms2 from './img/pahtama_salesman/phms2.png'
import phms3 from './img/pahtama_salesman/phms3.png'
import phms4 from './img/pahtama_salesman/phms4.png'
import phms5 from './img/pahtama_salesman/phms5.png'
import phms6 from './img/pahtama_salesman/phms6.png'
import phms7 from './img/pahtama_salesman/phms7.png'
import phms8 from './img/pahtama_salesman/phms8.png'

import t1 from './img/toepwar/t1.jpg';
import t2 from './img/toepwar/t2.jpg';
import t3 from './img/toepwar/t3.jpg';
import t4 from './img/toepwar/t4.jpg';
import t5 from './img/toepwar/t5.jpg';
import t6 from './img/toepwar/t6.jpg';
import t7 from './img/toepwar/t7.jpg';
import t8 from './img/toepwar/t8.jpg';
import t9 from './img/toepwar/t9.jpg';
import t10 from './img/toepwar/t10.jpg';
import t11 from './img/toepwar/t11.jpg';
import t12 from './img/toepwar/t12.jpg';
import t13 from './img/toepwar/t13.jpg';
import t14 from './img/toepwar/t14.jpg';
import t15 from './img/toepwar/t15.jpg';
import t16 from './img/toepwar/t16.jpg';
import t17 from './img/toepwar/t17.jpg';
import t18 from './img/toepwar/t18.jpg';

import tkt1 from './img/thinkayta/tkt1.jpg';
import tkt2 from './img/thinkayta/tkt2.jpg';
import tkt3 from './img/thinkayta/tkt3.jpg';
import tkt4 from './img/thinkayta/tkt4.jpg';
import tkt5 from './img/thinkayta/tkt5.jpg';
import tkt6 from './img/thinkayta/tkt6.jpg';
import tkt7 from './img/thinkayta/tkt7.jpg';
import tkt8 from './img/thinkayta/tkt8.jpg';
import tkt9 from './img/thinkayta/tkt9.png';

import ms1 from './img/myosae/ms1.png';
import ms2 from './img/myosae/ms2.png';
import ms3 from './img/myosae/ms3.png';
import ms4 from './img/myosae/ms4.png';

import tpm1 from './img/thonephatmyin/tpm1.jpg';
import tpm2 from './img/thonephatmyin/tpm2.jpg';
import tpm3 from './img/thonephatmyin/tpm3.jpg';
import tpm4 from './img/thonephatmyin/tpm4.jpg';
import tpm5 from './img/thonephatmyin/tpm5.jpg';
import tpm6 from './img/thonephatmyin/tpm6.jpg';
import tpm7 from './img/thonephatmyin/tpm7.jpg';
import tpm8 from './img/thonephatmyin/tpm8.jpg';
import tpm9 from './img/thonephatmyin/tpm9.jpg';
import tpm10 from './img/thonephatmyin/tpm10.jpg';
import tpm11 from './img/thonephatmyin/tpm11.png';
import tpm12 from './img/thonephatmyin/tpm12.png';


import f1 from './img/flow/f1.jpg'
import f2 from './img/flow/f2.jpg'
import f3 from './img/flow/f3.jpg'
import f4 from './img/flow/f4.jpg'
import f5 from './img/flow/f5.jpg'
import f6 from './img/flow/f6.jpg'
import f7 from './img/flow/f7.jpg'
import f8 from './img/flow/f8.jpg'
import f9 from './img/flow/f9.jpg'
import f10 from './img/flow/f10.jpg'
import f11 from './img/flow/f11.jpg'
import f12 from './img/flow/f12.jpg'
import f13 from './img/flow/f13.jpg'
import f14 from './img/flow/f14.jpg'
import f15 from './img/flow/f15.jpg'
import f16 from './img/flow/f16.jpg'

import LinNyiAung from './files/Lin_Nyi_Aung_WorkCV.pdf';
// --- End of Imports ---

// Refined Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const slideIn = {
  hidden: { x: -40, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 15 }
  }
};

// Custom hook for scroll animations
function useScrollAnimation() {
  const [elements, setElements] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setElements(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.15 }
    );
    
    const sections = document.querySelectorAll('.scroll-animate');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  
  return elements;
}

// Main App Component
export default function PortfolioWebsite() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const animatedElements = useScrollAnimation();

  const handleScroll = () => {
    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'achievements', 'contact'];
    const scrollPosition = window.scrollY + 100;
    
    setScrolled(window.scrollY > 20);

    for (const section of sections) {
      const element = document.getElementById(section);
      if (!element) continue;
      
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        setActiveSection(section);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // UPDATED SCROLL LOGIC
  const scrollToSection = (sectionId) => {
    setIsMobileMenuOpen(false); // Close menu instantly
    
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        // Use getBoundingClientRect for bulletproof offset calculation
        const yOffset = -70; // Accounts for the fixed navbar height
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    }, 150); // Small delay allows the React state update and layout to stabilize
  };

  const navItems = ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Achievements', 'Contact'];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-indigo-600' : 'text-white'}`}>
            LNA<span className="text-yellow-400">.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.button 
                key={item}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase() 
                    ? (scrolled ? 'text-indigo-600' : 'text-yellow-300') 
                    : (scrolled ? 'text-slate-600 hover:text-indigo-600' : 'text-slate-200 hover:text-white')
                }`}
              >
                {item}
              </motion.button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={scrolled ? 'text-slate-800' : 'text-white'}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl shadow-xl absolute w-full left-0 top-full overflow-hidden"
            >
              <div className="flex flex-col px-6 py-6 space-y-5">
                {navItems.map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-lg font-medium text-left transition-colors ${
                      activeSection === item.toLowerCase() ? 'text-indigo-600' : 'text-slate-600 hover:text-indigo-500'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-900 text-white">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6 py-20 text-center relative z-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium"
          >
            Available for new opportunities
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight"
          >
            Hello, I'm <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Lin Nyi Aung
            </span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-2xl mx-auto font-light"
          >
            Full Stack Developer & Tech Enthusiast building seamless digital experiences.
          </motion.p>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all shadow-lg"
            >
              Get in Touch
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto bg-transparent border-2 border-white/70 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white scroll-animate">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={animatedElements.about ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">About Me</h2>
            <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              variants={slideIn}
              initial="hidden"
              animate={animatedElements.about ? "visible" : "hidden"}
              className="w-full md:w-2/5 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-600 rounded-2xl transform rotate-3 scale-105 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 aspect-[4/5] w-72 md:w-full max-w-sm">
                  <img 
                    src={lna} 
                    alt="Lin Nyi Aung" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate={animatedElements.about ? "visible" : "hidden"}
              className="w-full md:w-3/5"
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-6">I design & build digital products</h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer with expertise in building responsive web applications, mobile apps, and cutting-edge AR/VR experiences. With several years of experience in the tech industry, I specialize in creating intuitive and engaging digital solutions that solve real-world problems.
                </p>
                <p>
                  My approach combines technical excellence with creative problem-solving, ensuring that every project I work on is both functional and user-friendly. I'm constantly learning new technologies and methodologies to stay at the forefront of digital innovation.
                </p>
              </div>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={animatedElements.about ? "visible" : "hidden"}
                className="flex flex-wrap gap-4 mt-10"
              >
                <SocialButton href="https://github.com/LinNyiAung" icon={<Github size={20} />} label="GitHub" />
                <SocialButton href="https://www.linkedin.com/in/lin-nyi-aung/" icon={<Linkedin size={20} />} label="LinkedIn" />
                <SocialButton href="https://www.facebook.com/LinNyiAungisSteve" icon={<Facebook size={20} />} label="Facebook" />
                <SocialButton href={LinNyiAung} icon={<ExternalLink size={20} />} label="Resume" primary />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-slate-50 scroll-animate">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={animatedElements.experience ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Work Experience</h2>
            <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={animatedElements.experience ? "visible" : "hidden"}
            className="relative border-l-2 border-indigo-100 ml-3 md:ml-6"
          >
            {/* Pahtama Group Experience Timeline Node */}
            <motion.div variants={fadeIn} className="relative pl-6 md:pl-10">
              {/* Main Timeline Dot */}
              <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-slate-50"></div>
              
              <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="mb-8 pb-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-800 group-hover:text-indigo-600 transition-colors">
                      Pahtama Group <span className="text-slate-500 font-medium text-lg ml-1 block sm:inline">(City Holdings)</span>
                    </h3>
                  </div>
                  <div className="mt-2 md:mt-0 px-4 py-1.5 bg-indigo-50 text-indigo-700 font-bold rounded-full text-sm w-max tracking-wide">
                    June 2025 - Current
                  </div>
                </div>
                
                <div className="space-y-10">
                  {/* Supervisor Role */}
                  <div className="relative">
                    <div className="absolute left-[-2rem] md:left-[-3.5rem] top-2 w-2 h-2 rounded-full bg-indigo-400 hidden md:block ring-4 ring-white"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-slate-800">IT Supervisor</h4>
                      <span className="text-xs font-bold text-slate-500 tracking-wider mt-1 md:mt-0">SEP 2025 - CURRENT</span>
                    </div>
                    <ul className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed">
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-3 mt-1 text-lg leading-none">▹</span> 
                        <span>Lead full-stack development of internal apps, websites, and digital systems aligned with organizational goals.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-3 mt-1 text-lg leading-none">▹</span> 
                        <span>Translate business requirements into efficient, maintainable technical solutions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-3 mt-1 text-lg leading-none">▹</span> 
                        <span>Architect and deploy AI-enhanced modules for workflow automation and analytics using OpenAI API.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-indigo-400 mr-3 mt-1 text-lg leading-none">▹</span> 
                        <span>Ensure usability, efficiency, and scalability across platforms.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Intern Role */}
                  <div className="relative pt-2">
                    <div className="absolute left-[-2rem] md:left-[-3.5rem] top-4 w-2 h-2 rounded-full bg-slate-300 hidden md:block ring-4 ring-white"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-slate-800">IT Intern</h4>
                      <span className="text-xs font-bold text-slate-500 tracking-wider mt-1 md:mt-0">JUN 2025 - AUG 2025</span>
                    </div>
                    <ul className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed">
                      <li className="flex items-start">
                        <span className="text-slate-400 mr-3 mt-1 text-lg leading-none">▹</span> 
                        <span>Collaborate with team members and contribute to ongoing IT initiatives.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-slate-400 mr-3 mt-1 text-lg leading-none">▹</span> 
                        <span>Translate business requirements into technical solutions.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-slate-400 mr-3 mt-1 text-lg leading-none">▹</span> 
                        <span>Learn and apply best practices in software development and IT operations.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white scroll-animate">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={animatedElements.skills ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Core Skills</h2>
            <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={animatedElements.skills ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            <SkillCard 
              title="Web Dev" 
              description="Creating responsive and dynamic websites using modern frameworks and best practices."
              icon={<WebIcon />}
              bgClass="bg-slate-50"
            />
            <SkillCard 
              title="App Dev" 
              description="Building cross-platform mobile and desktop applications with seamless UX."
              icon={<AppIcon />}
              bgClass="bg-slate-50"
            />
            <SkillCard 
              title="AR/VR Dev" 
              description="Developing immersive augmented and virtual reality experiences."
              icon={<VrIcon />}
              bgClass="bg-slate-50"
            />
            <SkillCard
              title="AI & ML"
              description="Developing intelligent systems and leveraging models for data analysis."
              icon={<AiIcon />}
              bgClass="bg-slate-50"
            />
            <SkillCard 
              title="IoT" 
              description="Connecting devices and creating smart solutions for the IoT ecosystem."
              icon={<IoTIcon />}
              bgClass="bg-slate-50"
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-50 scroll-animate">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={animatedElements.projects ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={animatedElements.projects ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            <ProjectCard 
              title="Toe Pwar (Rebranded)"
              description="A rebranded version of Toe Pwar mobile app, leveraging generative ai and LLMs for personal finanace."
              technologies={['React', 'Python', 'Express', 'MongoDB', 'RAG', 'Generative Ai']}
              images={[f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16]}
              link="https://github.com/LinNyiAung/Flow"
            />
            <ProjectCard 
              title="Myanmar Earthquake Map"
              description="A map for reporting damages during the 2025 earthquake in Myanmar. Connects damaged areas with volunteers and aid suppliers."
              technologies={['React', 'Node.js', 'Express', 'MongoDB']}
              images={[ecm1, ecm2, ecm3]}
              link="https://github.com/LinNyiAung/MyanmarEarthquake"
            />
            <ProjectCard 
              title="Toe Pwar"
              description="A mobile application that uses machine learning to provide personalized financial advice and budget tracking."
              technologies={['Flutter', 'Python', 'FastAPI', 'MongoDB']}
              images={[t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18]}
              link="https://github.com/LinNyiAung/ToePwar"
            />
            <ProjectCard 
              title="Thin Kay Ta"
              description="An ML-powered mobile app interpreting sign language to text and voice, featuring real-time interpretation via camera."
              technologies={['Flutter', 'TensorFlow', 'Python']}
              images={[tkt1, tkt2, tkt3, tkt4, tkt5, tkt6, tkt7, tkt8, tkt9]}
              link="https://github.com/LinNyiAung/ThinKayTa"
            />
            <ProjectCard 
              title="Myo Sae"
              description="A platform connecting entrepreneurs with potential investors using a crowdfunding model for flexible investments."
              technologies={['React', 'Node.js', 'Firebase', 'MongoDB']}
              images={[ms1, ms2, ms3, ms4]}
              link="https://github.com/LinNyiAung/MyoSae"
            />
            <ProjectCard 
              title="Thone Phat Myin"
              description="An augmented reality platform for interactive learning. Visualizes complex concepts through 3D models."
              technologies={['Unity', 'C#', 'MySQL', 'ARCore']}
              images={[tpm1, tpm2, tpm3, tpm4, tpm5, tpm6, tpm7, tpm8, tpm9, tpm10, tpm11, tpm12]}
            />
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-white scroll-animate">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={animatedElements.achievements ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Achievements</h2>
            <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={animatedElements.achievements ? "visible" : "hidden"}
            className="space-y-8"
          >
            <AchievementCard 
              title="Bronze Medalist - Asian Science Camp 2025"
              date="August 2025"
              description="Awarded Bronze at the Asian Science Camp 2025 Poster Presentation under the Sustainability theme for 'EcoBoat'—an AI-powered, solar-driven marine pollution solution."
              imageUrl={asc}
              bgClass="bg-slate-50"
            />
            <AchievementCard 
              title="First Runner-up - GUSTO Innovation Awards"
              date="March 2025"
              description="Won second prize for developing an AI-powered Financial Management Application, praised for its innovative approach."
              imageUrl={inno2025}
              bgClass="bg-slate-50"
            />
            <AchievementCard 
              title="Finalist - Falling Walls Lab Myanmar 2024"
              date="September 2024"
              description="Participated as a Finalist with a platform solving local investment issues."
              imageUrl={fwl}
              bgClass="bg-slate-50"
            />
            <AchievementCard 
              title="Samsung Ai Hackathon"
              date="September 2024"
              description="Participated in Samsung's Innovation Bootcamp and AI Hackathon with a sign language interpreter app."
              imageUrl={samsung}
              bgClass="bg-slate-50"
            />
            <AchievementCard 
              title="Second Runner-up - GUSTO Innovation Awards"
              date="December 2023"
              description="Won third prize for developing an Augmented Reality-based educational application."
              imageUrl={inno2024}
              bgClass="bg-slate-50"
            />           
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white scroll-animate relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate={animatedElements.contact ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-extrabold text-white tracking-tight mb-4">Let's Connect</h2>
            <div className="w-20 h-1.5 bg-indigo-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-400 max-w-lg mx-auto">Have a project in mind or just want to chat? I'd love to hear from you.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={animatedElements.contact ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700/50 backdrop-blur-sm"
          >
            <motion.div variants={fadeIn} className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg mr-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium mb-1">Email</p>
                      <a href="mailto:thelinnyiaung@gmail.com" className="text-lg hover:text-indigo-400 transition-colors">thelinnyiaung@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg mr-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-medium mb-1">Location</p>
                      <p className="text-lg">Yangon, Myanmar</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Message sent! Thank you.'); }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full p-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full p-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    className="w-full p-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-xl font-bold text-white mb-4 md:mb-0">
            LNA<span className="text-indigo-500">.</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Lin Nyi Aung. All Rights Reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
}

// Helper component for Social Buttons
function SocialButton({ href, icon, label, primary }) {
  return (
    <motion.a 
      whileHover={{ y: -3 }}
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        primary 
          ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/20' 
          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-indigo-600'
      }`}
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </motion.a>
  );
}

// Enhanced Skill Card
function SkillCard({ title, description, icon, bgClass = "bg-white" }) {
  return (
    <motion.div 
      variants={fadeIn}
      className={`group ${bgClass} p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all duration-300 relative overflow-hidden`}
    >
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 origin-left">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-indigo-600 transition-colors">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Massively Improved Project Card
function ProjectCard({ title, description, technologies, images, link }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalImages = images && images.length > 0 ? images.length : 0;

  const nextImage = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <motion.div 
      variants={fadeIn}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
    >
      <div className="relative overflow-hidden aspect-video bg-slate-900 flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
            <div className="w-8 h-8 border-3 border-slate-700 border-t-indigo-500 rounded-full animate-spin"></div>
          </div>
        )}
        
        {totalImages > 0 && (
          <motion.img 
            key={currentImage} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            src={images[currentImage]} 
            alt={`${title} screenshot`} 
            className="w-full h-full object-contain"
            onLoad={() => setIsLoading(false)}
          />
        )}
        
        {totalImages > 1 && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between px-3">
            <button 
              onClick={prevImage}
              className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextImage}
              className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
        
        {totalImages > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1.5 z-20">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentImage === index ? 'w-6 bg-indigo-500' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-slate-800">{title}</h3>
        <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">{description}</p>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-md text-xs font-semibold tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {link && (
            <div className="pt-4 border-t border-slate-100 mt-auto">
              <a 
                href={link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors group/link"
              >
                View Repository 
                <ExternalLink size={16} className="ml-1.5 transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"/>
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Enhanced Achievement Card
function AchievementCard({ title, date, description, imageUrl, bgClass = "bg-white" }) {
  return (
    <motion.div 
      variants={fadeIn}
      className={`${bgClass} rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row group`}
    >
      <div className="sm:w-1/3 relative overflow-hidden bg-slate-100">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 sm:h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      <div className="sm:w-2/3 p-6 sm:p-8 flex flex-col justify-center relative">
        <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full w-max mb-4">
          {date}
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-800 leading-snug">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Custom Icons
function WebIcon() {
  return (
    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    </div>
  );
}

function AppIcon() {
  return (
    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    </div>
  );
}

function VrIcon() {
  return (
    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
  );
}

function IoTIcon() {
  return (
    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    </div>
  );
}

function AiIcon() {
  return (
    <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="6" y="6" width="12" height="10" rx="2" strokeWidth={2} />
        <circle cx="9" cy="9" r="1" fill="currentColor" />
        <circle cx="15" cy="9" r="1" fill="currentColor" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 12h4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 10H4M20 10h-2" />
      </svg>
    </div>
  );
}