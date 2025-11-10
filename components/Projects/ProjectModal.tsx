'use client';

import {useEffect} from 'react';
import Image from 'next/image';
import {motion, AnimatePresence} from 'framer-motion';
import {Project, projectCategories} from '@/data/projects';
import {
    X,
    ExternalLink,
    Github,
    FileText,
    Lock,
    Calendar,
    Building2,
    Target,
    Lightbulb,
    TrendingUp,
    Star,
    CheckCircle2
} from 'lucide-react';

interface ProjectModalProps {
    project: Project | null;
    onClose: () => void;
}

export default function ProjectModal({project, onClose}: ProjectModalProps) {
    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (project) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [project]);

    if (!project) return null;

    const categoryConfig = projectCategories[project.category];

    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                onClick={onClose}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            >
                <motion.div
                    initial={{opacity: 0, scale: 0.95, y: 20}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    exit={{opacity: 0, scale: 0.95, y: 20}}
                    onClick={(e) => e.stopPropagation()}
                    className="
            glass rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto
            scrollbar-thin my-8
          "
                >
                    {/* Header with Image */}
                    <div className="relative h-80 bg-surface overflow-hidden">
                        {project.images?.[0] ? (
                            <>
                                <Image
                                    src={project.images[0]}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                />
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"/>
                            </>
                        ) : (
                            <div className={`
                relative w-full h-full flex items-center justify-center
                bg-gradient-to-br ${categoryConfig.color} opacity-30
              `}>
                                <span className="text-9xl">{categoryConfig.icon}</span>
                            </div>
                        )}

                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="
                absolute top-4 right-4 p-2 rounded-full
                bg-black/50 hover:bg-black/70 backdrop-blur-sm
                transition-colors z-10
              "
                        >
                            <X size={24} className="text-white"/>
                        </button>

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                            <div
                                className="px-3 py-1.5 rounded-full backdrop-blur-md bg-black/50 border border-accent/30 flex items-center gap-2">
                                <span className="text-lg">{categoryConfig.icon}</span>
                                <span className="text-sm font-semibold text-accent">{project.category}</span>
                            </div>

                            {project.featured && (
                                <div
                                    className="px-3 py-1.5 bg-accent text-primary rounded-full flex items-center gap-1.5 text-xs font-bold">
                                    <Star size={12} fill="currentColor"/>
                                    Featured
                                </div>
                            )}
                        </div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="flex items-center gap-3 mb-3 text-sm text-gray-300 flex-wrap">
                                {project.organization && (
                                    <>
                                        <div className="flex items-center gap-1.5">
                                            <Building2 size={14} className="text-accent"/>
                                            <span>{project.organization}</span>
                                        </div>
                                        <span>•</span>
                                    </>
                                )}
                                <div className="flex items-center gap-1.5">
                                    <Calendar size={14} className="text-accent"/>
                                    <span>{project.date}</span>
                                </div>
                                <span>•</span>
                                <div className={`
                  px-2 py-1 rounded text-xs font-semibold flex items-center gap-1
                  ${project.status === 'Production'
                                    ? 'bg-green-500/20 text-green-400'
                                    : project.status === 'Open Source'
                                        ? 'bg-purple-500/20 text-purple-400'
                                        : project.status === 'Confidential'
                                            ? 'bg-yellow-500/20 text-yellow-400'
                                            : 'bg-blue-500/20 text-blue-400'
                                }
                `}>
                                    {project.confidential && <Lock size={10}/>}
                                    {project.status}
                                </div>
                            </div>
                            <h2 className="text-4xl font-bold mb-2">{project.title}</h2>
                            <p className="text-xl text-accent font-medium">{project.subtitle}</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        {/* Quick Links */}
                        {(project.githubUrl || project.paperUrl || project.demoUrl) && (
                            <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-surface">
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      flex items-center gap-2 px-4 py-2
                      bg-accent/10 hover:bg-accent hover:text-primary
                      text-accent font-semibold rounded-lg
                      transition-all duration-300 border border-accent/30
                    "
                                    >
                                        <Github size={18}/>
                                        View Code
                                    </a>
                                )}
                                {project.paperUrl && (
                                    <a
                                        href={project.paperUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      flex items-center gap-2 px-4 py-2
                      bg-accent/10 hover:bg-accent hover:text-primary
                      text-accent font-semibold rounded-lg
                      transition-all duration-300 border border-accent/30
                    "
                                    >
                                        <FileText size={18}/>
                                        Read Paper
                                    </a>
                                )}
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                      flex items-center gap-2 px-4 py-2
                      bg-accent/10 hover:bg-accent hover:text-primary
                      text-accent font-semibold rounded-lg
                      transition-all duration-300 border border-accent/30
                    "
                                    >
                                        <ExternalLink size={18}/>
                                        View Demo
                                    </a>
                                )}
                            </div>
                        )}

                        {/* Description */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-accent">📋</span> Overview
                            </h3>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        {/* Challenge → Solution → Impact Grid */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {/* Challenge */}
                            <div className="glass rounded-lg p-6 border border-accent/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Target className="text-accent" size={24}/>
                                    <h4 className="text-xl font-bold">Challenge</h4>
                                </div>
                                <p className="text-text-secondary leading-relaxed text-sm">
                                    {project.challenge}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="glass rounded-lg p-6 border border-accent/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <Lightbulb className="text-accent" size={24}/>
                                    <h4 className="text-xl font-bold">Solution</h4>
                                </div>
                                <p className="text-text-secondary leading-relaxed text-sm">
                                    {project.solution}
                                </p>
                            </div>

                            {/* Impact Preview */}
                            <div className="glass rounded-lg p-6 border border-accent/10">
                                <div className="flex items-center gap-2 mb-4">
                                    <TrendingUp className="text-accent" size={24}/>
                                    <h4 className="text-xl font-bold">Impact</h4>
                                </div>
                                <div className="space-y-2">
                                    {project.impact.slice(0, 3).map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <CheckCircle2 size={16} className="text-accent mt-0.5 flex-shrink-0"/>
                                            <span className="text-text-secondary text-sm leading-relaxed">
                        {item}
                      </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Full Impact List */}
                        {project.impact.length > 3 && (
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <TrendingUp className="text-accent" size={24}/>
                                    Complete Impact
                                </h3>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {project.impact.map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-2 p-3 glass rounded-lg">
                                            <CheckCircle2 size={18} className="text-accent mt-0.5 flex-shrink-0"/>
                                            <span className="text-text-secondary leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Key Highlights */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Star className="text-accent" size={24}/>
                                Key Highlights
                            </h3>
                            <div className="grid md:grid-cols-2 gap-3">
                                {project.highlights.map((highlight, idx) => (
                                    <div key={idx} className="flex items-start gap-2 p-3 glass rounded-lg">
                                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"/>
                                        <span className="text-text-secondary leading-relaxed">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <span className="text-accent">🛠️</span> Technology Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-primary-light text-accent font-medium rounded-lg border border-accent/20"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>

                        {/* Confidential Notice */}
                        {project.confidential && (
                            <div className="glass border border-accent/30 rounded-lg p-6">
                                <div className="flex items-start gap-3">
                                    <Lock className="text-accent flex-shrink-0 mt-1" size={24}/>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Confidential Client Project</h4>
                                        <p className="text-text-secondary leading-relaxed">
                                            This project was developed for a confidential client under NDA.
                                            The information provided here covers the technical approach,
                                            architecture decisions, and general impact without revealing
                                            proprietary business logic or client-specific details.
                                        </p>
                                        <p className="text-accent font-medium mt-3">
                                            💼 Detailed case study and code samples available upon request during
                                            interview.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}