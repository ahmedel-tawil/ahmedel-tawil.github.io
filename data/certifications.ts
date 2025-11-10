export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    category: 'Robotics' | 'DevOps' | 'Backend' | 'Frontend' | 'AI/ML' | 'Architecture' | 'Management';
    featured?: boolean;
    image?: string;
    credentialUrl?: string;
    skills: string[];
    description?: string;
}

export const certifications: Certification[] = [
    // ==================== ROBOTICS ====================
    {
        id: 'udacity-robotics',
        name: 'Robotic Software Engineer Nanodegree',
        issuer: 'Udacity',
        date: 'Jul 2022',
        category: 'Robotics',
        featured: true,
        image: '/images/certificates/udacity-robotics.png',
        credentialUrl: 'https://www.udacity.com/certificate/e/8fb99500-fa06-11ec-9fb2-dbfa1f3c09b1',
        skills: ['ROS', 'Gazebo', 'SLAM', 'Computer Vision', 'Path Planning', 'Localization'],
        description: 'Comprehensive robotics program covering autonomous navigation, sensor fusion, and robot learning',
    },

    // ==================== DEVOPS & INFRASTRUCTURE ====================
    {
        id: 'kubernetes-arabic',
        name: 'Kubernetes from beginner to master (Arabic)',
        issuer: 'Udemy',
        date: 'Oct 2025',
        category: 'DevOps',
        featured: true,
        image: '/images/certificates/k8s-certificate.jpg',
        credentialUrl: 'https://ude.my/UC-508a6963-e55d-481a-a263-fce9b417d499',
        skills: ['Kubernetes', 'K8s', 'Container Orchestration', 'Cloud Native', 'Deployment'],
        description: 'Master Kubernetes for container orchestration and cloud-native deployments',
    },
    {
        id: 'docker-foundations',
        name: 'Docker Foundations Professional Certificate',
        issuer: 'LinkedIn Learning',
        date: 'Completed',
        category: 'DevOps',
        featured: true,
        image: '/images/certificates/docker-cert.jpg',
        credentialUrl: 'https://www.linkedin.com/learning/certificates/39f72cd1f9352ef7dd7d9a79de659513979f594b439c6594d8c2e1b70d739330',
        skills: ['Docker', 'Containers', 'Microservices', 'Containerization'],
        description: 'Professional certification in Docker containerization and deployment',
    },
    {
        id: 'devops-professional',
        name: 'DevOps Professional Certificate',
        issuer: 'PagerDuty & LinkedIn',
        date: 'Completed',
        category: 'DevOps',
        featured: true,
        image: '/images/certificates/devops-certificate.png',
        credentialUrl: 'https://www.linkedin.com/learning/certificates/ac6abe14d60e3885740f91b67286023f0efcfc47221a28f1317abed86e6ca030',
        skills: ['CI/CD', 'Automation', 'Infrastructure', 'GitOps', 'Monitoring'],
        description: 'Comprehensive DevOps practices including CI/CD, infrastructure automation, and monitoring',
    },

    // ==================== ARCHITECTURE ====================
    {
        id: 'microservices-foundations',
        name: 'Microservices Foundations',
        issuer: 'LinkedIn Learning',
        date: 'Nov 2024',
        category: 'Architecture',
        image: '/images/certificates/microservices-foundations.jpeg',
        credentialUrl: 'https://www.linkedin.com/learning/certificates/662fe3bcfdd12545d262a0acabc5820ab0846af8fb62714fa931e28e91dcba1a',
        skills: ['Microservices', 'Distributed Systems', 'Architecture', 'API Design'],
        description: 'Foundations of microservices architecture and distributed system design',
    },
    {
        id: 'microservices-design-patterns',
        name: 'Microservices: Design Patterns',
        issuer: 'LinkedIn Learning',
        date: 'Nov 2024',
        category: 'Architecture',
        image: '/images/certificates/microservices-patterns.jpeg',
        credentialUrl: 'https://www.linkedin.com/learning/certificates/d83f05fe32f8e731d1b7494eb890304542fa78b1962c90173c04a29570b5157b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BKWtNXDKlRwGemMiwvQqBuA%3D%3D',
        skills: ['Design Patterns', 'Software Architecture', 'Microservices', 'System Design'],
        description: 'Advanced design patterns for building scalable microservices',
    },

    // ==================== BACKEND DEVELOPMENT ====================
    {
        id: 'django-essential',
        name: 'Django Essential Training',
        issuer: 'LinkedIn Learning',
        date: 'Completed',
        category: 'Backend',
        image: '/images/certificates/django-cert.jpg',
        credentialUrl: 'https://www.linkedin.com/learning/certificates/686c24fbdb2434441d94219c692e56037f1a63b39d8a628f8fd910a9a6936d22?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BKWtNXDKlRwGemMiwvQqBuA%3D%3D',
        skills: ['Django', 'Python', 'Web Development', 'Backend'],
        description: 'Complete Django framework for building web applications',
    },
    {
        id: 'django-rest-api',
        name: 'Building RESTful Web APIs with Django',
        issuer: 'LinkedIn Learning',
        date: 'Completed',
        category: 'Backend',
        image: '/images/certificates/django-rest-api.jpg',
        credentialUrl: 'https://www.linkedin.com/learning/certificates/aed8fc267ea2065c988ada6171650af5ec99d4791f42b61d9d39648641a5359d?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BKWtNXDKlRwGemMiwvQqBuA%3D%3D',
        skills: ['REST API', 'Django REST Framework', 'API Design', 'Web Services'],
        description: 'Building robust RESTful APIs with Django REST Framework',
    },
    // {
    //     id: 'python-essential',
    //     name: 'Python Essential Training',
    //     issuer: 'LinkedIn Learning',
    //     date: 'Completed',
    //     category: 'Backend',
    //     image: '/images/certificates/python-cert.jpg',
    //     credentialUrl: '', // Add when you have it
    //     skills: ['Python', 'Programming', 'Software Development'],
    //     description: 'Core Python programming fundamentals and best practices',
    // },
    // {
    //     id: 'python-oop',
    //     name: 'Python Object-Oriented Programming',
    //     issuer: 'LinkedIn Learning',
    //     date: 'Feb 2022',
    //     category: 'Backend',
    //     image: '/images/certificates/python-oop.jpg',
    //     credentialUrl: '',
    //     skills: ['Python', 'OOP', 'Design Patterns', 'Software Engineering'],
    //     description: 'Object-oriented programming principles and patterns in Python',
    // },

    // ==================== FRONTEND ====================
    {
        id: 'react-essential',
        name: 'React.js Essential Training',
        issuer: 'LinkedIn Learning',
        date: 'Oct 2022',
        category: 'Frontend',
        image: '/images/certificates/react-cert.jpg',
        credentialUrl: 'https://www.linkedin.com/learning/certificates/d5fb1cf3c7706315b1c878f696ec33363200b597ada8fdf37f70df41bb127b09?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BKWtNXDKlRwGemMiwvQqBuA%3D%3D',
        skills: ['React', 'JavaScript', 'UI Development', 'Frontend'],
        description: 'Building interactive user interfaces with React.js',
    },

    // ==================== AI/ML ====================
    {
        id: 'deep-learning-face-recognition',
        name: 'Deep Learning: Face Recognition',
        issuer: 'LinkedIn Learning',
        date: 'Feb 2022',
        category: 'AI/ML',
        image: '/images/certificates/face-recognition.jpg',
        credentialUrl: 'https://www.linkedin.com/learning/certificates/8c16e33067240ece2d888359e89a10eb6f9d6db4510b9e6fa3eb503e869d3442?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BKWtNXDKlRwGemMiwvQqBuA%3D%3D',
        skills: ['Deep Learning', 'Computer Vision', 'Face Recognition', 'Neural Networks'],
        description: 'Deep learning techniques for face detection and recognition',
    },
    {
        id: 'keras-deep-learning',
        name: 'Building Deep Learning Applications with Keras 2.0',
        issuer: 'LinkedIn Learning',
        date: 'Jan 2022',
        category: 'AI/ML',
        image: '/images/certificates/keras-cert.jpg',
        credentialUrl: 'https://www.linkedin.com/learning/certificates/551945c190dd00e5cd92c355e9206fa38b9096816ebdd01798c611f82431ffd8?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BKWtNXDKlRwGemMiwvQqBuA%3D%3D',
        skills: ['Keras', 'Deep Learning', 'TensorFlow', 'Neural Networks'],
        description: 'Building and training deep learning models with Keras',
    },
    {
        id: 'ml-python-foundations',
        name: 'Machine Learning with Python: Foundations',
        issuer: 'LinkedIn Learning',
        date: 'Dec 2021',
        category: 'AI/ML',
        image: '/images/certificates/ml-python.jpg',
        credentialUrl: 'https://www.linkedin.com/learning/certificates/b3110118fb4ccba06843c2678ed0b2042f0f83db51f8826da3140d673cb0c469?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BKWtNXDKlRwGemMiwvQqBuA%3D%3D',
        skills: ['Machine Learning', 'Python', 'Scikit-learn', 'Data Science'],
        description: 'Machine learning fundamentals and algorithms in Python',
    },

    // ==================== MANAGEMENT ====================
    {
        id: 'six-sigma-black-belt',
        name: 'Six Sigma Black Belt',
        issuer: 'LinkedIn Learning',
        date: 'Completed',
        category: 'Management',
        image: '/images/certificates/six-sigma.png',
        credentialUrl: 'https://www.linkedin.com/learning/certificates/bd0dfa40baf6ac189c70e916b789b6245ab5ec92928b5f1acf039a8e696ae4d8',
        skills: ['Six Sigma', 'Process Improvement', 'Quality Management', 'Lean'],
        description: 'Advanced process improvement and quality management methodologies',
    },
    {
        id: 'project-management-foundations',
        name: 'Foundations of Project Management',
        issuer: 'Coursera (Google)',
        date: 'Completed',
        category: 'Management',
        image: '/images/certificates/pm-foundations.png',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/certificate/6AKX3B3TQ8H6',
        skills: ['Project Management', 'Planning', 'Agile', 'Team Leadership'],
        description: 'Project management fundamentals and best practices',
    },
];

