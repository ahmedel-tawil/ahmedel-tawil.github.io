export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  subSkills?: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Robotics & Automation',
    skills: [
      {
        name: 'ROS/ROS2',
        level: 95,
        subSkills: ['Navigation', 'SLAM', 'TF', 'Messages', 'Services', 'Actions'],
      },
      {
        name: 'Autonomous Systems',
        level: 90,
        subSkills: ['Path Planning', 'Obstacle Avoidance', 'Localization'],
      },
      {
        name: 'Sensor Fusion',
        level: 85,
        subSkills: ['LiDAR', 'IMU', 'Camera', 'Kalman Filters'],
      },
      {
        name: 'Embedded Systems',
        level: 80,
        subSkills: ['NVIDIA Jetson', 'Raspberry Pi', 'Arduino', 'ESP32'],
      },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      {
        name: 'Python',
        level: 95,
        subSkills: ['Django', 'FastAPI', 'Flask', 'AsyncIO'],
      },
      {
        name: 'Node.js',
        level: 85,
        subSkills: ['Express', 'WebSockets', 'Socket.IO'],
      },
      {
        name: 'REST APIs',
        level: 90,
        subSkills: ['OpenAPI', 'GraphQL', 'API Design'],
      },
      {
        name: 'Real-time Systems',
        level: 90,
        subSkills: ['WebSockets', 'Server-Sent Events', 'Message Queues'],
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'PostgreSQL',
        level: 90,
        subSkills: ['Query Optimization', 'Indexing', 'Replication'],
      },
      {
        name: 'MongoDB',
        level: 85,
        subSkills: ['Aggregation', 'Indexing', 'Schema Design'],
      },
      {
        name: 'Redis',
        level: 85,
        subSkills: ['Caching', 'Pub/Sub', 'Session Management'],
      },
      {
        name: 'MySQL',
        level: 80,
      },
    ],
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      {
        name: 'Docker',
        level: 90,
        subSkills: ['Containerization', 'Docker Compose', 'Multi-stage Builds'],
      },
      {
        name: 'Kubernetes',
        level: 75,
        subSkills: ['Deployments', 'Services', 'ConfigMaps', 'Secrets'],
      },
      {
        name: 'CI/CD',
        level: 85,
        subSkills: ['Jenkins', 'GitLab CI', 'GitHub Actions'],
      },
      {
        name: 'Linux',
        level: 90,
        subSkills: ['Shell Scripting', 'System Administration', 'RedHat'],
      },
    ],
  },
  {
    name: 'Control Systems & Electrical',
    skills: [
      {
        name: 'Control Theory',
        level: 85,
        subSkills: ['PID', 'State Space', 'Model Predictive Control'],
      },
      {
        name: 'Motor Control',
        level: 80,
        subSkills: ['Servo Motors', 'Stepper Motors', 'DC Motors'],
      },
      {
        name: 'PLC Programming',
        level: 75,
        subSkills: ['Ladder Logic', 'Industrial Automation'],
      },
      {
        name: 'Circuit Design',
        level: 70,
        subSkills: ['PCB Basics', 'Sensor Integration', 'Power Systems'],
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 95,
      },
      {
        name: 'C++',
        level: 85,
      },
      {
        name: 'JavaScript/TypeScript',
        level: 80,
      },
      {
        name: 'SQL',
        level: 85,
      },
    ],
  },
  {
    name: 'Project Management',
    skills: [
      {
        name: 'Team Coordination',
        level: 80,
        subSkills: ['Cross-functional Teams', 'Stakeholder Management'],
      },
      {
        name: 'Project Planning',
        level: 75,
        subSkills: ['Timeline Management', 'Resource Allocation'],
      },
      {
        name: 'Technical Leadership',
        level: 80,
        subSkills: ['Code Reviews', 'Mentoring', 'Architecture Decisions'],
      },
    ],
  },
];
