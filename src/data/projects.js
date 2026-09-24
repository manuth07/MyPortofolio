export const projects = [
  {
    id: '01',
    number: '01',
    title: 'EventPulse',
    subtitle: 'Event Ticketing Platform',
    featured: true,
    technologies: ['ASP.NET Core', 'C#', 'React', 'PostgreSQL','Github Actions', 'Azure', 'Jira'],
    github: 'https://github.com/manuth07/EventPulse',
    description:
      'Developed a microservices-based event discovery and ticket selling platform with separate Identity, Event, Booking and Payment services connected through a YARP API gateway. Built event submission and approval workflows using ASP.NET Core APIs, PostgreSQL and a React frontend, and deployed the application to Azure. Worked in Jira-managed sprints to develop features, test workflows and track defects.',
    highlights: [
      'Microservices architecture with YARP API gateway',
      'Dedicated Identity, Event, Booking, and Payment services',
      'Event submission and approval state workflows',
      'Deployed on Microsoft Azure cloud infrastructure',
    ],
    architecture: 'MICROSERVICES // 4 INDEPENDENT SERVICES // YARP GATEWAY',
    image: null, // Ready for future screenshot asset
  },
  {
    id: '02',
    number: '02',
    title: 'Distributed Payment Consensus System',
    subtitle: 'Fault-Tolerant Transaction Processing',
    featured: false,
    technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'Apache ZooKeeper', 'Nginx', 'Docker'],
    github: 'https://github.com/manuth07/distributed-payment-system',
    description:
      'Developed a prototype fault-tolerant distributed payment processing system using a five-node service cluster. Implemented asynchronous payment event communication using Apache Kafka. Used Apache ZooKeeper for distributed coordination and designed the system around leader-based coordination and fault-tolerant architecture.',
    architecture: '5-NODE CLUSTER // LEADER-BASED COORDINATION // ASYNC EVENT STREAMING',
    image: null,
  },
  {
    id: '03',
    number: '03',
    title: 'LearnLink',
    subtitle: 'Academic Networking Platform',
    featured: false,
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'JWT', 'Jira'],
    github: 'https://github.com/manuth07/LearnLink',
    description:
      'Developed a full-stack academic networking platform connecting students, academics and institutions. Implemented JWT-based authentication, posts, dynamic feeds, user following, profiles and search functionality. Collaborated using Agile project management practices and Jira.',
    architecture: 'FULL-STACK // SECURE JWT AUTH // DYNAMIC GRAPH FEEDS',
    image: null,
  },
  {
    id: '04',
    number: '04',
    title: 'HappyHeels',
    subtitle: 'E-Commerce Shoe Store',
    featured: false,
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL'],
    github: 'https://github.com/manuth07/HappyHeels',
    description:
      'Developed a full-stack e-commerce application for an online shoe store. Applied object-oriented programming principles and practical Spring Boot application architecture. Integrated a React frontend with a Spring Boot backend and MySQL database.',
    architecture: 'MODULAR MONOLITH // RELATIONAL CATALOG // REST SERVICES',
    image: null,
  },
]

export default projects
