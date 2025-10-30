export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  phone: string;
  email: string;
  avatar: string;
  social: {
    linkedin: string;
  github: string;
    leetcode?: string;
    linktree?: string;
  };
  skills: string[];
  expertise: string[];
}

export const profile: Profile = {
  name: "Ahmed Sayed",
title: "Senior Backend Engineer | Acting Team Lead | Government Integrations Expert",
  bio: "Senior Backend Engineer with 6+ years of experience in software development, including over 2 years in technical leadership roles within national-scale government digital transformation projects. At Integral Solutions, I lead backend architecture and technical execution for mission-critical platforms, serving as the acting technical lead across cross-functional teams. My work spans backend systems design, infrastructure strategy, API integration, and stakeholder collaboration with government and financial institutions.",
  location: "Muscat, Oman",
  phone: "+968 9234 3839",
  email: "asayedio@hotmail.com",
  avatar: "/avatar.jpg",
  social: {
    linkedin: "https://www.linkedin.com/in/asayedio/",
    github: "https://github.com/asayedio",
    linktree: "https://linktr.ee/asayedio",
  },
  skills: [
    "C#",
    "ASP.NET Core",
    ".NET Core",
    "SQL Server",
    "Entity Framework",
    "API Development",
    "Microservices",
    "RabbitMQ",
    "Redis",
    "Docker",
    "Kubernetes",
    "Clean Architecture",
    "DDD",
    "Digital Governance",
    "xUnit.net",
    "Agile Development",
  ],
  expertise: [
  "Backend Architecture & System Design",
    "Team Leadership & Mentorship",
    "Cross-Functional Collaboration",
    "Government & Bank API Integration",
    "Microservices Architecture",
 "UAT & Production Environment Management",
    "Requirement Analysis & Solution Design",
    "DevOps & CI/CD",
  ],
};
