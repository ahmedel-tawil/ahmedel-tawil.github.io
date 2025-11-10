'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import {projects, projectCategories, Project} from '@/data/projects';
import {FolderKanban} from 'lucide-react';

type CategoryType = 'All' | 'Robotics' | 'Full-Stack' | 'Tools' | 'Enterprise';

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState<CategoryType>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory);

    const categories: CategoryType[] = ['All', 'Robotics', 'Full-Stack', 'Tools', 'Enterprise'];

    // Get counts by category
    const categoryCounts = projects.reduce((acc, project) => {
        acc[project.category] = (acc[project.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const totalCount = projects.length;
    const featuredCount = projects.filter((p) => p.featured).length;

    return (
        <section id="projects" className="py-20 px-4 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-10"/>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FolderKanban className="text-accent" size={32}/>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Featured <span className="text-gradient">Projects</span>
                        </h2>
                    </div>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        From autonomous robots in hazardous environments to enterprise systems
                        serving hundreds of users - building solutions that make an impact
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{delay: 0.2}}
                    className="mb-12"
                >
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => {
                            const count = category === 'All' ? totalCount : categoryCounts[category] || 0;
                            const config = category !== 'All' ? projectCategories[category] : null;

                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`
                    px-6 py-3 rounded-lg font-medium transition-all duration-300
                    flex items-center gap-2
                    ${activeCategory === category
                                        ? 'bg-accent text-primary shadow-lg scale-105'
                                        : 'glass text-text-secondary hover:text-accent hover:border-accent'
                                    }
                  `}
                                >
                                    {config && <span className="text-lg">{config.icon}</span>}
                                    {category === 'All' && <FolderKanban size={18}/>}
                                    <span>{category}</span>
                                    <span className={`
                    px-2 py-0.5 rounded-full text-xs font-bold
                    ${activeCategory === category
                                        ? 'bg-primary text-accent'
                                        : 'bg-primary-light text-accent'
                                    }
                  `}>
                    {count}
                  </span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Projects Grid - 3 COLUMNS */}
                <motion.div
                    key={activeCategory}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    transition={{duration: 0.3}}
                    className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
                >
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </motion.div>

                {/* No Results */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="text-center py-20"
                    >
                        <FolderKanban className="mx-auto mb-4 text-text-secondary" size={64}/>
                        <p className="text-text-secondary text-lg">
                            No projects found in this category
                        </p>
                    </motion.div>
                )}

                {/* Stats Footer */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="glass rounded-lg p-8"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-accent mb-2">{totalCount}</div>
                            <div className="text-sm text-text-secondary">Total Projects</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent mb-2">{featuredCount}</div>
                            <div className="text-sm text-text-secondary">Featured</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent mb-2">
                                {Object.keys(projectCategories).length}
                            </div>
                            <div className="text-sm text-text-secondary">Categories</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent mb-2">
                                {projects.filter((p) => p.status === 'Production').length}
                            </div>
                            <div className="text-sm text-text-secondary">In Production</div>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    className="text-center mt-12"
                >
                    <p className="text-text-secondary mb-4">
                        Interested in working together?
                    </p>
                    <a
                        href="#contact"
                        className="
              inline-flex items-center gap-2 px-8 py-4
              bg-accent text-primary font-semibold rounded-lg
              hover:bg-accent-glow transition-all duration-300
              shadow-lg hover:shadow-accent/50
            "
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}