'use client';

import {useState} from 'react';
import Image from 'next/image';
import {Certification, categoryConfig} from '@/data/certifications';
import {Award, ExternalLink, Star} from 'lucide-react';

interface CertCardProps {
    certification: Certification;
    index: number;
}

export default function CertCard({certification, index}: CertCardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [imageError, setImageError] = useState(false);

    const categoryColor = categoryConfig[certification.category]?.color || 'from-accent to-accent-glow';

    return (
        <div
            className="glass rounded-lg overflow-hidden group cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 relative"
            style={{animationDelay: `${index * 50}ms`}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Featured Badge */}
            {certification.featured && (
                <div
                    className="absolute top-3 right-3 z-20 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Star size={12} fill="currentColor"/>
                    Featured
                </div>
            )}

            {/* Certificate Image or Icon */}
            <div className="relative h-48 bg-surface flex items-center justify-center overflow-hidden">
                {certification.image && !imageError ? (
                    // Show actual certificate image if available
                    <>
                        <Image
                            src={certification.image}
                            alt={certification.name}
                            fill
                            className="object-cover"
                            onError={() => setImageError(true)}
                        />
                        {/* Overlay gradient for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                    </>
                ) : (
                    // Fallback to Award icon with category gradient
                    <div
                        className={`relative w-full h-full flex items-center justify-center bg-gradient-to-br ${categoryColor} opacity-20`}>
                        <Award
                            size={64}
                            className={`text-accent transition-all duration-300 relative z-10 ${
                                isHovered ? 'scale-110 rotate-12' : ''
                            }`}
                        />
                    </div>
                )}

                {/* Category Badge on Image */}
                <div className="absolute top-3 left-3 z-10">
                    <div
                        className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md bg-black/50 border border-accent/30 flex items-center gap-1`}>
                        <span>{categoryConfig[certification.category]?.icon}</span>
                        <span className="text-accent">{certification.category}</span>
                    </div>
                </div>

                {/* Hover overlay with credential link */}
                {certification.credentialUrl && (
                    <div
                        className={`absolute inset-0 bg-black/90 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <p className="text-sm text-text-secondary px-4 text-center line-clamp-2">
                            {certification.description}
                        </p>
                        <a
                            href={certification.credentialUrl.startsWith('http')
                                ? certification.credentialUrl
                                : `https://${certification.credentialUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-accent text-primary rounded font-semibold hover:bg-accent-glow transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ExternalLink size={18}/>
                            View Credential
                        </a>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                    {certification.name}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                    <p className="text-sm text-text-secondary">
                        {certification.issuer}
                    </p>
                    <span className="text-text-secondary">•</span>
                    <p className="text-sm text-accent font-medium">
                        {certification.date}
                    </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                    {certification.skills.slice(0, 3).map((skill) => (
                        <span
                            key={skill}
                            className="text-xs px-2.5 py-1 bg-primary-light text-accent rounded-md border border-accent/20"
                        >
              {skill}
            </span>
                    ))}
                    {certification.skills.length > 3 && (
                        <span
                            className="text-xs px-2.5 py-1 bg-primary-light text-text-secondary rounded-md border border-text-secondary/20">
              +{certification.skills.length - 3} more
            </span>
                    )}
                </div>
            </div>

            {/* Glow effect on hover */}
            <div className={`absolute inset-0 rounded-lg transition-opacity duration-300 pointer-events-none ${
                isHovered ? 'opacity-100' : 'opacity-0'
            }`} style={{
                boxShadow: '0 0 30px rgba(0, 217, 255, 0.3)',
            }}/>
        </div>
    );
}