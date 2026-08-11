import { Project, InterestDomain, Achievement, FocusItem } from './types';

export const identity = {
  name: "Anurag Barmon",
  roles: [
    "App Developer",
    "Web Developer",
    "AI Explorer",
    "Cyber Security Learner",
    "Game Development Enthusiast"
  ],
  education: {
    degree: "BSc in Computer Science & Engineering (CSE)",
    institution: "Daffodil International University (DIU)",
    location: "Dhaka, Bangladesh"
  },
  location: "Dhaka, Bangladesh",
  email: "barmonanurag125@gmail.com",
  github: "https://github.com/anurag387",
  facebook: "https://www.facebook.com/share/1UuVxYpATc/",
  instagram: "https://www.instagram.com/apamoybarmon?igsh=MWhiOWQxN2JnOHl1Mw==",
  githubUsername: "anurag387",
  facebookUsername: "Anurag Barmon",
  instagramUsername: "apamoybarmon",
  closingQuote: "Consistency beats talent when talent doesn't work consistently."
};

export const aboutCopy = {
  intro: "CSE student at Daffodil International University with a strong passion for building real-world software across mobile apps, web platforms, artificial intelligence, and cyber security. I approach technology not just as a subject of study but as a craft — driven by curiosity, consistency, and a commitment to continuous improvement.",
  outro: "Currently focused on sharpening full stack development skills with React.js while deepening understanding of AI concepts and security fundamentals. The most powerful engineers are those who build, break, and learn relentlessly — that's the philosophy behind every project.",
  openTo: [
    "Internship opportunities in Software Engineering, App Development, or AI",
    "Open source collaboration on beginner to intermediate projects",
    "Hackathons and competitive programming contests",
    "Mentorship and peer learning communities in tech"
  ]
};

export const techStack = {
  languagesAndCore: ["Python", "C", "Java", "HTML", "React"],
  toolsAndWorkflow: ["Git", "GitHub", "VS Code"]
};

export const areasOfInterest: InterestDomain[] = [
  {
    domain: "App Development",
    status: "Active",
    details: "Building mobile and desktop applications"
  },
  {
    domain: "Web Development",
    status: "Learning",
    details: "HTML, React.js — growing rapidly"
  },
  {
    domain: "Artificial Intelligence",
    status: "Exploring",
    details: "ML concepts, clustering, pattern recognition"
  },
  {
    domain: "Cyber Security",
    status: "Learning",
    details: "Fundamentals, ethical hacking concepts"
  },
  {
    domain: "Game Development",
    status: "Exploring",
    details: "Concepts and prototyping"
  },
  {
    domain: "Competitive Programming",
    status: "Active",
    details: "Consistent problem-solving practice"
  }
];

export const featuredProjects: Project[] = [
  {
    id: "opengovtbd",
    title: "OpenGovtBD",
    stack: ["HTML", "Web Technologies"],
    summary: "An open-source Government–Citizen Communication Platform enabling secure feedback, public discussions, official announcements, polls, and easy access to government services.",
    detail: "Civic-tech platform focused on bridging communication between citizens and government through a transparent, accessible interface.",
    githubUrl: "https://github.com/anurag387/OpenGovtBD"
  }
];

export const achievements: Achievement[] = [
  {
    title: "SSC — GPA 5.00",
    description: "Achieved a perfect GPA of 5.00 in the Secondary School Certificate examination",
    authority: "Education Board"
  },
  {
    title: "HSC — GPA 5.00",
    description: "Achieved a perfect GPA of 5.00 in the Higher Secondary Certificate examination",
    authority: "Education Board"
  },
  {
    title: "Take Off Contest — Final Round",
    description: "Certificate for reaching the final round of the Take Off contest",
    authority: "Daffodil International University (DIU)"
  },
  {
    title: "Unlock the Algorithm — Final Round",
    description: "Certificate for reaching the final round of the Unlock the Algorithm contest",
    authority: "Daffodil International University (DIU)"
  },
  {
    title: "Science Fair Certificate",
    description: "Certificate of recognition for participation and presentation at a science fair",
    authority: "Government of Bangladesh"
  }
];

export const currentFocus: FocusItem = {
  learning: [
    "React.js — components, hooks, state management",
    "Cyber Security fundamentals and ethical hacking concepts",
    "Artificial Intelligence — supervised and unsupervised learning",
    "Data Structures & Algorithms for competitive programming"
  ],
  building: [
    "Real-world full stack web projects with React.js",
    "AI-powered mini tools and automation scripts",
    "Expanding the Government GenZ Web platform"
  ],
  exploring: [
    "Game development concepts and prototyping",
    "Open source contribution workflows",
    "Cloud computing basics (AWS/GCP fundamentals)"
  ]
};
