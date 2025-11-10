'use client';

import { Bot, Code, Cog, Users } from 'lucide-react';

const highlights = [
  {
    icon: Bot,
    title: 'Robotics Development',
    description: 'ROS/ROS2, autonomous navigation, sensor fusion, and control systems',
  },
  {
    icon: Cog,
    title: 'System Integration',
    description: 'Hardware-software integration, electrical systems, and PLC programming',
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Backend APIs, real-time systems, databases, and web interfaces',
  },
  {
    icon: Users,
    title: 'Project Management',
    description: 'Cross-functional coordination, technical leadership, and delivery',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Story */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-accent mb-4">
                From Mechatronics to Full-Stack Robotics
              </h3>

              <p className="text-text-secondary leading-relaxed">
                I graduated in <span className="text-accent font-semibold">Industrial Mechatronics Engineering</span> and
                discovered that modern robotics requires more than just mechanical design and control
                systems — it needs robust software architecture.
              </p>

              <p className="text-text-secondary leading-relaxed">
                Today, I bridge the gap between hardware and software at{' '}
                <span className="text-accent font-semibold">ADNOC</span>, where I develop autonomous
                robotic systems for hazardous oil & gas operations. My work spans from designing
                electrical systems and working with PLCs to building ROS-based navigation stacks and
                cloud-deployed backend services.
              </p>

              <p className="text-text-secondary leading-relaxed">
                I believe the future of robotics lies in engineers who can think across the entire
                stack — from the circuits that power sensors to the algorithms that make decisions,
                and the cloud infrastructure that enables fleet management.
              </p>
            </div>

            {/* Stats/Quick Facts */}
            <div className="glass p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-accent">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Experience</span>
                  <span className="font-bold text-accent">4+ Years</span>
                </div>
                <div className="h-px bg-surface" />
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Projects Completed</span>
                  <span className="font-bold text-accent">15+</span>
                </div>
                <div className="h-px bg-surface" />
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Technologies</span>
                  <span className="font-bold text-accent">30+</span>
                </div>
                <div className="h-px bg-surface" />
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Certifications</span>
                  <span className="font-bold text-accent">9+</span>
                </div>
                <div className="h-px bg-surface" />
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Education</span>
                  <span className="font-bold text-accent">B.Eng (A+)</span>
                </div>
              </div>
            </div>
          </div>

          {/* What I Do Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">What I Do</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass p-6 rounded-lg hover:border-accent transition-all group hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="text-accent" size={24} />
                  </div>
                  <h4 className="font-bold mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-secondary">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
