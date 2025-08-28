// types
export interface PersonalInfo {
  name: string;
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
  location: string;
}

export interface Education {
  institute: string;
  degree: string;
  gpa: string;
  years: string;
}

export interface Certificate {
  title: string;
  description: string;
  link: string;
  certificateImage: string;
}

export interface Project {
  title: string;
  description: string;
  liveLink: string;
  repoLink: string;
  screenshot: string;
}

export interface Skills {
  languages: string;
  frameworks: string;
  databases: string;
  coursework: string;
}

// data
export const personalInfo: PersonalInfo = {
  name: "Mohammad Afasar",
  github: "https://github.com/mdafsar221b",
  linkedin:
    "https://www.linkedin.com/in/md-afsar-b13782270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  twitter: "https://x.com/Psychopath_1_",
  email: "afsarsayyyed@gmail.com",
  location: "Gorakhpur, India",
};

export const education: Education = {
  institute: "Kailash Institute of Management",
  degree: "Bachelor of Computer Application (BCA)",
  gpa: "8.2 SGPA",
  years: "2023-Present",
};

export const experiences: string[] = [];

export const certificates: Certificate[] = [
  {
    title: "Electronic Arts Software Engineering virtual experience program",
    description:
      "Proposed a new feature for the EA Sports College Football and wrote a Feature Proposal. Built a class diagram and created a header file in C++. Patched a bugfix and optimized the codebase by implementing an improved data structure.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_ooCGSCCvWf8KNDZFz_1736870389719_completion_certificate.pdf",
    certificateImage: "screenshots/logos/Electronic_Arts-Logo.wine.svg",
  },
  {
    title: "Microsoft Build Your Generative Al Productivity Skills",
    description:
      "Developed skills in Artificial Intelligence for Business, Al for Design, and Productivity Improvement, applying generative Al to streamline workflows and optimize outcomes.",
    link: "https://www.linkedin.com/learning/certificates/152f90df8601b9b42af8c463fdd568607dca3048a206cdd47f89a6e76a4ed16f",
    certificateImage: "screenshots/logos/Microsoft_Store-Logo.wine.svg",
  },
  {
    title: "IBM Web Development Fundamentals",
    description:
      "Acquired expertise in HTML, CSS, and JavaScript, along with essential front-end skills like responsive design, cross-browser compatibility, and version control systems (Git).",
    link: "https://www.credly.com/badges/2d8fb162-e09f-418c-82d0-f341018e8d62/linked_in_profile",
    certificateImage: "/screenshots/logos/ibm-logo-svgrepo-com.svg",
  },
];

export const projects: Project[] = [
  {
    title: "Gradpath",
    description:
      "Developed a student resource website providing notes, past year questions (PYQs), and lecture materials. Integrated an AI-powered chatbot and implemented a visually appealing user interface using Tailwind CSS.",
    liveLink: "https://grad-path.vercel.app/",
    repoLink: "https://github.com/mdafsar221b/GradPath",
    screenshot: "/screenshots/GradPath.png",
  },
  {
    title: "Amazon Clone",
    description:
      "Developed a fully functional e-commerce website using HTML, CSS, and Vanilla JavaScript, simulating core features of an online marketplace. Utilized Jasmine testing framework to write unit and integration tests.",
    liveLink: "https://mdafsar221b.github.io/javascript-amazon-project/",
    repoLink: "https://github.com/mdafsar221b/javascript-amazon-project",
    screenshot: "/screenshots/Amazon.png",
  },
  {
    title: "Nike Landing Page",
    description:
      "Created a responsive landing page for Nike using HTML and CSS, ensuring optimal viewing across devices. Implemented modern design principles to enhance user experience and engagement.",
    liveLink: "https://tailwind-project-smoky.vercel.app/",
    repoLink: "https://github.com/mdafsar221b/Tailwind-Project",
    screenshot: "/screenshots/Nike.png",
  },
];

export const skills: Skills = {
  languages: "Python, C, C++, Java, HTML5, CSS, JavaScript",
  frameworks: "Tailwind CSS, React.js",
  databases: "MongoDB, MySQL",
  coursework:
    "Data Structure, Algorithms, Object-oriented Programming, Operating System, DBMS",
};