// Category configuration
export const categoryConfig = {
    Robotics: {
        color: 'from-accent to-accent-glow',
        icon: '🤖',
        description: 'Robotics software and autonomous systems',
    },
    DevOps: {
        color: 'from-blue-500 to-cyan-500',
        icon: '⚙️',
        description: 'DevOps, CI/CD, and infrastructure',
    },
    Architecture: {
        color: 'from-purple-500 to-pink-500',
        icon: '🏗️',
        description: 'Software architecture and design patterns',
    },
    Backend: {
        color: 'from-green-500 to-emerald-500',
        icon: '🔧',
        description: 'Backend development and APIs',
    },
    Frontend: {
        color: 'from-orange-500 to-red-500',
        icon: '🎨',
        description: 'Frontend development and UI',
    },
    'AI/ML': {
        color: 'from-yellow-500 to-amber-500',
        icon: '🧠',
        description: 'Artificial Intelligence and Machine Learning',
    },
    Management: {
        color: 'from-indigo-500 to-blue-500',
        icon: '📊',
        description: 'Project management and process improvement',
    },
};

// Helper function to get certifications by category
export function getCertificationsByCategory(category?: string) {
    if (!category || category === 'All') {
        return certifications;
    }
    return certifications.filter((cert) => cert.category === category);
}

// Helper function to get featured certifications
export function getFeaturedCertifications() {
    return certifications.filter((cert) => cert.featured);
}

// Helper function to get certification count by category
export function getCertificationCountByCategory() {
    return certifications.reduce((acc, cert) => {
        acc[cert.category] = (acc[cert.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);
}