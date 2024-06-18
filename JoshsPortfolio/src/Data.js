
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";

export const HERO_CONTENT = `I am a passionate full stack developer I love making scalable and helpful applications and thrive in situations when a problem needs solving. My strengths lie in JavaScript, Java, and Python. However I have recently developed a love for Bash scripting and C. Im hardworking and passionate about the work I do which makes me reliable and dependable. I look forward to joining a team to help build helpful and reliable applications for the world!`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Full Stack Developer",
    company: "Digital Atitude",
    description: `I designed and implemented specific info into there company website`,
    technologies: ["Javascript", "Css", "Email.js"],
  },
  {
    year: "2023 - Present",
    role: "Student",
    company: "Humber College",
    description: `Completed many projects, formed many connections, gained valuable experience`,
    technologies: ["Javascript", "Css", "React", "linux", "bash", "HTML", "Python", "Java", "Bootstrap"],
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, an A.I assistant, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "mySQL", "express", "open-ai"],
  },
  {
    title: "File Organizer",
    image: project2,
    description:
      "An application that takes in source directory and destination directory and sorts all files in source directory based off extension",
    technologies: ["Bash", "linux"],
  },
  {
    title: "Weather App",
    image: project4,
    description:
      "A weather app that is capable of displaying weather from anywhere around the world, also displays global ocean temperatures",
    technologies: ["HTML", "CSS", "React", "Javascript"],
  },
  {
    title: "Snake game",
    image: project3,
    description:
      "I built the game snake using html5 canvas and javascript",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Data analysis",
    image: project2,
    description:
      "I found the accuracy of predictions of a diagnosis based off the closest n number of lines to that specific line using a distance formula",
    technologies: ["Java"],
  },
];
