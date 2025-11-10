'use client';

import { useState, useEffect, useRef } from 'react';
import { Skill } from '@/data/skills';

interface SkillBarProps {
  skill: Skill;
  delay: number;
}

export default function SkillBar({ skill, delay }: SkillBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const [showSubSkills, setShowSubSkills] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setWidth(skill.level);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [skill.level, delay, isVisible]);

  return (
    <div ref={ref} className="space-y-2">
      {/* Skill Name and Level */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-medium">{skill.name}</span>
          {skill.subSkills && skill.subSkills.length > 0 && (
            <button
              onClick={() => setShowSubSkills(!showSubSkills)}
              className="text-xs text-accent hover:text-accent-glow transition-colors"
            >
              {showSubSkills ? '▼' : '▶'} {skill.subSkills.length}
            </button>
          )}
        </div>
        <span className="text-sm text-text-secondary font-medium">{skill.level}%</span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-surface rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-glow rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>

      {/* Sub Skills */}
      {showSubSkills && skill.subSkills && (
        <div className="pl-4 pt-2 flex flex-wrap gap-2 animate-slide-down">
          {skill.subSkills.map((subSkill) => (
            <span
              key={subSkill}
              className="text-xs px-2 py-1 bg-primary-light text-text-secondary rounded"
            >
              {subSkill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
