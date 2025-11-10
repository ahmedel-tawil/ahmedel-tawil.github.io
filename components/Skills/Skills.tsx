'use client';

import { skillCategories } from '@/data/skills';
import SkillBar from './SkillBar';

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative bg-primary-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-text-secondary max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise across robotics, software
              development, and system engineering
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.name}
                className="glass p-6 rounded-lg"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-6 text-accent">{category.name}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={categoryIndex * 100 + skillIndex * 50}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
