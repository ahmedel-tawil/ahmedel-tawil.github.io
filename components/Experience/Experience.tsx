'use client';

import {useState, useEffect, useRef} from 'react';
import {motion, useInView, useScroll, useTransform} from 'framer-motion';
import {
    Briefcase,
    MapPin,
    Calendar,
    ChevronDown,
    ExternalLink,
    Award,
    Zap
} from 'lucide-react';
import {experiences} from '@/data/experience';

export default function ExperienceTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // Transform scroll progress to line height
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className="py-20 px-4 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-10"/>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Briefcase className="text-accent" size={32}/>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Professional <span className="text-gradient">Journey</span>
                        </h2>
                    </div>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        From mechatronics engineering to robotics software development -
                        building intelligent systems across industries
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div ref={containerRef} className="relative">
                    {/* Animated Central Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-surface -translate-x-1/2">
                        {/* Progress Line (animates as you scroll) */}
                        <motion.div
                            style={{height: lineHeight}}
                            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-accent via-accent-glow to-secondary"
                        />
                    </div>

                    {/* Experience Cards */}
                    <div className="space-y-12 md:space-y-24">
                        {experiences.map((exp, index) => (
                            <ExperienceCard
                                key={exp.id}
                                experience={exp}
                                index={index}
                                isLeft={index % 2 === 0}
                            />
                        ))}
                    </div>
                </div>

                {/* Current Status Badge */}
                <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    className="mt-16 text-center"
                >
                    <div
                        className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full border border-accent/30">
                        <div className="w-3 h-3 bg-accent rounded-full animate-pulse"/>
                        <span className="text-accent font-semibold">Currently: Robotics Software Engineer</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

interface ExperienceCardProps {
    experience: any;
    index: number;
    isLeft: boolean;
}

function ExperienceCard({experience, index, isLeft}: ExperienceCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, {once: true, margin: "-100px"});

    // Calculate duration
    const duration = calculateDuration(experience.startDate, experience.endDate);
    const isCurrent = experience.current;

    return (
        <motion.div
            ref={cardRef}
            initial={{opacity: 0, x: isLeft ? -50 : 50}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.6, delay: index * 0.1}}
            className={`relative flex items-center ${
                isLeft
                    ? 'md:flex-row md:justify-start'
                    : 'md:flex-row-reverse md:justify-end'
            } flex-col`}
        >
            {/* Timeline Node */}
            <motion.div
                initial={{scale: 0}}
                animate={isInView ? {scale: 1} : {}}
                transition={{duration: 0.4, delay: index * 0.1 + 0.3}}
                className={`absolute left-8 md:left-1/2 -translate-x-1/2 z-20 ${
                    isCurrent ? 'w-6 h-6' : 'w-4 h-4'
                }`}
            >
                <div className={`
          w-full h-full rounded-full border-4 border-background
          ${isCurrent
                    ? 'bg-accent animate-pulse shadow-lg shadow-accent/50'
                    : 'bg-accent-glow'
                }
        `}>
                    {isCurrent && (
                        <motion.div
                            animate={{scale: [1, 1.5, 1]}}
                            transition={{duration: 2, repeat: Infinity}}
                            className="absolute inset-0 rounded-full bg-accent opacity-30"
                        />
                    )}
                </div>
            </motion.div>

            {/* Connector Line (for mobile) */}
            <div className="md:hidden absolute left-8 top-6 w-px h-full bg-surface"/>

            {/* Card */}
            <motion.div
                whileHover={{scale: 1.02, y: -5}}
                className={`
          w-full md:w-[calc(50%-3rem)] ml-16 md:ml-0
          glass rounded-xl p-6 cursor-pointer
          hover:shadow-2xl hover:border-accent/30
          transition-all duration-300
          ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}
          ${isCurrent ? 'border-accent/50 glow' : 'border-transparent'}
        `}
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Current Badge */}
                {isCurrent && (
                    <div
                        className="absolute -top-3 right-4 px-3 py-1 bg-accent text-primary rounded-full text-xs font-bold flex items-center gap-1">
                        <Zap size={12} fill="currentColor"/>
                        Current Position
                    </div>
                )}

                {/* Header */}
                <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-text group-hover:text-accent transition-colors">
                            {experience.title}
                        </h3>
                        {experience.url && (
                            <a
                                href={experience.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-accent hover:text-accent-glow transition-colors"
                            >
                                <ExternalLink size={18}/>
                            </a>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary mb-3">
                        <div className="flex items-center gap-1.5">
                            <Briefcase size={16} className="text-accent"/>
                            <span className="font-medium text-accent">{experience.company}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                            <MapPin size={16}/>
                            <span>{experience.location}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <Calendar size={16} className="text-accent"/>
                        <span className="text-text-secondary">
              {experience.startDate} - {experience.endDate || 'Present'}
            </span>
                        <span className="px-2 py-0.5 bg-accent/20 text-accent rounded text-xs font-medium">
              {duration}
            </span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-4 leading-relaxed">
                    {experience.description}
                </p>

                {/* Key Achievements (Always visible - top 3) */}
                <div className="space-y-2 mb-4">
                    {experience.highlights.slice(0, 3).map((highlight: string, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{opacity: 0, x: -20}}
                            animate={isInView ? {opacity: 1, x: 0} : {}}
                            transition={{delay: index * 0.1 + 0.4 + idx * 0.1}}
                            className="flex items-start gap-2"
                        >
                            <Award size={16} className="text-accent mt-0.5 flex-shrink-0"/>
                            <span className="text-sm text-text-secondary leading-relaxed">
                {highlight}
              </span>
                        </motion.div>
                    ))}
                </div>

                {/* Expandable Content */}
                <motion.div
                    initial={false}
                    animate={{height: isExpanded ? 'auto' : 0}}
                    className="overflow-hidden"
                >
                    <div className="pt-4 border-t border-surface space-y-2">
                        {experience.highlights.slice(3).map((highlight: string, idx: number) => (
                            <div key={idx} className="flex items-start gap-2">
                                <Award size={16} className="text-accent mt-0.5 flex-shrink-0"/>
                                <span className="text-sm text-text-secondary leading-relaxed">
                  {highlight}
                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <div className="mt-4 pt-4 border-t border-surface">
                    <div className="flex flex-wrap gap-2">
                        {experience.technologies.slice(0, 6).map((tech: string) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-primary-light text-accent text-sm rounded-md border border-accent/20"
                            >
                {tech}
              </span>
                        ))}
                        {experience.technologies.length > 6 && (
                            <span className="px-3 py-1 bg-primary-light text-text-secondary text-sm rounded-md">
                +{experience.technologies.length - 6} more
              </span>
                        )}
                    </div>
                </div>

                {/* Expand/Collapse Button */}
                {experience.highlights.length > 3 && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsExpanded(!isExpanded);
                        }}
                        className="mt-4 flex items-center gap-2 text-sm text-accent hover:text-accent-glow transition-colors"
                    >
                        <span>{isExpanded ? 'Show less' : `Show ${experience.highlights.length - 3} more achievements`}</span>
                        <motion.div
                            animate={{rotate: isExpanded ? 180 : 0}}
                            transition={{duration: 0.3}}
                        >
                            <ChevronDown size={16}/>
                        </motion.div>
                    </button>
                )}
            </motion.div>
        </motion.div>
    );
}

// Helper function to calculate duration
function calculateDuration(startDate: string, endDate?: string): string {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const months = (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
        return `${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
    } else if (remainingMonths === 0) {
        return `${years} ${years === 1 ? 'year' : 'years'}`;
    } else {
        return `${years}y ${remainingMonths}m`;
    }
}