'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion';
import {
    Download,
    Github,
    Linkedin,
    Mail,
    MapPin,
    Briefcase,
    ChevronDown
} from 'lucide-react';

export default function HeroSection() {
    const [typedText, setTypedText] = useState('');
    const fullText = 'Robotics Software Engineer';

    // Typing effect
    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setTypedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    // Stats with count-up animation
    const stats = [
        {value: '4+', label: 'Years Experience'},
        {value: '5', label: 'Major Projects'},
        {value: '17', label: 'Certifications'},
        {value: '3', label: 'Production Systems'},
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background with Grid Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-primary to-primary-light"/>
            <div className="absolute inset-0 grid-pattern opacity-20"/>

            {/* Floating Shapes */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"/>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"/>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                    >
                        {/* Greeting */}
                        <motion.p
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.2}}
                            className="text-accent text-lg mb-4 font-medium"
                        >
                            Hi, I'm
                        </motion.p>

                        {/* Name */}
                        <motion.h1
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.3}}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                        >
                            Ahmed Eltawil
                        </motion.h1>

                        {/* Role with Typing Effect */}
                        <motion.h2
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.4}}
                            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gradient min-h-[3rem]"
                        >
                            {typedText}
                            <span className="animate-pulse">|</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.5}}
                            className="text-text-secondary text-lg mb-4 leading-relaxed"
                        >
                            Specializing in <span className="text-accent font-semibold">ROS2</span>, <span
                            className="text-accent font-semibold">Autonomous Navigation</span> & <span
                            className="text-accent font-semibold">Safety-Critical Systems</span>
                        </motion.p>

                        <motion.p
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.6}}
                            className="text-text-secondary text-base mb-6 leading-relaxed"
                        >
                            Currently developing autonomous robots for hazardous oil & gas operations at <span
                            className="text-accent font-semibold">ADNOC</span>. Published researcher in robotics safety
                            systems.
                        </motion.p>

                        {/* Current Position Badge */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.7}}
                            className="flex items-center gap-2 mb-8 glass px-4 py-3 rounded-lg w-fit"
                        >
                            <Briefcase size={20} className="text-accent"/>
                            <span className="text-sm">
                <span className="text-text-secondary">Currently:</span>{' '}
                                <span
                                    className="text-accent font-semibold">Robotics Engineer @ M&J Oil Services (ADNOC)</span>
              </span>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{delay: 0.8}}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <a
                                href="/resume/Ahmed_Eltawil_CV.pdf"
                                download
                                className="
                  px-8 py-4 bg-accent text-primary font-semibold rounded-lg
                  hover:bg-accent-glow transition-all duration-300
                  shadow-lg hover:shadow-accent/50 hover:scale-105
                  flex items-center gap-2
                "
                            >
                                <Download size={20}/>
                                Download CV
                            </a>
                            <a
                                href="#projects"
                                className="
                  px-8 py-4 glass text-accent font-semibold rounded-lg
                  hover:border-accent transition-all duration-300
                  hover:scale-105
                "
                            >
                                View Projects
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 0.9}}
                            className="flex items-center gap-4"
                        >
                            <a
                                href="https://github.com/ahmedel-tawil"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass rounded-lg hover:text-accent hover:scale-110 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github size={24}/>
                            </a>
                            <a
                                href="https://linkedin.com/in/ahmed-eltawil"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 glass rounded-lg hover:text-accent hover:scale-110 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24}/>
                            </a>
                            <a
                                href="mailto:ahmedeltaweel55@outlook.com"
                                className="p-3 glass rounded-lg hover:text-accent hover:scale-110 transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail size={24}/>
                            </a>
                            <div className="flex items-center gap-2 px-4 py-2 glass rounded-lg ml-4">
                                <MapPin size={16} className="text-accent"/>
                                <span className="text-sm text-text-secondary">Abu Dhabi, UAE</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Photo with 3D Effect */}
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.3}}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative group">
                            {/* Glow Effect Behind Photo */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"/>

                            {/* Photo Container */}
                            <div className="relative w-80 h-80 md:w-96 md:h-96">
                                <div className="
                  absolute inset-0 rounded-2xl overflow-hidden
                  border-2 border-accent/30 group-hover:border-accent/60
                  shadow-2xl group-hover:shadow-accent/30
                  transition-all duration-500
                  group-hover:scale-105 group-hover:-rotate-2
                ">
                                    <Image
                                        src="/images/ahmedeltawil.jpeg"
                                        alt="Ahmed Eltawil - Robotics Software Engineer"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating Tech Badges */}
                            <motion.div
                                animate={{y: [0, -10, 0]}}
                                transition={{duration: 3, repeat: Infinity}}
                                className="absolute -top-4 -right-4 px-4 py-2 bg-accent text-primary rounded-full font-bold text-sm shadow-lg"
                            >
                                🤖 ROS2
                            </motion.div>
                            <motion.div
                                animate={{y: [0, -15, 0]}}
                                transition={{duration: 4, repeat: Infinity, delay: 0.5}}
                                className="absolute top-1/4 -left-4 px-4 py-2 glass text-accent rounded-full font-bold text-sm border border-accent/30"
                            >
                                🐍 Python
                            </motion.div>
                            <motion.div
                                animate={{y: [0, -12, 0]}}
                                transition={{duration: 3.5, repeat: Infinity, delay: 1}}
                                className="absolute bottom-1/4 -right-6 px-4 py-2 glass text-accent rounded-full font-bold text-sm border border-accent/30"
                            >
                                ⚙️ C++
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 1, duration: 0.8}}
                    className="mt-20 glass rounded-2xl p-8"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 1.2 + index * 0.1}}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-text-secondary">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.5}}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{y: [0, 10, 0]}}
                    transition={{duration: 1.5, repeat: Infinity}}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                    onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
                >
                    <span className="text-text-secondary text-sm">Scroll to explore</span>
                    <ChevronDown className="text-accent" size={24}/>
                </motion.div>
            </motion.div>
        </section>
    );
}