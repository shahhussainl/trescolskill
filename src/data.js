import sliderImg from "./assets/sliderimage.jpg";
import course1 from "./assets/course1.png";
import course2 from "./assets/course2.png";
import course3 from "./assets/course3.jpeg";
import course4 from "./assets/course4.png";
import course5 from "./assets/course5.jpg";
import course6 from "./assets/course6.jpg";
import course7 from "./assets/course6.jpg"; // Note: course6.jpg reused for course7
import teacher1 from "./assets/teacher1.jpeg";
import teacher2 from "./assets/teacher2.jpeg";
import teacher3 from "./assets/teacher3.jpeg";
import teacher4 from "./assets/teacher4.jpeg";
import teacher5 from "./assets/teacher5.jpeg";
import newsImg1 from "./assets/newsimg1.png";
import newsImg2 from "./assets/newsimg2.jpeg";
import newsImg3 from "./assets/newsimg3.jpeg";

export const courses = [
  {
    id: 1,
    title: "Secure Your Digital Life with A Hands-On Workshop!",
    image: course1,
    trainer: {
      name: "Rizwan Saeed",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    description:
      "Are you truly safe online? Your personal data, devices, and family's security are at risk if you're not taking the right steps...",
    postedOn: "2025-03-01",
    applyBefore: "2025-07-07",
    duration: "1 day",
    fees: "20000PKR",
  },
  {
    id: 2,
    title: "Making Best Use of Artificial Intelligence",
    image: course2,
    trainer: {
      name: "Dr Sanaullah",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    description:
      "Preliminary working knowledge of computers assumed. Designed for everyone interested in AI and social media applications...",
    postedOn: "2025-02-25",
    applyBefore: "2025-04-28",
    duration: "7 days",
    fees: "11000PKR",
  },
  {
    id: 3,
    title: "Secure Websites/Email Configuration, Hosting on Linux",
    image: course3,
    trainer: {
      name: "Rao Nazra",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    description:
      "Covers the essentials of configuring, hosting, and testing secure websites and applications and email services on Linux...",
    postedOn: "2025-04-20",
    applyBefore: "2025-03-31",
    duration: "2 days",
    fees: "9000PKR",
  },
  {
    id: 4,
    title: "Introduction to Cyber Security and Database and Data Mining",
    image: course4,
    trainer: {
      name: "Ali Khan",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    description:
      "Basics of cybersecurity for everyone Basics of cybersecurity for everyone Basics of cybersecurity for everyone...",
    postedOn: "2025-05-01",
    applyBefore: "2025-07-01",
    duration: "3 days",
    fees: "7500PKR",
  },
  {
    id: 5,
    title: "Data Science with Python, Artificial Intelligence",
    image: course5,
    trainer: {
      name: "Ayesha Nazeer",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    description:
      "Learn Python for data analysis and visualization Learn Python for data analysis and visualization Learn Python...",
    postedOn: "2025-04-10",
    applyBefore: "2025-06-15",
    duration: "5 days",
    fees: "15000PKR",
  },
  {
    id: 6,
    title: "Data Science with Python, Artificial Intelligence",
    image: course6,
    trainer: {
      name: "Ayesha Nazeer",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    description:
      "Learn Python for data analysis and visualization Learn Python for data analysis and visualization Learn Python for data...",
    postedOn: "2025-04-10",
    applyBefore: "2025-06-15",
    duration: "5 days",
    fees: "15000PKR",
  },
  {
    id: 7,
    title: "Data Science with Python, Artificial Intelligence",
    image: course7,
    trainer: {
      name: "Ayesha Nazeer",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    description:
      "Learn Python for data analysis and visualization Learn Python for data analysis and visualization Learn Python for data...",
    postedOn: "2025-04-10",
    applyBefore: "2025-06-15",
    duration: "5 days",
    fees: "15000PKR",
  },
];

export const teachers = [
  {
    id: 1,
    name: "Rizwan Saeed",
    designation: "Cyber Security Expert",
    image: teacher1,
    bio: "Over 10 years of experience in ethical hacking, OSINT, and secure networking.",
    social: {
      linkedin: "https://linkedin.com/in/rizwan-saeed",
      twitter: "https://twitter.com/rizwansaeed",
      facebook: "https://facebook.com/rizwansaeed",
      github: "https://github.com/rizwansaeed",
    },
  },
  {
    id: 2,
    name: "Dr Sanaullah",
    designation: "AI Specialist",
    image: teacher2,
    bio: "Focused on AI and Machine Learning applications in education and business.",
    social: {
      linkedin: "https://linkedin.com/in/dr-sanaullah",
      twitter: "https://twitter.com/drsanaullah",
      facebook: "https://facebook.com/drsanaullah",
      github: "https://github.com/drsanaullah",
    },
  },
  {
    id: 3,
    name: "Rao Nazra",
    designation: "Linux & DevOps Instructor",
    image: teacher3,
    bio: "Expert in Linux server security, hosting and automation scripting.",
    social: {
      linkedin: "https://linkedin.com/in/rao-nazra",
      twitter: "https://twitter.com/raonazra",
      facebook: "https://facebook.com/raonazra",
      github: "https://github.com/raonazra",
    },
  },
   {
    id: 4,
    name: "Rao Nazra",
    designation: "Linux & DevOps Instructor",
    image: teacher4,
    bio: "Expert in Linux server security, hosting and automation scripting.",
    social: {
      linkedin: "https://linkedin.com/in/rao-nazra",
      twitter: "https://twitter.com/raonazra",
      facebook: "https://facebook.com/raonazra",
      github: "https://github.com/raonazra",
    },
  },
   {
    id: 5,
    name: "Rao Nazra",
    designation: "Linux & DevOps Instructor",
    image: teacher5,
    bio: "Expert in Linux server security, hosting and automation scripting.",
    social: {
      linkedin: "https://linkedin.com/in/rao-nazra",
      twitter: "https://twitter.com/raonazra",
      facebook: "https://facebook.com/raonazra",
      github: "https://github.com/raonazra",
    },
  },
];

export const newsList = [
  {
    id: 1,
    image: newsImg1,
    date: "2024-08-19 09:25:32",
    postedBy: "Admin",
    title: "Open Source Intelligence (OSINT)",
    description: `"What is OSINT? A Beginner's Guide..."`,
    fullDescription: `"What is OSINT? A Beginner's Guide to Open Source Intelligence"
Introduction to OSINT
Explanation of common terms and concepts
Use cases for OSINT in cybersecurity, law enforcement, and business
"Top 10 Free OSINT Tools Every Investigator Should Know"
A rundown of free tools available for OSINT
Links to resources for each tool
How and when to use each tool`,
  },
  {
    id: 2,
    image: newsImg2,
    date: "2024-08-19 09:25:32",
    postedBy: "Admin",
    title: "Advanced OSINT Techniques",
    description: `"Learn advanced OSINT techniques for investigations..."`,
    fullDescription: `"Advanced OSINT Techniques for Investigations"
In-depth guide to advanced OSINT methodologies
Techniques for gathering intelligence from social media
Best practices for ethical OSINT usage
Case studies of successful OSINT operations`,
  },
  {
    id: 3,
    image: newsImg3,
    date: "2024-08-19 09:25:32",
    postedBy: "Admin",
    title: "OSINT Tools Workshop",
    description: `"Join our workshop on OSINT tools and techniques..."`,
    fullDescription: `"OSINT Tools Workshop"
Hands-on workshop for learning OSINT tools
Practical exercises with real-world data
Guidance on integrating OSINT into your workflow
Certificate of completion provided`,
  },
];

export default { courses, teachers, newsList };
