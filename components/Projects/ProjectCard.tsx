'use client';

import {useState} from 'react';
import Image from 'next/image';
import {Project, projectCategories} from '@/data/projects';
import {
    ExternalLink,
    Github,
    FileText,
    Lock,
    Calendar,
    Building2,
    Star,
    ArrowRight
} from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export default function ProjectCard({project, onClick}: ProjectCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);

    const categoryConfig = projectCategories[project.category];
    const primaryImage = project.images?.[0];

    return (
        <div
            className={`
        glass rounded-xl overflow-hidden group cursor-pointer
        transition-all duration-300
        hover:scale-[1.02] hover:shadow-2xl
        ${project.featured ? 'border-accent/30' : ''}
      `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {/* Image Section */}
            <div className="relative h-64 md:h-80 bg-surface overflow-hidden">
                {primaryImage && !imageError ? (
                    <>
                        <Image
                            src={primaryImage}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={() => setImageError(true)}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"/>
                    </>
                ) : (
                    <div className={`
            relative w-full h-full flex items-center justify-center
            bg-gradient-to-br ${categoryConfig.color} opacity-20
          `}>
                        <span className="text-8xl">{categoryConfig.icon}</span>
                    </div>
                )}

                {/* Badges Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2">
                        <div
                            className="px-3 py-1.5 rounded-full backdrop-blur-md bg-black/50 border border-accent/30 flex items-center gap-2">
                            <span className="text-lg">{categoryConfig.icon}</span>
                            <span className="text-sm font-semibold text-accent">{project.category}</span>
                        </div>

                        {/* Status Badge */}
                        <div className={`
              px-3 py-1.5 rounded-full backdrop-blur-md border flex items-center gap-1.5 text-xs font-semibold
              ${project.status === 'Production'
                            ? 'bg-green-500/20 border-green-500/50 text-green-400'
                            : project.status === 'Open Source'
                                ? 'bg-purple-500/20 border-purple-500/50 text-purple-400'
                                : project.status === 'Confidential'
                                    ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400'
                                    : 'bg-blue-500/20 border-blue-500/50 text-blue-400'
                        }
            `}>
                            {project.confidential && <Lock size={12}/>}
                            {project.status}
                        </div>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                        <div
                            className="px-3 py-1.5 bg-accent text-primary rounded-full flex items-center gap-1.5 text-xs font-bold shadow-lg">
                            <Star size={12} fill="currentColor"/>
                            Featured
                        </div>
                    )}
                </div>

                {/* Hover Overlay */}
                <div className={`
          absolute inset-0 bg-black/90 flex items-center justify-center
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}>
                    <div className="text-center px-6">
                        <ArrowRight className="mx-auto mb-3 text-accent" size={32}/>
                        <p className="text-accent font-semibold text-lg">View Full Details</p>
                        <p className="text-text-secondary text-sm mt-1">
                            Click to see challenge, solution & impact
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Organization & Date */}
                <div className="flex items-center gap-3 mb-3 text-sm text-text-secondary flex-wrap">
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
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 font-medium">
                    {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                </p>

                {/* Quick Links */}
                {(project.githubUrl || project.paperUrl || project.demoUrl) && (
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-surface">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 text-sm text-accent hover:text-accent-glow transition-colors"
                            >
                                <Github size={16}/>
                                Code
                            </a>
                        )}
                        {project.paperUrl && (
                            <a
                                href={project.paperUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 text-sm text-accent hover:text-accent-glow transition-colors"
                            >
                                <FileText size={16}/>
                                Paper
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 text-sm text-accent hover:text-accent-glow transition-colors"
                            >
                                <ExternalLink size={16}/>
                                Demo
                            </a>
                        )}
                    </div>
                )}

                {/* Tech Stack - Top 6 */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 6).map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 bg-primary-light text-accent text-xs rounded-md border border-accent/20"
                        >
              {tech}
            </span>
                    ))}
                    {project.technologies.length > 6 && (
                        <span
                            className="px-2.5 py-1 bg-primary-light text-text-secondary text-xs rounded-md border border-text-secondary/20">
              +{project.technologies.length - 6} more
            </span>
                    )}
                </div>

                {/* Impact Preview - Top 2 */}
                <div className="space-y-2 mb-4">
                    {project.impact.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"/>
                            <span className="text-sm text-text-secondary leading-relaxed">
                {item}
              </span>
                        </div>
                    ))}
                    {project.impact.length > 2 && (
                        <p className="text-sm text-accent font-medium">
                            +{project.impact.length - 2} more impacts
                        </p>
                    )}
                </div>

                {/* Confidential Notice */}
                {project.confidential && (
                    <div className="mt-4 pt-4 border-t border-surface">
                        <p className="text-xs text-text-secondary flex items-center gap-2">
                            <Lock size={12} className="text-accent"/>
                            Client project - Detailed case study available upon request
                        </p>
                    </div>
                )}

                {/* View Details Button */}
                <button
                    onClick={onClick}
                    className="
            mt-4 w-full py-3 px-4
            bg-accent/10 hover:bg-accent hover:text-primary
            text-accent font-semibold rounded-lg
            transition-all duration-300
            flex items-center justify-center gap-2
            border border-accent/30 hover:border-accent
          "
                >
                    View Full Project
                    <ArrowRight size={18}/>
                </button>
            </div>

            {/* Glow effect on hover */}
            <div className={`
        absolute inset-0 rounded-xl transition-opacity duration-300 pointer-events-none
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `} style={{
                boxShadow: '0 0 40px rgba(0, 217, 255, 0.3)',
            }}/>
        </div>
    );
}