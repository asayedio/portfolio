export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Integral Solutions",
  position: "Senior Backend Engineer / Acting Team Lead",
    location: "Muscat, Oman",
    startDate: "May 2023",
    endDate: "Present",
    current: true,
    description: "Spearheading backend development and technical operations for a government-scale digital services platform. I own the entire backend lifecycle from technical analysis and planning to development, integration, deployment, and ongoing support.",
    achievements: [
      "Lead backend architecture and technical execution for mission-critical government platforms",
      "Manage coordination with external stakeholders including ministries, banks, and government agencies for secure API integrations",
    "Provide technical guidance to junior and mid-level engineers and align with frontend teams",
      "Collaborate with QA, infrastructure, and networking teams to ensure project quality and performance",
      "Support CDO in designing scalable architectures and setting infrastructure strategies",
  "Maintain responsibility for production and staging environments",
    ],
    technologies: [
      "ASP.NET Core",
      ".NET Core",
      "Microservices",
    "DDD",
      "Clean Architecture",
   "RabbitMQ",
 "Redis",
      "SQL Server",
  "Docker",
      "Kubernetes",
    ],
  },
  {
    company: "WebCreek",
    position: "Senior Software Engineer",
    location: "Texas, United States (Remote)",
    startDate: "October 2022",
    endDate: "May 2023",
    current: false,
    description: "Worked in the development and implementation of a cutting-edge cloud-based Dealership Management System (DMS). This innovative SAAS platform revolutionizes how dealerships operate in the heavy equipment industries.",
    achievements: [
      "Designed and implemented a scalable multitenant SAAS platform (Softbase 4.0) for dealership management",
      "Created robust multitenant architecture for heavy equipment industries (forklifts, trailers, heavy trucks)",
      "Enabled real-time control over inventory and invoicing for dealerships",
      "Collaborated with developers, designers, and product managers to ensure exceptional performance and UX",
   "Delivered high-quality code with meticulous attention to detail and problem-solving skills",
    ],
    technologies: [
 ".NET Core 6.0",
      "Entity Framework 6.0",
      "ASP.NET Zero",
      "Angular 12.0",
      "SQL Server",
      "Redis",
      "Azure",
      "Multi-tenancy",
],
  },
  {
    company: "AmCham Egypt",
    position: "Software Developer",
    location: "Dokki, Giza, Egypt",
    startDate: "January 2021",
    endDate: "October 2022",
    current: false,
    description: "Pioneered digital transformation initiatives and developed enterprise-level solutions for the American Chamber of Commerce in Egypt.",
    achievements: [
 "Developed a paperless employment fair system achieving 99.99% uptime",
   "Migrated 75,000+ CVs to digital formats with automated processing",
      "Reduced processing time by 80% through automation and optimization",
      "Implemented secure document management system with audit trails",
      "Designed and developed RESTful APIs consumed by mobile and web applications",
    ],
    technologies: [
      "ASP.NET Core",
      "Entity Framework",
      "SQL Server",
   "Azure",
      "Web API",
      "SignalR",
      "Redis",
    ],
  },
  {
    company: "AmCham Egypt",
    position: "Junior Web Developer",
    location: "Dokki, Giza, Egypt",
    startDate: "September 2019",
    endDate: "December 2020",
    current: false,
    description: "Started career at AmCham Egypt as a Junior Web Developer, building foundational skills in backend development and web technologies.",
    achievements: [
      "Developed web applications using ASP.NET Core",
      "Worked on database design and optimization",
      "Collaborated with senior developers on enterprise projects",
      "Contributed to digital transformation initiatives",
    ],
    technologies: [
      "ASP.NET Core",
      "Entity Framework",
      "SQL Server",
      "Web API",
      "JavaScript",
      "HTML5",
   "CSS",
 ],
  },
  {
    company: "Allied Consulting For SAP Services",
    position: "Backend Developer",
    location: "Maddi, Cairo, Egypt",
    startDate: "May 2019",
    endDate: "September 2019",
    current: false,
    description: "Developed .NET APIs for IoT integration with industrial systems at P&G factory.",
    achievements: [
      "Built scalable .NET APIs for P&G factory IoT systems",
      "Integrated APIs with ThingWorx IoT platform",
"Developed real-time monitoring dashboard for factory operations",
      "Implemented data aggregation and analytics endpoints",
    ],
    technologies: [
      ".NET Core",
      "Web API",
      "ThingWorx",
 "IoT",
      "SQL Server",
      "Azure IoT Hub",
    ],
  },
];
