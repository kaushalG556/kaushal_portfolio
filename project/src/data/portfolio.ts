export const stats = [
  { value: 10, suffix: '+', label: 'Projects Completed' },
  { value: 1, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Happy Clients' },
  { value: 6, suffix: 'K+', label: 'Lines of Code' },
];

export type Education = {
  degree: string;
  university: string;
  year: string;
  description: string;
};

export const education: Education[] = [
  {
  degree: 'Master of Computer Applications (MCA)',
  university: 'Dr. A.P.J. Abdul Kalam Technical University, Lucknow',
  year: '2024 – 2026',
  description:
    'Completed MCA with a focus on software development, programming, databases, and core computer science concepts.',
},
   {
    degree: 'Bachelor of Computer Applications (BCA)',
    university: 'Dr. Bhimrao Ambedkar University, Agra',
    year: '2021 – 2024',
    description:
    'Completed a Bachelor of Computer Applications with a strong foundation in programming, web development, database management, and computer science fundamentals.',
  }
];


  export const timeline = [
  {
    year: 'Jun 2026 – Sep 2026',
    title: 'Backend Developer',
    org: 'ATF Labs',
    description:
  'Worked on multiple software projects using .NET, SQL Server, Git & GitHub, Angular, and Tailwind CSS. Developed and optimized backend services, REST APIs, database queries, and business workflows while contributing to scalable and maintainable application development.',  },

  {
    year: 'Jul 2024 – Sep 2024',
    title: 'Python / Django Developer Intern',
    org: 'WalkingTree Technology Pvt. Ltd.',
    description:
      'Worked on Python and Django-based backend projects, implemented REST APIs and database integration, collaborated on DSA and optimization tasks, and developed backend modules using Python and Django.',
  },

  {
    year: 'Jan 2024 – Jun 2024',
    title: 'Python / Django Developer',
    org: 'Career Compiler',
    description:
      'Worked on multiple Python and Django-based projects and contributed to technology development in a large, distributed computing environment. Worked with optimization concepts including linear and nonlinear optimization.',
  },
];


export type SkillCategory = {
  title: string;
  color: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    color: '#00f0ff',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Three.js / R3F', level: 88 },
      { name: 'Tailwind CSS', level: 96 },
    ],
  },
  {
    title: 'Backend',
    color: '#ff2bd6',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL / Supabase', level: 87 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    title: 'Design',
    color: '#b6ff00',
    skills: [
      { name: 'Figma', level: 90 },
      { name: 'Motion Design', level: 85 },
      { name: 'UI/UX Systems', level: 92 },
      { name: 'Blender', level: 70 },
    ],
  },
  {
    title: 'Tools',
    color: '#ffb800',
    skills: [
      { name: 'Git / CI/CD', level: 93 },
      { name: 'Docker', level: 82 },
      { name: 'Framer Motion', level: 90 },
      { name: 'Vite / Webpack', level: 88 },
    ],
  },
];

export const projects: Project[] = [
   {
    title: 'MSC Surveyors',
    description:
      'Developed a professional marine services website for Ocean Gears Marine Services, presenting the company’s services and business information through a structured and user-friendly web interface.',
    tags: ['Angular','Tailwind CSS','TypeScript','HTML'],
    gradient: 'from-cyan-500/30 to-teal-600/20',
    github: 'https://github.com/kaushalG556/msc_surveyors',
    demo: 'https://oceangearsmarineservices.com/',
    icon: 'Code',
  },

   {
    title: 'Library Management System',
    description:
      'Django-based Library Management System with book tracking, borrower management, and automated fine calculation.',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQLite3'],
    gradient: 'from-lime-500/30 to-green-600/20',
    github: 'https://github.com/kaushalG556/library_management_system',
    demo: '',
    icon: 'Library',
  },

    {
    title: 'Shopping Web Project',
    description:
      'A web-based shopping project focused on creating a clean and functional e-commerce-style web interface.',
    tags: ['Django','Python','HTML & CSS','JavaScript','Sqlite3'],
    gradient: 'from-fuchsia-500/30 to-pink-600/20',
    github: 'https://github.com/kaushalG556/shopping_web_project',
    demo: '',
    icon: 'ShoppingBag',
  },


    {
    title: 'Car Rental Booking System',
    description:
      'A web-based Car Rental Booking System developed using Django that allows users to browse available cars, book vehicles, and manage reservations efficiently.',
    tags: ['Python', 'Django', 'HTML', 'CSS','JavaScript'],
    gradient: 'from-amber-500/30 to-orange-600/20',
    github: 'https://github.com/kaushalG556/car_rental_booking_system',
    demo: '',
    icon: 'Car',
  },

  {
    title: 'Instagram Clone',
    description:
      'A web-based Instagram clone project developed with HTML, focused on recreating the core social media interface.',
    tags: ['HTML','CSS'],
    gradient: 'from-cyan-500/30 to-blue-600/20',
    github: 'https://github.com/kaushalG556/instagram_clone',
    demo: 'https://instagram-clone-kappa-dusky.vercel.app/',
    icon: 'Instagram',
  },

  {
    title: 'My Portfolio',
    description:
      'Full-stack Django portfolio website showcasing projects, technical skills, and an admin panel.',
    tags: ['Django','Python','HTML & CSS','JavaScript','Sqlite3'],
    gradient: 'from-violet-500/30 to-indigo-600/20',
    github: 'https://github.com/kaushalG556/my_portfolio',
    demo: '',
    icon: 'Globe',
  }, 
];

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  duration: string;
  credentialId: string;
  credentialUrl: string;
  courseUrl?: string;
  file: string;
  image?: string;
  skills: string[];
};

