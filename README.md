# Ahmed Eltawil - Portfolio Website

A modern, interactive portfolio website showcasing my expertise in robotics engineering, ROS/ROS2 development, and full-stack software engineering.

## 🚀 Live Site

Visit: [ahmed-eltawil.github.io](https://ahmed-eltawil.github.io)

## ✨ Features

- **Modern Design**: Dark theme with accent colors inspired by robotics and technology
- **Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **Interactive Animations**: Smooth transitions and engaging user interactions
- **Project Showcase**: Detailed project cards with modal views
- **Skills Visualization**: Animated progress bars with expandable sub-skills
- **Experience Timeline**: Interactive career timeline with expandable details
- **Certifications**: Visual grid showcasing professional development
- **Automated Deployment**: CI/CD pipeline with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & CSS Animations
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
portfolio-site/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── Hero/             # Hero section
│   ├── About/            # About section
│   ├── Projects/         # Projects showcase
│   ├── Skills/           # Skills visualization
│   ├── Experience/       # Timeline
│   ├── Certifications/   # Certs grid
│   └── Contact/          # Contact section
├── data/                  # Data files
│   ├── projects.ts       # Project data
│   ├── skills.ts         # Skills data
│   ├── experience.ts     # Experience data
│   └── certifications.ts # Certifications data
├── public/               # Static assets
│   ├── images/          # Images
│   └── resume/          # CV PDF
└── .github/workflows/    # CI/CD
    └── deploy.yml       # Deployment workflow
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ahmed-eltawil/ahmed-eltawil.github.io.git
cd ahmed-eltawil.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Updating Content

### Adding a New Project

Edit `data/projects.ts` and add a new project object:

```typescript
{
  id: 'project-id',
  title: 'Project Title',
  category: 'robotics' | 'fullstack' | 'tool',
  shortDescription: 'Brief description',
  fullDescription: 'Detailed description',
  highlights: ['Achievement 1', 'Achievement 2'],
  technologies: ['Tech1', 'Tech2'],
  image: '/images/projects/project.jpg',
  github: 'https://github.com/...',
  featured: true,
}
```

### Updating Skills

Edit `data/skills.ts` to modify skill categories and levels.

### Adding Experience

Edit `data/experience.ts` to add or update work experience.

### Adding Certifications

Edit `data/certifications.ts` and add certificate images to `public/images/certificates/`.

## 🎨 Customization

### Colors

Modify the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0A192F',      // Dark navy
  accent: '#00D9FF',       // Cyan blue
  secondary: '#FF6B35',    // Orange
  // ... etc
}
```

### Animations

Custom animations are defined in `tailwind.config.ts` under `keyframes` and `animation`.

## 🚀 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Manual Deployment

```bash
npm run build
npm run export
```

The static site will be generated in the `out` directory.

## 📧 Contact

- **Email**: ahmedeltaweel55@outlook.com
- **LinkedIn**: [linkedin.com/in/ahmed-eltawil](https://linkedin.com/in/ahmed-eltawil)
- **Location**: Abu Dhabi, UAE

## 📄 License

© 2025 Ahmed Eltawil. All rights reserved.

---

**Built with** ❤️ **for the robotics community**
