
export const SITE = {
  name: 'David Chen',
  role: 'Electrical Engineering Major at Georgia Tech',
  intro:
    'I focus on robot learning and safe motion planning. Recent work spans imitation learning (BC/DAgger/AIRL), ROS+MoveIt pipelines, and stability-aware controllers for manipulation and autonomous driving. I enjoy bridging rigorous math with practical robotics systems.',
  email: 'mailto:xchen3019@gatech.edu',
  links: {
    github: 'https://github.com/david-hp-0726',
    linkedin: 'https://www.linkedin.com/in/david-chen-69a226284/',
    cv: '/cv/David_Chen_CV.pdf',
  },
  headshot: '/images/headshot.jpg',
  about: [
    'B.S. Math & CS at Emory University (2022-2025, 4.0 GPA); B.S. EE at Georgia Tech (2026–2027).',
    'Research interests: robotics, imitation learning, deep reinforcement learning',
    'Skills: Python, C++, Linux, PyTorch, MuJoCo, ROS, MoveIt',
    'Looking for: research opportunities in robot learning'
  ],
  selectedWork: [
    {
      title: 'Safe RL for Motion Planning of Autonomous Vehicles',
      year: '2025',
      summary: 'Reproduction with ROS; stability checks via barrier-like constraints; scenario evaluation scripts.',
      link: '#'
    },
    {
      title: 'AIRL for BipedalWalker',
      year: '2025',
      summary: 'Learned a transferable reward; includes reproducible code and normalized expert data.',
      link: '#'
    },
    {
      title: 'MoveIt Expert Trajectory Suite',
      year: '2025',
      summary: '5k+ collision-free demos with resampling & scaling utilities for imitation learning.',
      link: '#'
    }
  ]
} as const