export const certifications: Certification[] = [
  {
    title: 'TCS iON YUVA AI for ALL',
    issuer: 'TCS iON',
    date: 'April 2026',
    duration: '',
    credentialId: '',
    credentialUrl: 'https://www.tcsion.com/',
    courseUrl: '',
    file: '/certificates/tcs.pdf',
    image: '/certificates/tcs.pdf',
    skills: ['Artificial Intelligence', 'AI Fundamentals'],
  },

   {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte.',
    date: 'July 2026',
    duration: '',
    credentialId: '',
    credentialUrl: 'https://www.theforage.com/dashboard',
    courseUrl: 'https://www.theforage.com/simulations/deloitte-au/data-analytics-s5zy/completion-quiz',
    file: '/certificates/deloitte-dataanal.pdf',
    image: '/certificates/deloitte-dataanal.pdf',
    skills: ['Data Analytics'],
  },

  {
    title: 'Software Engineer Intern',
    issuer: 'HackerRank',
    date: 'July 2024',
    duration: '',
    credentialId: 'D2535159B1C4',
    credentialUrl: 'https://www.hackerrank.com/',
    courseUrl: 'https://www.hackerrank.com/certificates/d2535159b1c4',
    file: '/certificates/hackerrank-SEI.png',
    image: '/certificates/hackerrank-SEI.png',
    skills: ['Software Engineering', 'Programming'],
  },

  {
    title: 'Python Programming',
    issuer: 'HackerRank',
    date: 'July 2024',
    duration: '',
    credentialId: 'D2535159B1C4',
    credentialUrl: 'https://www.hackerrank.com/',
    courseUrl: 'https://www.hackerrank.com/certificates/27d38e985170',
    file: '/certificates/hackerrank-python.jpg',
    image: '/certificates/hackerrank-python.jpg',
    skills: ['Python'],
  },

  {
    title: 'REST API (Intermediate)',
    issuer: 'HackerRank',
    date: 'April 2024',
    duration: '',
    credentialId: 'BC6E244F8916',
    credentialUrl: 'https://www.hackerrank.com/',
    courseUrl: 'https://www.hackerrank.com/certificates/7f4cbf04432e',
    file: '/certificates/hackerrank-restapi.png',
    image: '/certificates/hackerrank-restapi.png',
    skills: ['REST API', 'API Development'],
  },

  {
    title: 'SQL (Advanced)',
    issuer: 'HackerRank',
    date: 'April 2024',
    duration: '',
    credentialId: 'BC6E244F8916',
    credentialUrl: 'https://www.hackerrank.com/',
    courseUrl: 'https://www.hackerrank.com/certificates/bc6e244f8916',
    file: '/certificates/hackerrank-sql.png',
    image: '/certificates/hackerrank-sql.png',
    skills: ['Database-SQL'],
  },

    {
    title: 'Python Programming',
    issuer: 'Infomatics',
    date: '2024',
    duration: '3 Months',
    credentialId: 'INF-2716',
    credentialUrl: 'https://www.codewithddsingh.com/',
    courseUrl: 'https://www.codewithddsingh.com/',
    file: '/certificates/info-python.png',
    image: '/certificates/info-python.png',
    skills: ['Python'],
  },
{
    title: 'Django Framework & RestAPI',
    issuer: 'Infomatics',
    date: '2024',
    duration: '3 Months',
    credentialId: 'INF-2717',
    credentialUrl: 'https://www.codewithddsingh.com/',
    courseUrl: 'https://www.codewithddsingh.com/',
    file: '/certificates/info-django.png',
    image: '/certificates/info-django.png',
    skills: ['Django framework & RestAPI'],
  },
  {
    title: 'C & DSA',
    issuer: 'Infomatics',
    date: '2022',
    duration: '3 Months',
    credentialId: 'INF-2353',
    credentialUrl: 'https://www.codewithddsingh.com/',
    courseUrl: 'https://www.codewithddsingh.com/',
    file: '/certificates/info-django.png',
    image: '/certificates/info-django.png',
    skills: ['C Programming & Data Structure & Algorithms(DSA)'],
  },
   {
    title: 'Programming with Python 3.X',
    issuer: 'SkillUp by Simplilearn',
    date: 'April 2023',
    duration: '',
    credentialId: '4265828',
    credentialUrl: 'https://www.simplilearn.com/skillup-free-online-courses',
    courseUrl: 'https://www.simplilearn.com/skillup-free-online-courses',
    file: '/certificates/simple-python.png',
    image: '/certificates/simple-python.png',
    skills: ['Python Programming'],
  },
   {
    title: 'Java',
    issuer: 'SkillUp by Simplilearn',
    date: 'April 2023',
    duration: '',
    credentialId: '4240504',
    credentialUrl: 'https://www.simplilearn.com/skillup-free-online-courses',
    courseUrl: 'https://www.simplilearn.com/skillup-free-online-courses',
    file: '/certificates/simple-java.png',
    image: '/certificates/simple-java.png',
    skills: ['Java Programming'],
  },
    {
    title: 'Web Development',
    issuer: 'SkillUp by Simplilearn',
    date: 'Feb 2024',
    duration: '',
    credentialId: '',
    credentialUrl: 'https://www.simplilearn.com/skillup-free-online-courses',
    courseUrl: 'https://www.simplilearn.com/skillup-free-online-courses',
    file: '/certificates/simple-java.png',
    image: '/certificates/simple-java.png',
    skills: ['Web Devvelopment for Beginner'],
  },

  {
    title: 'Web Development',
    issuer: 'STP COMPUTER EDUCATION',
    date: 'April 2025',
    duration: '',
    credentialId: '',
    credentialUrl: 'https://www.stpcomputereducation.com/',
    courseUrl: 'https://www.stpcomputereducation.com/',
    file: '/certificates/stp computer.png',
    image: '/certificates/stp computer.png',
    skills: ['Web Devvelopment'],
  },

  {
    title: 'Front End Development-HTML',
    issuer: 'Great Learning',
    date: 'May 2023',
    duration: '',
    credentialId: '',
    credentialUrl: 'https://www.mygreatlearning.com/',
    courseUrl: 'https://www.mygreatlearning.com/',
    file: '/certificates/greatelearning.png',
    image: '/certificates/greatelearning.png',
    skills: ['Front End Development-HTML'],
  },
    {
    title: 'Mastering DSA Using C',
    issuer: 'Career Compiler',
    date: 'oct 2023',
    duration: '',
    credentialId: '1696925616',
    credentialUrl: 'https://www.careercompiler.com/',
    courseUrl: 'https://www.careercompiler.com/',
    file: '/certificates/ingo-masterring dsa.png',
    image: '/certificates/ingo-masterring dsa.png',
    skills: ['Front End Development-HTML'],
  },

  {
    title: 'Certification of Appreciation',
    issuer: 'Code With DD Singh',
    date: 'Sep 2023',
    duration: '',
    credentialId: 'CC/2023/428',
    credentialUrl: 'https://www.codewithddsingh.com/',
    courseUrl: 'https://www.codewithddsingh.com/',
    file: '/certificates/info dd.png',
    image: '/certificates/info dd.png',
    skills: ['Front End Development-HTML'],
  },

    {
    title: 'Customer Service Aviation (Tourism)',
    issuer: 'Reliance Foundation SKILLING',
    date: 'Sep 2026',
    duration: '',
    credentialId: 'RFSA000621133',
    credentialUrl: 'https://rfskillingacademy.com/',
    courseUrl: 'https://rfskillingacademy.com/',
    file: '/certificates/Airlance.pdf',
    image: '/certificates/Airlance.pdf',
    skills: ['Customer Service Aviation'],
  },

];export const socials = [
  { label: 'GitHub', href: 'https://github.com/novavex', icon: 'Github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/novavex', icon: 'Linkedin' },
  { label: 'Twitter / X', href: 'https://twitter.com/novavex', icon: 'Twitter' },
];
