
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/bash.png";
import project6 from "./assets/sudoku.png"
import project7 from "./assets/idnews.png"
import project8 from "./assets/nhl.png"
import project9 from "./assets/da.png"

export const HERO_CONTENT = `I am a passionate full stack developer I love making scalable and helpful applications and thrive in situations when a problem needs solving. My strengths lie in JavaScript, Java, and Python. However I have recently developed a love for Bash scripting and C. Im hardworking and passionate about the work I do which makes me reliable and dependable. I look forward to joining a team to help build helpful and reliable applications for the world!`;

export const ABOUT_TEXT = `I am a 21 year old man, outside of coding I love working out, playing basketball, and I love playing chess, in my opinion it is one of the most beautiful creations of humanity. Programming is my main hobby, Ive developed a real passion and love for it. I believe that in programming the sky's the limit on what you can accomplish, I absolutely love the fact that I can build anything I can think of it makes the journey all the more exciting. At this point I have 0 professional expreience but I absolutely cannot wait to see where the road takes me! `;

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
    title: "Digital Aditude",
    image: project9,
    description: "Industry standard website built for a digital marketing business, I was given a template with pre-made animations and I built the website they dreamed of. I was paid for this it is my first real work experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    git: "https://github.com/JoshGoold/Digital-Aditude",
    live: "https://digital-aditude-826wdaj9e-joshs-projects-9174c388.vercel.app/"
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, an A.I assistant, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "mySQL", "express", "open-ai"],
    git: "https://github.com/JoshGoold/finalproject"
  },
  {
    title: "File Organizer",
    image: project5,
    description:
      "An application that takes in source directory and destination directory and sorts all files in source directory based off extension",
    technologies: ["Bash", "linux"],
    git: "https://github.com/JoshGoold/File-organizer"
  },
  {
    title: "Weather App",
    image: project4,
    description:
      "A weather app that is capable of displaying weather from anywhere around the world, also displays global ocean temperatures",
    technologies: ["HTML", "CSS", "React", "Javascript"],
    live: "https://weather-app-pearl-sigma-93.vercel.app",
    git: "https://github.com/JoshGoold/weatherApp"
  },
  {
    title: "Snake game",
    image: project3,
    description:
      "I built the game snake using html5 canvas and javascript",
    technologies: ["HTML", "CSS", "Javascript"],
    live: "https://snake-eight-green.vercel.app",
    git: "https://github.com/JoshGoold/snake"
  },
  {
    title: "Data analysis",
    image: project2,
    description:
      "I found the accuracy of predictions of a diagnosis based off the closest n number of lines to that specific line using a distance formula",
    technologies: ["Java"],
    git: "https://github.com/JoshGoold/Tumor-results-prediction-assignment"
  },
  {
    title: "Sudoku",
    image: project6,
    description: "I built an algorithm that builds sudoku boards with differing levels of difficulty",
    technologies: ["Javascript", "React", "tailwindcss"],
    git: "https://github.com/JoshGoold/Sudoku",
    live: "https://sudoku-3cngg8ytx-joshs-projects-9174c388.vercel.app"
  },
  {
    title: "Interdimensional News",
    image: project7,
    description: "I built a fake news site that generates silly and out of pocket news storys based off given story templates and randomized words (sort of like madlib)",
    technologies: ["Javascript", "tailwindcss", "React"],
    git: "https://github.com/JoshGoold/Interdimensional-News",
    live: "https://interdimensional-news-joshs-projects-9174c388.vercel.app"
  },
  {
    title: "NHL STATS",
    image: project8,
    description: "I used an API to capture current NHL standings, and player stats. In this app you can sift through all players on any team and see there key stats. NOTE: API may go down at anytime",
    technologies: ["Hockey Stat API", "Javascript", "React", "tailwindcss"],
    git:"https://github.com/JoshGoold/NHL-Stats-app",
    live: "https://nhl-stats-cfm8rjmtr-joshs-projects-9174c388.vercel.app"
  }
];
