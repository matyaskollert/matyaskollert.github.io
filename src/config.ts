export const siteConfig = {
  name: 'Matyas Kollert',
  title: '(Embedded) Software Engineer / Cybersecurity Enthusiast',
  description: 'Portfolio website of Matyas Kollert',
  accentColor: '#d81d1dff',
  social: {
    email: 'matyaskollert@gmail.com',
    linkedin: 'https://www.linkedin.com/in/matyas-kollert-930163219/',
    github: 'https://github.com/matyaskollert',
  },
  aboutMe:
    'Hi! I am Matyas Kollert, a passionate software engineer with nearly a decade of programming experience. I am pursuing a Master\'s degree in Computer Science at TU Delft. My interests include systems, security, and backend development. I enjoy building efficient, scalable solutions and keeping up with new technology. I am skilled in JavaScript/TypeScript, Java, C/C++, Rust, and Python. I thrive on problem-solving and always seek opportunities to learn and grow.',
  skills: [
    'JavaScript/TypeScript',
    'NestJS (Node.js with Express)',
    'Python',
    'C/C++',
    'Rust',
    'Java',
    'SQL',
    'Docker',
    'Linux',
  ],
  projects: [
    {
      name: 'Drone Control Software',
      description:
        'Modular system for controlling and monitoring drones. Features real-time communication, sensor data processing, PID control, and visualization tools. Includes Rust-based embedded/server components and Python utilities for data analysis.',
      link: '',
      skills: ['Rust', 'Python', 'PID Control', 'Sensor Fusion', 'Kalman Filtering'],
    },
    {
      name: '3D Survival Game',
      description:
        'Singleplayer survival game inspired by Rust, built with Unity3D and C#. Gather materials, build a house, and fight wolves and bears in an open world.',
      link: 'https://drive.google.com/drive/folders/17xjXSTvDyedZ-9fJSl9TrqAADBcgSRdR?usp=sharing',
      skills: ['C#', 'Unity', 'Blender'],
    },
    {
      name: 'Real-Time 3D Renderer with PBR Pipeline',
      description:
        'Real-time 3D renderer with a full PBR pipeline, HDR bloom, advanced particle systems, and procedural terrain. Features dynamic chunk loading, realistic water with normal mapping, reflections, shadow mapping, and an interactive camera. Built with OpenGL and C++.',
      link: 'https://drive.google.com/drive/folders/1TwbLIqY6yFDJL6Mr3xqWovwjNgjtGqNh?usp=sharing',
      skills: ['OpenGL', 'C++', 'GLSL', 'ImGui'],
    },
    {
      name: 'Chess Game with Basic AI',
      description:
        'Chess game built with SDL2 and C++. Play against yourself or a basic AI. Features a simple GUI and focuses on low-level programming skills.',
      link: '',
      skills: ['C++', 'SDL2'],
    },
  ],
  experience: [
    {
      company: 'European Space Agency (ESA)',
      title: 'Security Research Intern',
      dateRange: 'November 2025 – July 2026',
      bullets: [
        'MSc thesis project.',
        'Analyzed the security of bootloaders in space systems.',
      ],
    },
    {
      company: 'Coalsoft',
      title: 'Back End Developer',
      dateRange: 'June 2021 – Present',
      bullets: [
        'Designed, developed, deployed, and maintained complex backend systems.',
        'Developed for SAP SuccessFactors and SAP BTP.',
      ],
    },
    {
      company: 'Freelance',
      title: 'Software Engineer',
      dateRange: 'November 2022 – Present',
      bullets: [
        'Designed, developed, deployed, and maintained complex backend systems.',
      ],
    },
  ],
  education: [
    {
      school: 'Delft University of Technology',
      degree: 'MSc Computer Science',
      dateRange: 'September 2024 – July 2026',
      achievements: [
        'Graduated Cum Laude',
      ],
    },
    {
      school: 'Delft University of Technology',
      degree: 'BSc Computer Science and Engineering',
      dateRange: 'September 2020 – July 2024',
      achievements: [],
    },
  ],
};
