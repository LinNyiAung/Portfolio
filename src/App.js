import { useState, useEffect } from 'react';
import { Github, Facebook, Linkedin, Mail, Phone, MapPin, ExternalLink, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import lna from './img/lna.jpg';
import inno2025 from './img/inno2025.jpg';
import inno2024 from './img/inno2024.jpg';
import fwl from './img/fwl.jpg';
import samsung from './img/samsung.JPG';

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

import LinNyiAung from './files/LinNyiAung.pdf';




// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 }
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
      { threshold: 0.1 }
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
  const animatedElements = useScrollAnimation();

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
    const scrollPosition = window.scrollY + 100;

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed w-full bg-white shadow-md z-10"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">Lin Nyi Aung</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <motion.button 
                key={item}
                whileHover={{ scale: 1.1 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`${activeSection === item.toLowerCase() ? 'text-indigo-600 font-medium' : 'text-gray-600'} hover:text-indigo-500 transition-colors`}
              >
                {item}
              </motion.button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white py-4 shadow-lg"
          >
            <div className="flex flex-col space-y-4 px-4">
              {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <motion.button 
                  key={item}
                  whileHover={{ x: 5 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${activeSection === item.toLowerCase() ? 'text-indigo-600 font-medium' : 'text-gray-600'} hover:text-indigo-500 transition-colors text-left`}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white pt-16">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 py-16 text-center"
        >
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hello, I'm <span className="text-yellow-300">Lin Nyi Aung</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8"
          >
            Full Stack Developer & Tech Enthusiast
          </motion.p>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center space-x-4"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Me
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white scroll-animate">
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate={animatedElements.about ? "visible" : "hidden"}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            About Me
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              variants={slideIn}
              initial="hidden"
              animate={animatedElements.about ? "visible" : "hidden"}
              className="md:w-1/3 mb-8 md:mb-0 flex justify-center"
            >
              <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-indigo-500">
                <img 
                  src={lna} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              initial="hidden"
              animate={animatedElements.about ? "visible" : "hidden"}
              className="md:w-2/3 md:pl-12"
            >
              <p className="text-lg text-gray-600 mb-6">
                I'm a passionate Full Stack Developer with expertise in building responsive web applications, mobile apps, and cutting-edge AR/VR experiences. With several experience in the tech industry, I specialize in creating intuitive and engaging digital solutions that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                My approach combines technical excellence with creative problem-solving, ensuring that every project I work on is both functional and user-friendly. I'm constantly learning new technologies and methodologies to stay at the forefront of digital innovation.
              </p>
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate={animatedElements.about ? "visible" : "hidden"}
                className="flex space-x-4"
              >
                <motion.a variants={fadeIn} whileHover={{ y: -5 }} href="https://github.com/LinNyiAung"  target="_blank" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                  <Github className="mr-2" size={20} />
                  <span>GitHub</span>
                </motion.a>
                <motion.a variants={fadeIn} whileHover={{ y: -5 }} href="https://www.facebook.com/LinNyiAungisSteve"  target="_blank" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                  <Facebook className="mr-2" size={20} />
                  <span>Facebook</span>
                </motion.a>
                <motion.a variants={fadeIn} whileHover={{ y: -5 }} href="https://www.linkedin.com/in/lin-nyi-aung-a68b85325/" target="_blank" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                  <Linkedin className="mr-2" size={20} />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a variants={fadeIn} whileHover={{ y: -5 }} href={LinNyiAung} target="_blank" className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors">
                  <ExternalLink className="mr-2" size={20} />
                  <span>Resume</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50 scroll-animate">
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate={animatedElements.skills ? "visible" : "hidden"}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            My Skills
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={animatedElements.skills ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <SkillCard 
              title="Website Development" 
              description="Creating responsive and dynamic websites using modern frameworks and best practices."
              icon={<WebIcon />}
            />
            <SkillCard 
              title="Application Development" 
              description="Building cross-platform mobile and desktop applications with seamless user experiences."
              icon={<AppIcon />}
            />
            <SkillCard 
              title="AR/VR Development" 
              description="Developing immersive augmented and virtual reality experiences for various platforms."
              icon={<VrIcon />}
            />
            <SkillCard 
              title="IoT" 
              description="Connecting devices and creating smart solutions for the Internet of Things ecosystem."
              icon={<IoTIcon />}
            />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white scroll-animate">
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate={animatedElements.projects ? "visible" : "hidden"}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Previous Projects
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={animatedElements.projects ? "visible" : "hidden"}
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <ProjectCard 
              title="Toe Pwar"
              description="A mobile application that uses machine learning to provide personalized financial advice and budget tracking. Features include expense categorization, saving goals, and investment recommendations."
              technologies={['Flutter', 'Python', 'Uvicorn', 'FastAPI', 'MongoDB']}
              images={[
                t1, t2, t3, t4, t5, t6, t7, t8, t9, t10, t11, t12, t13, t14, t15, t16, t17, t18,
              ]}
              link="https://github.com/LinNyiAung/ToePwar"
            />
            
            <ProjectCard 
              title="Thin Kay Ta"
              description="A mobile application that uses machine learning to interpret sign language to text and voice. Features include sign language libraries and real-time sign language interpretation with camera."
              technologies={['Flutter', 'TensorFlow', 'Python']}
              images={[
                tkt1, tkt2, tkt3, tkt4, tkt5, tkt6, tkt7, tkt8, tkt9            
              ]}
              link="https://github.com/LinNyiAung/ThinKayTa"
            />
            
            <ProjectCard 
              title="Myo Sae"
              description="An platform that connects entrepreneurs and business owners with potential inverstors. Use crowd funding model to help both individuals and investment firms to invest flexibily."
              technologies={['React', 'Node.js', 'Express.js', 'Firebase', 'MongoDB']}
              images={[
                ms1, 
                ms2, 
                ms3,
                ms4
              ]}
              link="https://github.com/LinNyiAung/MyoSae"
            />
            
            <ProjectCard 
              title="Thone Phat Myin"
              description="An augmented reality platform for interactive learning experiences. Students can visualize complex concepts through 3D models and interactive simulations."
              technologies={['Unity', 'C#', 'MySQL', 'ARCore']}
              images={[
                tpm1, tpm2, tpm3, tpm4, tpm5, tpm6, tpm7, tpm8, tpm9, tpm10, tpm12,
              ]}
              
            />
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-gray-50 scroll-animate">
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate={animatedElements.achievements ? "visible" : "hidden"}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          >
            Achievements
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={animatedElements.achievements ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <AchievementCard 
              title="First Runner-up - GUSTO Innovation Awards and Forum 2024"
              date="March 2025"
              description="Won second prize in the GUSTO Innovation Awards and Forum for developing an AI-powered Financial Management Application. The solution was praised for its innovative approach and practical application."
              imageUrl={inno2025}
            />
            <AchievementCard 
              title="Finalist in Falling Walls Lab Myanmar 2024"
              date="September 2024"
              description="Participated as a Finalist in the world class pitch competition, Falling Walls Lab Myanmar with a platform that solves the investment issues in the country."
              imageUrl={fwl}
            />
            <AchievementCard 
              title="Participated in Samsung Ai Hackathon"
              date="September 2024"
              description="Attended in Samsung's Innovation Bootcamp and participated in Samsung's Ai Hackathon with a sign lanaguage interpreter application that solves the communication problem bettwen people."
              imageUrl={samsung}
            />
            <AchievementCard 
              title="Second Runner-up - GUSTO Innovation Awards and Forum 2023"
              date="December 2023"
              description="Won third prize in the GUSTO Innovation Awards and Forum for developing an Augmented Reality based educational application. The solution was praised for its innovative approach and practical application."
              imageUrl={inno2024}
            />           
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-indigo-600 text-white scroll-animate">
        <div className="container mx-auto px-4">
          <motion.h2 
            variants={fadeIn}
            initial="hidden"
            animate={animatedElements.contact ? "visible" : "hidden"}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Contact Me
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={animatedElements.contact ? "visible" : "hidden"}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <motion.div whileHover={{ x: 5 }} className="flex items-center">
                  <Mail size={20} className="mr-3" />
                  <span>linnyiaung1794@gmail.com</span>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} className="flex items-center">
                  <MapPin size={20} className="mr-3" />
                  <span>Yangon, Myanmar</span>
                </motion.div>
              </div>
              <motion.div 
                variants={staggerContainer}
                className="mt-8 flex space-x-4"
              >
                <motion.a 
                  variants={fadeIn} 
                  whileHover={{ y: -5 }} 
                  href="https://github.com/LinNyiAung" 
                  className="bg-white text-indigo-600 p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a 
                  variants={fadeIn} 
                  whileHover={{ y: -5 }} 
                  href="https://www.facebook.com/LinNyiAungisSteve" 
                  className="bg-white text-indigo-600 p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a 
                  variants={fadeIn} 
                  whileHover={{ y: -5 }} 
                  href="https://www.linkedin.com/in/lin-nyi-aung-a68b85325/" 
                  className="bg-white text-indigo-600 p-3 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <div className="space-y-4">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded text-gray-800"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded text-gray-800"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 rounded text-gray-800"
                  ></textarea>
                </motion.div>
                <div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => alert('Message sent! Thank you for contacting me.')}
                    className="bg-white text-indigo-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="container mx-auto px-4 text-center"
        >
          <p>© {new Date().getFullYear()} Lin Nyi Aung. All Rights Reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Designed & Developed with ❤️</p>
        </motion.div>
      </footer>
    </div>
  );
}

// Component for Skill Cards
function SkillCard({ title, description, icon }) {
  return (
    <motion.div 
      variants={fadeIn}
      whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="text-indigo-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

// Enhanced Component for Project Cards with Carousel
function ProjectCard({ title, description, technologies, images, link }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalImages = images.length;

  const nextImage = () => {
    setIsLoading(true);
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setIsLoading(true);
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <motion.div 
      variants={fadeIn}
      whileHover={{ y: -5 }}
      className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
    >
      <div className="relative overflow-hidden">
        {/* Add loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Optimized image loading */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-800 flex items-center justify-center"
        >
          <img 
            src={images[currentImage]} 
            alt={`${title} - image ${currentImage + 1}`} 
            className="w-full max-h-96 object-contain py-4"
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </motion.div>
        
        {/* Carousel Navigation */}
        {totalImages > 1 && (
          <>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-70 transition-all"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </motion.button>
            
            {/* Simplified indicators - show fewer dots for better performance */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  whileHover={{ scale: 1.2 }}
                  className={`w-2 h-2 rounded-full ${currentImage === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mb-2">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <motion.span 
                key={index} 
                whileHover={{ scale: 1.05 }}
                className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <motion.a href={link} target="_blank">
          <motion.button 
            whileHover={{ x: 3 }}
            className="text-indigo-600 hover:text-indigo-800 flex items-center"
          >
            View Project <ExternalLink size={16} className="ml-1"/>
          </motion.button>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// Component for Achievement Cards
function AchievementCard({ title, date, description, imageUrl }) {
  return (
    <motion.div 
      variants={fadeIn}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden shadow-md mb-8 hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full">
          {date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

// Custom Icons
function WebIcon() {
  return (
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    </div>
  );
}

function AppIcon() {
  return (
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    </div>
  );
}

function VrIcon() {
  return (
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
  );
}

function IoTIcon() {
  return (
    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    </div>
  );
}