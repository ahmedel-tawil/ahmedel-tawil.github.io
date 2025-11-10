'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const roles = [
  'Robotics Engineer',
  'ROS/ROS2 Developer',
  'Full-Stack Engineer',
  'Autonomous Systems Developer',
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 217, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 217, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-accent text-lg mb-4 animate-fade-in">
            Hi, my name is
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
            Ahmed Eltawil
          </h1>

          {/* Rotating Role */}
          <div className="h-16 md:h-20 mb-6">
            <h2 className="text-3xl md:text-5xl font-bold text-text-secondary animate-fade-in">
              {roles[currentRole]}
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto animate-slide-up">
            Building intelligent systems from{' '}
            <span className="text-gradient font-semibold">circuits to cloud</span>
          </p>

          {/* Description */}
          <p className="text-lg text-text-secondary mb-12 max-w-2xl mx-auto animate-slide-up">
            I design, develop, and deploy robotic systems — from electrical wiring and ROS
            control to backend APIs and web interfaces
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-slide-up">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-accent text-primary rounded font-semibold hover:bg-accent-glow hover:scale-105 transition-all glow-hover"
            >
              View Projects
            </a>
            <a
              href="/resume/Ahmed_Eltawil_CV.pdf"
              download
              className="px-8 py-3 border border-accent text-accent rounded font-semibold hover:bg-accent hover:text-primary transition-all"
            >
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-fade-in">
            <a
              href="https://github.com/ahmed-eltawil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors hover:scale-110 transform"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/ahmed-eltawil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors hover:scale-110 transform"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:ahmedeltaweel55@outlook.com"
              className="text-text-secondary hover:text-accent transition-colors hover:scale-110 transform"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-accent"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
