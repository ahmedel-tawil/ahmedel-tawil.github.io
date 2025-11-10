'use client';

import { useState } from 'react';
import { Experience } from '@/data/experience';
import { MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isRight: boolean;
}

export default function TimelineItem({ experience, index, isRight }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(index === 0); // First item expanded by default

  return (
    <div
      className={`relative flex ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Timeline Dot */}
      <div
        className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${
          experience.endDate === null ? 'bg-accent animate-pulse' : 'bg-surface'
        } border-4 border-background z-10`}
      />

      {/* Content Card */}
      <div
        className={`glass p-6 rounded-lg flex-1 ml-16 md:ml-0 ${
          isRight ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'
        } hover:border-accent transition-all`}
      >
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-accent">{experience.role}</h3>
            {experience.endDate === null && (
              <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                Current
              </span>
            )}
          </div>
          <p className="text-lg font-semibold mb-2">{experience.company}</p>
          <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              {experience.location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              {experience.period}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary mb-4">{experience.description}</p>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 text-accent hover:text-accent-glow transition-colors mb-4"
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="space-y-4 animate-slide-down">
            {/* Achievements */}
            <div>
              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="text-accent mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-primary-light text-accent rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
