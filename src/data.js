import sliderImg from "./assets/sliderimage.jpg";
import course1 from "./assets/course1.png";
import course2 from "./assets/course2.png";
import course3 from "./assets/course3.jpeg";
import course4 from "./assets/course4.png";
import course5 from "./assets/course5.jpg";
import course6 from "./assets/course6.jpg";
import course7 from "./assets/course6.jpg"; 
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
    title: "Secure Email System + Secure Web Series",
    image: course1,
    trainer: {
      name: "Rizwan Saeed",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    description:
      "Protect your digital communications from modern threats with hands-on security tools and real-time defense techniques.",
    postedOn: "2025-03-01",
    applyBefore: "2025-07-07",
    duration: "20 Hours ",
    Venue: "trescol",
    fees: "20000PKR",
  },
  {
    id: 2,
    title: "Secure Email System + Secure Web Series",
    image: course2,
    trainer: {
      name: "Dr Sanaullah",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    description:
      "Master the fundamental practices of digital self-defense. Perfect for beginners looking to take control of their personal cyber safety. ",
    postedOn: "2025-02-25",
    applyBefore: "2025-04-28",
    duration: "10 Hours ",
    Venue: "trescol",
    fees: "11000PKR",
  },
  {
    id: 3,
    title: "Secure Configuration for Internet (Proxy, DNS, FWs) ",
    image: course3,
    trainer: {
      name: "Rao Nazra",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    description:
      "Configure firewalls, DNS, and proxy settings like a pro. This course gets under the hood of your network’s first line of defense. ",
    postedOn: "2025-04-20",
    applyBefore: "2025-03-31",
    duration: "20 Hours ",
    Venue: "trescol",
    fees: "9000PKR",
  },
  {
    id: 4,
    title: "Secure Email System + Secure Web Series",
    image: course4,
    trainer: {
      name: "Ali Khan",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    description:
      "Break through the buzzwords and understand how AI can shape industries — and your future career. No prior experience needed. ",
    postedOn: "2025-05-01",
    applyBefore: "2025-07-01",
    duration: "10 Hours ",
    Venue: "trescol",
    fees: "7500PKR",
  },
  {
    id: 5,
    title: " VPNs – Secure Data Transfer + Video Conferencing",
    image: course6,
    trainer: {
      name: "Ayesha Nazeer",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    description:
      "Master the art of encrypted communication and secure data movement across networks with modern VPN technologies.",
    postedOn: "2025-04-10",
    applyBefore: "2025-06-15",
    duration: "20 Hours",
    Venue: "trescol",
    fees: "15000PKR",
  },
  
   
];

export const teachers = [
  {
    id: 1,
    name: "Rao Nazar Iqbal ",
    designation: "Director of Cyber Security | Information Security",
    image: teacher1,
    bio: "Mr. Rao Nazar Iqbal is a seasoned cybersecurity strategist with over two decades of experience designing....",
    fullDes: "Mr. Rao Nazar Iqbal is a seasoned cybersecurity strategist with over two decades of experience designing and securing digital infrastructures across diverse industries. As Director of Cyber Security, he brings a wealth of real-world expertise in system administration, GRC, firewall management, VPN technologies, and Linux/BSD environments. His ability to simplify complex security architectures into practical, real-world applications has made him a sought-after trainer and mentor in the South Asian tech ecosystem. He is especially recognized for his Urdu-based cybersecurity tutorials, empowering learners in their native language. His sessions are known for live demonstrations, scenario-based learning, and mission-critical insights.",
    Languages: " Urdu and English",
    Specialties: "GRC, Linux/BSD VPNs, Network/Firewall Security",
    social: {
      linkedin: "https://linkedin.com/in/rizwan-saeed",
      twitter: "https://twitter.com/rizwansaeed",
      facebook: "https://facebook.com/rizwansaeed",
      github: "https://github.com/rizwansaeed",
    },
  },
  {
    id: 2,
    name: "Dr. Hussain Mureed",
    designation: "Special Guest Speaker ",
    image: teacher2,
    bio: "Hussain Mureed is a modern tech educator focused on the intersection of Artificial Intelligence, data privacy.....",
    fullDes: "Hussain Mureed is a modern tech educator focused on the intersection of Artificial Intelligence, data privacy, and human-centric cybersecurity. With a background in research and real-world application of AI tools in cybersecurity awareness, Dr. Hussain simplifies emerging technologies for everyday users. He leads foundational courses on personal digital safety and AI understanding, helping learners develop critical thinking and a responsible approach to the digital world. He blends philosophical insight with practical awareness training, making complex tech feel accessible and even enjoyable the digital world. He blends philosophical insight with practical awareness training, making complex tech feel accessible and even enjoyable feel accessible and even enjoyable feel accessible and even enjoyable.",
    Languages: "English, Urdu",
    Specialties: "AI for beginners, digital privacy, cybersecurity awareness",
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
    bio: "Expert in Linux server security, hosting and automation scripting Hussain Mureed is a modern tech educator....",
    fullDes: "Expert in Linux server security, hosting and automation scripting Hussain Mureed is a modern tech educator focused on the intersection of Artificial Intelligence, data privacy, and human-centric cybersecurity. With a background in research and real-world application of AI tools in cybersecurity awareness, Dr. Hussain simplifies emerging technologies for everyday users. He leads foundational courses on personal digital safety and AI understanding, helping learners develop critical thinking and a responsible approach to the digital world. He blends philosophical insight with practical awareness training, making complex tech feel accessible and even enjoyable the digital world. He blends philosophical insight with practical awareness training, making complex tech feel accessible and even enjoyable feel accessible.",
    Languages: "English, Urdu",
    Specialties: "AI for beginners, digital privacy, cybersecurity awareness",
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
    bio: "Expert in Linux server security, hosting and automation scripting Hussain Mureed is a modern tech educator....",
    fullDes: "Expert in Linux server security, hosting and automation scripting Hussain Mureed is a modern tech educator focused on the intersection of Artificial Intelligence, data privacy, and human-centric cybersecurity. With a background in research and real-world application of AI tools in cybersecurity awareness, Dr. Hussain simplifies emerging technologies for everyday users. He leads foundational courses on personal digital safety and AI understanding, helping learners develop critical thinking and a responsible approach to the digital world. He blends philosophical insight with practical awareness training, making complex tech feel accessible and even enjoyable the digital world. He blends philosophical insight with practical awareness training, making complex tech feel accessible and even enjoyable feel accessible",
    Languages: "English, Urdu",
    Specialties: "AI for beginners, digital privacy, cybersecurity awareness ",
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
    bio: "Expert in Linux server security, hosting and automation scripting Hussain Mureed is a modern tech educator focused on the intersection....",
    fullDes: "Expert in Linux server security, hosting and automation scripting Hussain Mureed is a modern tech educator focused on the intersection of Artificial Intelligence, data privacy, and human-centric cybersecurity. With a background in research and real-world application of AI tools in cybersecurity awareness, Dr. Hussain simplifies emerging technologies for everyday users. He leads foundational courses on personal digital safety and AI understanding, helping learners develop critical thinking and a responsible approach to the digital world. He blends philosophical insight with practical awareness training, making complex tech feel accessible and even enjoyable the digital world. He blends philosophical insight with practical awareness training, making complex tech feel accessible and even enjoyable feel accessible.",
    Languages: "English, Urdu",
    Specialties: "AI for beginners, digital privacy, cybersecurity awareness",
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
    description: `"What is OSINT? A Beginner's Guide OSINT techniques for investigations..."`,
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



// src/data.js

export const statsData = [
  {
    icon: "fa-book-open",
    color: "orange",
    count: 6,
    label: "Open Courses",
    sub: "Apply Online",
  },
  {
    icon: "fa-chalkboard-teacher",
    color: "teal",
    count: 4,
    label: "Registered Trainers",
    sub: "View List",
  },
  {
    icon: "fa-lock",
    color: "red",
    count: 6,
    label: "Closed Courses",
    sub: "View List",
  },
  {
    icon: "fa-graduation-cap",
    color: "purple",
    count: 7,
    label: "Total Offered Courses",
    sub: "View List",
  },
];


export default { courses, teachers, newsList, statsData  };
