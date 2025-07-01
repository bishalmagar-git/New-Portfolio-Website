'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiKotlin, SiFirebase, SiAndroid, SiGithub } from 'react-icons/si';
import { FaPaintBrush, FaLayerGroup, FaDatabase, FaCodeBranch, FaJava } from 'react-icons/fa';
import { RiLiveFill } from 'react-icons/ri';
import { GiAbstract089 } from 'react-icons/gi';

export default function Portfolio() {
  const skills = [
    { name: 'Kotlin', icon: <SiKotlin className="w-8 h-8" /> },
    { name: 'Java', icon: <FaJava className="w-8 h-8" /> },
    { name: 'Jetpack Compose', icon: <FaPaintBrush className="w-8 h-8" /> },
    { name: 'MVVM Architecture', icon: <FaLayerGroup className="w-8 h-8" /> },
    { name: 'Room Database', icon: <FaDatabase className="w-8 h-8" /> },
    { name: 'Retrofit', icon: <SiAndroid className="w-8 h-8" /> },
    { name: 'Dagger Hilt', icon: <GiAbstract089 className="w-8 h-8" /> },
    { name: 'LiveData', icon: <RiLiveFill className="w-8 h-8" /> },
    { name: 'ViewModel', icon: <GiAbstract089 className="w-8 h-8" /> },
    { name: 'Firebase', icon: <SiFirebase className="w-8 h-8" /> },
    { name: 'Coroutines', icon: <FaCodeBranch className="w-8 h-8" /> },
    { name: 'Git and Github', icon: <SiGithub className="w-8 h-8" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-900">

      {/* Main Container */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">

        {/* Hero Section*/}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-3xl p-8 mb-16 shadow-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/path-to-your-texture.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">

            {/* Profile Picture */}
            <motion.div 
              whileHover={{ rotate: 2 }}
              className="relative w-40 h-40 md:w-48 md:h-48"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-emerald-600 rounded-full blur-md opacity-30"></div>
              <img 
                src="/profile.jpg" 
                alt="Bishal Pulami - Android Developer" 
                className="relative w-full h-full rounded-full object-cover border-4 border-emerald-100/80 z-10 shadow-lg"
              />
            </motion.div>
            
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-emerald-800">
                Hi, I'm Bishal Pulami
              </h1>
              <h2 className="text-xl md:text-2xl text-emerald-700 mb-4 font-medium">
                Android Developer
              </h2>
              <p className="text-emerald-800 max-w-lg leading-relaxed text-lg text-justify">
                Crafting premium mobile experiences with clean architecture and modern Android technologies.
                I build apps that feel as refined as they function.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-emerald-800">
            My Tech Stack
          </h2>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 blur-xl opacity-40"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-emerald-100/50 flex flex-col items-center gap-3 hover:shadow-lg transition-all"
                >
                  <div className="text-emerald-600">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-emerald-800/90 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-200/30 rounded-3xl transform rotate-1"></div>
            <div className="absolute -inset-2 bg-emerald-100/40 rounded-3xl transform -rotate-1"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-emerald-100/70">
              <h2 className="text-3xl font-bold mb-6 text-emerald-800">
                Crafting Digital Elegance
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">Design Philosophy</h3>
                  <p className="text-emerald-800/80 mb-4 leading-relaxed">
                    I believe mobile apps should be intuitive yet sophisticated - like a well-tailored suit. 
                    Every interaction should feel deliberate, every animation purposeful.
                  </p>
                  <p className="text-emerald-800/80 leading-relaxed">
                    My development process blends Material Design principles with custom flourishes,
                    creating interfaces that are familiar yet distinctive.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-emerald-700 mb-3">Development Approach</h3>
                  <ul className="space-y-3">
                    {[
                      "Modular architecture for maintainability",
                      "Pixel-perfect implementation",
                      "Performance-optimized solutions",
                      "Accessibility as a priority",
                      "Continuous integration pipelines"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-emerald-800/80">
                        <span className="text-emerald-500 mr-2">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-emerald-800">
            Let's Build Something Beautiful
          </h2>
          
          <div className="flex justify-center gap-6">
            {[
              { icon: <FiGithub />, url: "https://github.com/bishalmagar-git", label: "GitHub" },
              { icon: <FiLinkedin />, url: "https://www.linkedin.com/in/bishal-pulami-magar/", label: "LinkedIn" },
              { icon: <FiTwitter />, url: "https://x.com/IXBishal8", label: "Twitter/X" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-md border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-50 transition-colors mb-2">
                  {social.icon}
                </div>
                <span className="text-sm text-emerald-700">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}