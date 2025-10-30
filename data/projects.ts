export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Platforms Commands",
    description: "A scalable microservices-based application demonstrating modern cloud-native architecture",
    longDescription: "Developed a comprehensive microservices architecture using .NET Core and Kubernetes. The application showcases best practices in containerization, orchestration, service discovery, and inter-service communication. Implemented API Gateway pattern, CQRS, and event-driven architecture for enhanced scalability and maintainability.",
    technologies: [
      ".NET Core",
      "Microservices",
      "Docker",
      "Kubernetes",
      "RabbitMQ",
      "gRPC",
      "Redis",
      "MongoDB",
    ],
    github: "https://github.com/asayedio/platforms-commands",
    featured: true,
  },
  {
  title: "eJustice Case Management System",
    description: "Enterprise-level case management system for Ministry of Justice",
    longDescription: "Comprehensive case management platform handling complaint processing, case tracking, and judicial workflows. Built with Clean Architecture and Domain-Driven Design principles, ensuring maintainability and scalability. Features include automated workflows, document management, reporting, and audit trails.",
    technologies: [
  ".NET Core",
      "Clean Architecture",
      "DDD",
      "EF Core",
      "Hangfire",
      "Serilog",
    "SQL Server",
    ],
    featured: true,
},
  {
    title: "Softbase 4.0",
    description: "Multi-tenant SAAS platform with comprehensive business management features",
    longDescription: "A complete SAAS solution supporting multiple tenants with isolated data and customizable workflows. Features include user management, billing, reporting, and integration APIs. Implemented using ASP.NET Zero framework with Angular frontend.",
    technologies: [
      ".NET Core 6.0",
      "ASP.NET Zero",
      "Angular 12",
      "Entity Framework",
      "Multi-tenancy",
      "Azure",
    ],
    featured: true,
  },
  {
    title: "Paperless Employment Fair System",
    description: "Digital transformation of traditional employment fair processes",
    longDescription: "Revolutionary system that digitized the entire employment fair workflow, from CV submission to candidate matching. Achieved 99.99% uptime during peak events and successfully migrated 75,000+ CVs to digital format. Features include automated CV parsing, candidate search, and employer dashboard.",
 technologies: [
      "ASP.NET Core",
      "Entity Framework",
 "SQL Server",
      "Azure",
      "SignalR",
      "ML.NET",
    ],
    featured: true,
  },
  {
    title: "SMART DELIVERY",
    description: "Intelligent delivery management system (Graduation Project - Excellent Rating)",
    longDescription: "Smart logistics and delivery optimization system that uses algorithms to optimize delivery routes and track packages in real-time. Features include route optimization, real-time tracking, customer notifications, and analytics dashboard.",
    technologies: [
      "C#",
      "ASP.NET",
    "SQL Server",
      "Google Maps API",
      "SignalR",
    ],
    featured: false,
  },
];
