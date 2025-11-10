export interface Project {
    id: string;
    title: string;
    subtitle: string;
    category: 'Robotics' | 'Full-Stack' | 'Tools' | 'Enterprise';
    featured: boolean;
    status: 'Production' | 'Deployed' | 'Open Source' | 'Confidential';
    organization?: string;
    date: string;
    description: string;
    challenge: string;
    solution: string;
    impact: string[];
    technologies: string[];
    highlights: string[];
    images?: string[];
    demoUrl?: string;
    githubUrl?: string;
    paperUrl?: string;
    confidential?: boolean;
}

export const projects: Project[] = [
    // ==================== ROBOTICS PROJECTS ====================
    {
        id: 'sulfabot',
        title: 'Sulfabot',
        subtitle: 'Autonomous Robot for Hazardous Sulfur Dust Cleaning',
        category: 'Robotics',
        featured: true,
        status: 'Production',
        organization: 'ADNOC Sour Gas / M&J Oil Services',
        date: '2023 - Present',
        description: 'Breakthrough autonomous robotic system deployed at ADNOC Shah Gas Sulfur Station to clean sulfur dust and granules in hazardous environments, replacing 40 manual cleaners per shift.',
        challenge: 'ADNOC Sour Gas faced critical sulfur dust management challenges requiring 40 workers per shift (3 hours daily) to manually clean hazardous sulfur dust and granules around granulator areas. The work environment presented extreme risks: 160-190°C temperatures, explosive sulfur dust conditions, and toxic exposure.',
        solution: 'Led software development for UAE-made autonomous cleaning robot with explosion-proof certification (IECEx/ATEX). Designed complete system architecture integrating ROS2-based navigation, real-time WebSocket communication, and safety-critical control systems. Implemented sensor fusion for autonomous operation in 60°C+ environments.',
        impact: [
            'Eliminated human exposure to life-threatening  sulfur dust',
            'Achieved IECEx/ATEX explosion-proof certification for hazardous zones',
            'Enabled 24/7 autonomous cleaning operations',
            'Presented at ADIPEC 2024 (Abu Dhabi International Petroleum Exhibition)',
            'Operational at ADNOC Shah Gas Development Field'
        ],
        technologies: [
            'ROS2',
            'Python',
            'C++',
            'FastAPI',
            'WebSockets',
            'SLAM',
            'Sensor Fusion',
            'React',
            'MongoDB',
            'Redis',
            'Docker',
            'Safety-Critical Systems'
        ],
        highlights: [
            'Full-stack robotics: ROS navigation to web monitoring',
            'Real-time remote control via WebSocket infrastructure',
            'Safety-critical deployment in oil & gas operations',
            'Cross-functional project management (mechanical, electrical, software)',
            'Published research paper at ADIPEC 2024'
        ],
        images: ['/images/projects/sulfabot.png', '/images/projects/sulfabot-2.jpg'],
        paperUrl: 'https://www.mjoilservices.ae/projects/unmanned-autonomous-solution-to-clean-sulfur-dust',
        confidential: false,
    },

    // ==================== FULL-STACK PROJECTS ====================
    {
        id: 'crm-training-institute',
        title: 'Enterprise CRM System',
        subtitle: 'Complete CRM for Educational Training Institute',
        category: 'Full-Stack',
        featured: true,
        status: 'Production',
        organization: 'Confidential Client',
        date: '2023',
        description: 'Full-featured customer relationship management system managing complete student lifecycle for training institute with 500+ active students and 20+ instructors.',
        challenge: 'Training institute struggled with manual management of student inquiries, enrollments, course scheduling, instructor assignments, payments, and reporting. No centralized system resulted in data inconsistencies, missed follow-ups, and administrative overhead.',
        solution: 'Architected and developed comprehensive CRM system from requirements gathering to production deployment. Built scalable backend with Django REST Framework, PostgreSQL database with optimized schema, Redis caching layer, and Celery for background task processing. Implemented role-based access control, automated workflows, and real-time reporting dashboards.',
        impact: [
            '500+ students managed through complete enrollment lifecycle',
            '70% reduction in administrative overhead',
            'Real-time financial reporting and analytics',
            'Automated email campaigns and follow-up workflows',
            'Mobile-responsive interface for on-the-go access'
        ],
        technologies: [
            'Django',
            'Django REST Framework',
            'PostgreSQL',
            'Redis',
            'Celery',
            'React',
            'Docker',
            'JWT Authentication',
            'Python'
        ],
        highlights: [
            'Complete system architecture design',
            'Student lifecycle management (inquiry → graduation)',
            'Financial management with invoicing and payment tracking',
            'Role-based dashboards (admin, instructor, student, parent)',
            'Automated reporting and analytics',
            'Email automation and notification system',
            'Led full development lifecycle as solo developer'
        ],
        confidential: true,
    },

    {
        id: 'algorithmic-trading',
        title: 'Algorithmic Trading System',
        subtitle: 'Backend Infrastructure for Automated Stock Trading',
        category: 'Full-Stack',
        featured: false,
        status: 'Deployed',
        organization: 'AM Audit',
        date: '2022',
        description: 'Backend system for stock market investment platform with algorithmic trading strategies, real-time market data integration, and automated trade execution.',
        challenge: 'Required high-performance backend capable of real-time market data processing, backtesting multiple trading strategies simultaneously, and executing trades with minimal latency. System needed to handle concurrent users while maintaining data integrity.',
        solution: 'Built scalable backend architecture using Django with PostgreSQL for data persistence and Redis for real-time caching. Implemented Celery-based background workers for backtesting and strategy evaluation. Integrated third-party APIs for market data and autonomous trade execution.',
        impact: [
            'Real-time processing of market data streams',
            'Automated backtesting of trading strategies',
            'Sub-second trade execution latency',
            'Concurrent multi-user support',
            'Historical data analysis with optimized queries'
        ],
        technologies: [
            'Django',
            'PostgreSQL',
            'Redis',
            'Celery',
            'Python',
            'REST APIs',
            'WebSockets',
            'Docker'
        ],
        highlights: [
            'High-performance backend for financial data',
            'Real-time market data integration',
            'Automated trading strategy execution',
            'Background job processing for complex calculations',
            'API integrations for market data providers'
        ],
        confidential: false,
    },

    // ==================== TOOLS & OPEN SOURCE ====================
    {
        id: 'mcp-server',
        title: 'MCP File System Server',
        subtitle: 'AI-Powered Development Assistant for Robotics',
        category: 'Tools',
        featured: true,
        status: 'Open Source',
        date: '2024',
        description: 'Production-ready Model Context Protocol (MCP) server enabling AI assistants to directly access and process robotics documentation, technical manuals, and project files.',
        challenge: 'Robotics engineers constantly context-switch between code, ROS documentation, datasheets, and project files. Manual doc lookup kills productivity and interrupts deep work.',
        solution: 'Built comprehensive MCP server following SOLID principles with modular architecture. Implemented file operations (read, write, create, search), PDF processing for technical manuals, and secure path validation. Enables AI assistants to seamlessly access project documentation without context switching.',
        impact: [
            '70% reduction in documentation lookup time',
            'Faster problem-solving during debugging sessions',
            'Better knowledge management for robotics teams',
            'Open-source contribution to MCP ecosystem'
        ],
        technologies: [
            'Python',
            'MCP SDK',
            'PyPDF2',
            'FastAPI',
            'Object-Oriented Design',
            'SOLID Principles'
        ],
        highlights: [
            'Professional software architecture (SOLID principles)',
            'Comprehensive file system operations',
            'PDF processing for technical documentation',
            'Custom exception handling hierarchy',
            'Security validation through path checking',
            'Modular, testable codebase',
            'Open-source project'
        ],
        githubUrl: 'https://github.com/ahmedel-tawil/mcp-file-server',
        confidential: false,
    },

    // ==================== ENTERPRISE SYSTEMS ====================
    {
        id: 'erp-manufacturing',
        title: 'Manufacturing ERP System',
        subtitle: 'Custom ERP for Medical Device Production',
        category: 'Enterprise',
        featured: false,
        status: 'Production',
        organization: 'Thequa Medical Industries',
        date: '2021 - 2022',
        description: 'Custom mini-ERP system managing end-to-end manufacturing operations for medical device production facility including warehouse, accounting, quality control, and real-time production monitoring.',
        challenge: 'Medical device manufacturer relied on disconnected systems and manual processes for managing manufacturing workflows, inventory tracking, quality control, and financial accounting. No real-time visibility into production status or equipment performance.',
        solution: 'Designed and developed integrated ERP system with Django backend and PostgreSQL database. Created custom interfaces for different stakeholders (production, warehouse, QC, management). Implemented real-time dashboards tracking production KPIs, equipment downtime, and defect rates. Integrated with PLC-controlled equipment for automated workflow management.',
        impact: [
            'Unified manufacturing, warehouse, and accounting processes',
            'Real-time production monitoring and KPI tracking',
            'Automated failure analysis and root-cause reporting',
            '25% improvement in line productivity through automated mechanisms',
            'Reduced equipment downtime through predictive insights',
            'Comprehensive audit trail for medical device compliance'
        ],
        technologies: [
            'Django',
            'PostgreSQL',
            'JavaScript',
            'HTML/CSS',
            'PLC Integration',
            'Real-time Dashboards',
            'Data Analysis',
            'Python'
        ],
        highlights: [
            'End-to-end ERP system architecture',
            'Multi-stakeholder custom interfaces',
            'Real-time production monitoring dashboards',
            'PLC equipment integration for automation',
            'Failure analysis and root-cause tracking',
            'Quality control workflow management',
            'Financial accounting integration',
            'Deployed with comprehensive staff training'
        ],
        confidential: false,
    },
];

// Category configuration
export const projectCategories = {
    Robotics: {
        color: 'from-accent to-accent-glow',
        icon: '🤖',
        description: 'Autonomous systems and robotics software',
    },
    'Full-Stack': {
        color: 'from-green-500 to-emerald-500',
        icon: '💻',
        description: 'Complete web applications and platforms',
    },
    Tools: {
        color: 'from-purple-500 to-pink-500',
        icon: '🛠️',
        description: 'Development tools and utilities',
    },
    Enterprise: {
        color: 'from-blue-500 to-cyan-500',
        icon: '🏢',
        description: 'Enterprise systems and infrastructure',
    },
};

// Helper functions
export function getFeaturedProjects(): Project[] {
    return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category?: string): Project[] {
    if (!category || category === 'All') {
        return projects;
    }
    return projects.filter((project) => project.category === category);
}

export function getProjectById(id: string): Project | undefined {
    return projects.find((project) => project.id === id);
}