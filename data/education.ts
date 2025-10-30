export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  grade: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export const education: Education[] = [
  {
  degree: "Bachelor of Science",
 field: "Computer Science and Artificial Intelligence",
    institution: "Helwan University",
  location: "Cairo, Egypt",
 startDate: "September 2014",
  endDate: "June 2018",
  grade: "Very Good",
    description: "Graduation project: SMART DELIVERY - Received Excellent rating",
  },
  {
    degree: "General Secondary Education Certificate",
 field: "Mathematics",
    institution: "Al-Warraq Secondary School",
    location: "Egypt",
    startDate: "2011",
    endDate: "2014",
    grade: "",
  },
];

export const certifications: Certification[] = [
  {
    title: "ASP.NET Core in .NET 6: Dependency Injection",
    issuer: "Pluralsight / LinkedIn Learning",
    date: "2023",
    description: "Advanced certification in dependency injection patterns with ASP.NET Core",
  },
  {
 title: "Agile Development Practices",
    issuer: "Professional Certification",
    date: "2023",
    description: "Certification in Agile methodologies and development practices",
  },
  {
    title: "Testing .NET Code with xUnit.net 2",
    issuer: "Pluralsight / LinkedIn Learning",
    date: "2023",
    description: "Comprehensive testing certification for .NET applications",
  },
  {
    title: "Microservices: The Big Picture",
    issuer: "Pluralsight",
    date: "2023",
    description: "Understanding microservices architecture and best practices",
  },
  {
    title: "Data Scientist Mastery Award for Students",
    issuer: "IBM Skills Academy",
  date: "May 2018",
    description: "Advanced proficiency in Apache Hadoop, Ambari, Spark, Big SQL, Big R, Text Analytics, HDFS, YARN, MapReduce, ZooKeeper, Knox, Sqoop, and HBase",
},
  {
    title: "Cloud Application Developer 2018 - Mastery Award for Students",
    issuer: "IBM Skills Academy",
    date: "January 2018",
    description: "Expertise in building, running, deploying applications on IBM Cloud. Proficiency in Cloud Computing, DevOps, REST Architecture, Watson APIs, Mobile App Development, Node.js, Express Framework, and React",
  },
];
