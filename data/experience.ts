export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate?: string;
    current: boolean;
    description: string;
    highlights: string[];
    technologies: string[];
    url?: string;
    type: 'Robotics' | 'Software' | 'Engineering';
}

export const experiences: Experience[] = [
    {
        id: 'adnoc-robotics',
        title: 'Robotics Software Engineer',
        company: 'ADNOC (M&J Oil Services / KrossV)',
        location: 'Abu Dhabi, UAE',
        startDate: '2023-11',
        endDate: undefined,
        current: true,
        type: 'Robotics',
        url: 'https://www.mjoilservices.ae/projects/unmanned-autonomous-solution-to-clean-sulfur-dust',
        description: 'Leading software development for autonomous robotic systems deployed in hazardous oil & gas operations. Designing and implementing full-stack solutions from ROS-based navigation to real-time web monitoring interfaces.',
        highlights: [
            'Developed autonomous navigation system using ROS2 with SLAM for industrial robot operating in hazardous environments',
            'Built real-time WebSocket communication infrastructure for remote robot control and monitoring',
            'Designed and deployed system architecture integrating ROS with backend services (FastAPI) and hardware controllers',
            'Implemented sensor fusion algorithms for autonomous navigation and obstacle avoidance',
            'Created responsive React dashboard for real-time fleet monitoring and teleoperation',
            'Established CI/CD pipeline using Jenkins and Docker for seamless robotics system deployment',
            'Led technical aspects of multi-million dollar robotics project including electrical system integration',
            'Implemented security protocols (SSL/TLS) and extensive testing (unit, integration, performance) for mission-critical operations',
            'Coordinated cross-functional team (mechanical, electrical, software) to deliver safety-critical robotic solution',
            'Developed motor control systems and sensor integration for autonomous operations'
        ],
        technologies: [
            'ROS2',
            'Python',
            'C++',
            'FastAPI',
            'WebSockets',
            'React',
            'MongoDB',
            'Redis',
            'Docker',
            'Jenkins',
            'SLAM',
            'Sensor Fusion',
            'Motor Control',
            'Nginx',
            'MySQL'
        ],
    },
    {
        id: 'amaudit-software',
        title: 'Software Engineer',
        company: 'AM Audit',
        location: 'Dubai, UAE',
        startDate: '2022-11',
        endDate: '2023-11',
        current: false,
        type: 'Software',
        description: 'Full-stack software engineer developing scalable business automation solutions. Built complete backend systems, automated deployment pipelines, and led technical mentoring for junior developers.',
        highlights: [
            'Designed and developed scalable backend systems using Django and PostgreSQL for business automation platform',
            'Built fully automated CI/CD pipeline using GitLab CI, Docker, and Jenkins to streamline software delivery',
            'Architected and implemented RESTful APIs with optimized database operations for high-performance applications',
            'Led technical code reviews and architecture decisions for sprint deliverables',
            'Managed and mentored team of 3 junior developers to deliver project goals effectively',
            'Implemented Celery-based background task processing with Redis caching for improved performance',
            'Developed algorithmic trading system backend with real-time market data integration'
        ],
        technologies: [
            'Django',
            'Python',
            'PostgreSQL',
            'Angular',
            'Redis',
            'Celery',
            'Docker',
            'GitLab CI',
            'REST APIs',
            'Git'
        ],
    },
    {
        id: 'axis-freelance',
        title: 'Software Engineer (Freelance)',
        company: 'Axis KYC',
        location: 'Dubai, UAE',
        startDate: '2023-05',
        endDate: '2023-11',
        url: 'https://axiskyc.ae',
        current: false,
        type: 'Software',
        description: 'Freelance software engineer providing backend development and system integration services. Built automated deployment systems and integrated third-party APIs for enhanced functionality.',
        highlights: [
            'Developed backend services and API integrations for third-party applications (REST, XML-based)',
            'Built automated CI/CD pipeline for continuous deployment and maintained code libraries',
            'Implemented system integration, validation, and performance optimization across multiple services',
            'Supported code reviews and architecture decisions for scalable solutions'
        ],
        technologies: [
            'Django',
            'Python',
            'Angular',
            'Redis',
            'Celery',
            'OpenAPI',
            'REST Framework',
            'XML'
        ],
    },
    {
        id: 'thequa-mechatronics',
        title: 'Mechatronics System Engineer - R&D',
        company: 'Thequa for Medical Industries',
        location: 'Egypt',
        startDate: '2021-03',
        endDate: '2022-06',
        current: false,
        url: 'https://thequa-med.com/',
        type: 'Engineering',
        description: 'R&D engineer specializing in manufacturing automation and equipment optimization. Developed custom ERP system backend and implemented real-time monitoring solutions for medical device production.',
        highlights: [
            'Developed custom mini-ERP system backend managing manufacturing, warehouse, and accounting processes',
            'Created stakeholder interfaces and automated reporting systems for production data analysis',
            'Designed and implemented real-time manufacturing dashboards tracking KPIs and equipment downtime',
            'Authored detailed failure analysis reports and led root-cause analysis for automated equipment',
            'Investigated and resolved malfunctions in automated production line (vacutainer manufacturing)',
            'Designed and manufactured automated mechanisms improving line productivity by 25%',
            'Conducted routine maintenance and troubleshooting for production machinery ensuring minimal downtime',
            'Integrated software with PLC-controlled equipment for automated workflow management'
        ],
        technologies: [
            'Django',
            'Python',
            'PostgreSQL',
            'JavaScript',
            'HTML/CSS',
            'PLC Programming',
            'System Integration',
            'Data Analysis'
        ],
    },
];

// Helper function to get current position
export function getCurrentPosition(): Experience | undefined {
    return experiences.find(exp => exp.current);
}

// Helper function to get experiences by type
export function getExperiencesByType(type: Experience['type']): Experience[] {
    return experiences.filter(exp => exp.type === type);
}

// Helper function to calculate total experience
export function calculateTotalExperience(): string {
    const startDate = new Date('2021-03-01'); // Earliest start date
    const endDate = new Date();

    const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    return `${years}+ years`;
}