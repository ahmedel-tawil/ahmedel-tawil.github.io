'use client';

import {Mail, Linkedin, Github, MapPin, Phone} from 'lucide-react';
import {useState} from 'react';

const contactInfo = [
    {
        icon: Mail,
        label: 'Email',
        value: 'ahmedeltaweel55@outlook.com',
        href: 'mailto:ahmedeltaweel55@outlook.com',
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+971 55 348 6972',
        href: 'tel:+971553486972',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Abu Dhabi, UAE',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/ahmed-eltawil',
        href: 'https://linkedin.com/in/ahmed-eltawil',
    },
    {
        icon: Github,
        label: 'GitHub',
        value: 'github.com/ahmedel-tawil',
        href: 'https://github.com/ahmedel-tawil',
    },
];

export default function Contact() {
    const [copiedEmail, setCopiedEmail] = useState(false);

    const copyEmail = async () => {
        await navigator.clipboard.writeText('ahmedeltaweel55@outlook.com');
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    return (
        <section id="contact" className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Get In <span className="text-gradient">Touch</span>
                        </h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-6"/>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be
                            part of your vision. Feel free to reach out!
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {contactInfo.map((info, index) => (
                            <div
                                key={info.label}
                                className="glass p-6 rounded-lg hover:border-accent transition-all group"
                                style={{animationDelay: `${index * 50}ms`}}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                                        <info.icon className="text-accent" size={24}/>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-text-secondary mb-1">{info.label}</p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                target={info.href.startsWith('http') ? '_blank' : undefined}
                                                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="font-medium text-accent hover:text-accent-glow transition-colors break-all"
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p className="font-medium break-all">{info.value}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="glass p-8 rounded-lg text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
                        <p className="text-text-secondary mb-6">
                            Whether you need a robotics engineer, full-stack developer, or technical leader for
                            your next project, let's connect and discuss how I can help.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button
                                onClick={copyEmail}
                                className="px-8 py-3 bg-accent text-primary rounded font-semibold hover:bg-accent-glow transition-all glow-hover"
                            >
                                {copiedEmail ? 'Email Copied!' : 'Copy Email Address'}
                            </button>
                            <a
                                href="mailto:ahmedeltaweel55@outlook.com"
                                className="px-8 py-3 border border-accent text-accent rounded font-semibold hover:bg-accent hover:text-primary transition-all"
                            >
                                Send Email
                            </a>
                            <a
                                href="/resume/Ahmed_Eltawil_CV.pdf"
                                download
                                className="px-8 py-3 border border-accent text-accent rounded font-semibold hover:bg-accent hover:text-primary transition-all"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-20 text-center text-text-secondary text-sm">
                <p>© 2025 Ahmed Eltawil. Built with Next.js & Tailwind CSS.</p>
                {/*<p className="mt-2">Designed & Developed with 💙 for the robotics community</p>*/}
            </footer>
        </section>
    );
}
