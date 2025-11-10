'use client';

import {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import CertCard from './CertCard';
import {
    certifications,
    categoryConfig,
    getCertificationCountByCategory
} from '@/data/certifications';
import {Award} from 'lucide-react';

type CategoryType = 'All' | 'Robotics' | 'DevOps' | 'Architecture' | 'Backend' | 'Frontend' | 'AI/ML' | 'Management';

export default function Certifications() {
    const [activeCategory, setActiveCategory] = useState<CategoryType>('All');

    const categoryCounts = getCertificationCountByCategory();
    const totalCount = certifications.length;

    const filteredCertifications = activeCategory === 'All'
        ? certifications
        : certifications.filter(cert => cert.category === activeCategory);

    const categories: CategoryType[] = ['All', 'Robotics', 'DevOps', 'Architecture', 'Backend', 'Frontend', 'AI/ML', 'Management'];

    return (
        <section id="certifications" className="py-20 px-4 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-20"/>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Award className="text-accent" size={32}/>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Certifications & <span className="text-gradient">Learning</span>
                        </h2>
                    </div>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Continuous learning and professional development across robotics, software engineering, and
                        system architecture
                    </p>
                </motion.div>

                {/* Category Filter Tabs */}
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
                            const config = category !== 'All' ? categoryConfig[category] : null;

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
                                    {category === 'All' && <Award size={18}/>}
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

                    {/* Category Description */}
                    <AnimatePresence mode="wait">
                        {activeCategory !== 'All' && categoryConfig[activeCategory] && (
                            <motion.p
                                key={activeCategory}
                                initial={{opacity: 0, height: 0}}
                                animate={{opacity: 1, height: 'auto'}}
                                exit={{opacity: 0, height: 0}}
                                className="text-center text-text-secondary mt-4"
                            >
                                {categoryConfig[activeCategory].description}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Certifications Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.3}}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {filteredCertifications.map((cert, index) => (
                            <CertCard
                                key={cert.id}
                                certification={cert}
                                index={index}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* No Results */}
                {filteredCertifications.length === 0 && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className="text-center py-20"
                    >
                        <Award className="mx-auto mb-4 text-text-secondary" size={64}/>
                        <p className="text-text-secondary text-lg">
                            No certifications found in this category
                        </p>
                    </motion.div>
                )}

                {/* Stats Footer */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    className="mt-16 glass rounded-lg p-8"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-accent mb-2">{totalCount}</div>
                            <div className="text-sm text-text-secondary">Total Certifications</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent mb-2">
                                {certifications.filter(c => c.featured).length}
                            </div>
                            <div className="text-sm text-text-secondary">Featured</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent mb-2">
                                {Object.keys(categoryConfig).length}
                            </div>
                            <div className="text-sm text-text-secondary">Categories</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-accent mb-2">2025</div>
                            <div className="text-sm text-text-secondary">Latest: K8s</div>
                        </div>
                    </div>
                </motion.div>

                {/* View All Button */}
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    className="text-center mt-8"
                >
                    <a
                        href="https://ae.linkedin.com/in/ahmed-eltawil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-semibold rounded-lg hover:bg-accent-glow transition-colors"
                    >
                        <Award size={20}/>
                        View All on LinkedIn
                    </a>
                </motion.div>
            </div>
        </section>
    );
}