import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    github,
    linkedin,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    figma,
    ntu,
    nie,
    reelraves,
    vifitness,
    fypsystem,
    nbaplayer,
    jobit,
    threejs,
    python,
    java,
    githubblack,
    hungerdash,
    jobninja,
    emotion,
    bearbrickfusion,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const socials = [
    {
      title: "github",
      link: "https://github.com/bron322",
      icon: github,
      color: "#000000"
    },
    {
      title: "linkedin",
      link: "https://www.linkedin.com/in/limjingjie322/",
      icon: linkedin,
      color: "#0072b1"
    },
  ]
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name:"Python",
      icon: python
    },
    {
      name:"Java",
      icon: java
    },
    {
      name: "github",
      icon: githubblack
    },
  ];
  
  const experiences = [
    {
      title: "Student",
      company_name: "Nanyang Technological University, Singapore",
      icon: ntu,
      iconBg: "#383E56",
      date: "August 2022 - Present",
      points: [
        "Pursuing Bachelor Degree of Science in Data Science and Artificial Intelligence.",
        "Expected Honours(Highest Distinction), Current CGPA: 4.52/5.00",
        "Relevant courses: Data Structures & Algorithm, Software Engineering, Algorithm Design and Analysis",
      ],
    },
    {
      title: "Data Transcriber, Intern",
      company_name: "S-Lab for Advanced Intelligence | NTU, Singapore",
      icon: ntu,
      iconBg: "#E6DEDD",
      date: "October 2023 - Present",
      points: [
        "Proficiency in translating and adapting machine learning code and content from Chinese to English",
        "Facilitate in knowledge transfer and collaboration between Chinese and English-speaking communities",
      ],
    },
    {
      title: "Software Engineer, Intern",
      company_name: "National Institute of Education, Singapore",
      icon: nie,
      iconBg: "#383E56",
      date: "December 2023 - Present",
      points: [
        "Focused on capturing students' emotions during reading and note-taking activities.",
        "Led the design and implementation of an intuitive and user-friendly interface for the emotion analytics tool.",
        "Ensured seamless integration with Knowledge Forum's existing platform.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "VI Fitness",
      description:
        "Developed a comprehensive web application designed to automate generation of personalized workout plans and facilitate tracking of daily calories intake.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express.js",
          color: "pink-text-gradient",
        },
        {
          name: "three.js",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
      ],
      image: vifitness,
      source_code_link: "https://github.com/bron322/SC2006VIFitness",
    },
    {
      name: "Emotion Analytics",
      description:
        "Innovative tool captures and analyzes students' emotions as they engage with study materials, read, and take notes.The software facilitates a nuanced analysis of emotional nuances, contributing to the enhancement of educational strategies and learning environment.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
      ],
      image: emotion,
      source_code_link: "https://github.com/",
    },
    {
      name: "HungerDash",
      description:
        "HungerDash is a mobile food delivery application built with React Native and Expo. This app provides a seamless and user-friendly experience for customers to explore a variety of dishes, place orders, and have their favorite meals delivered to their doorstep.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "expo",
          color: "pink-text-gradient",
        },
      ],
      image: hungerdash,
      source_code_link: "https://github.com/bron322/HungerDash",
    },
    {
      name: "Job Ninja",
      description:
        "Your go-to mobile app for a seamless and efficient job search experience. Whether you're a recent graduate, a seasoned professional, or someone exploring new career opportunities, JobNinja is here to simplify your job-hunting journey.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "expo",
          color: "pink-text-gradient",
        },
      ],
      image: jobninja,
      source_code_link: "https://github.com/bron322/JobNinja",
    },
    {
      name: "Reel Raves",
      description:
        "The Reel Raves Angular project is a dynamic and user-friendly movie reviewing website that I designed and developed using Angular. This platform invites movie enthusiasts to explore and share their opinions on a diverse range of films. Users can easily navigate through the site, discover new movies, and contribute their reviews, creating an engaging community of film enthusiasts.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: reelraves,
      source_code_link: "https://github.com/bron322/AngularMovieReview",
    },
    {
      name: "BearBrickFusion",
      description:
        "BearBrickFusion is an online platform dedicated to bringing the iconic Bearbrick figures to collectors and enthusiasts worldwide. Explore a vast collection of Bearbricks, ranging from classic designs to limited-edition releases.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: bearbrickfusion,
      source_code_link: "https://github.com/bron322/BearBrickFusion",
    },
    {
      name: "FYPSystem",
      description:
        "An academic management application, the FYPSystem, serves as a comprehensive platform for both students and professors engaged in the Final Year Project (FYP) process. This system offers a range of features, including streamlined management of project proposals and progress tracking",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
      ],
      image: fypsystem,
      source_code_link: "https://github.com/bron322/SC2002FYPSystem",
    },
    {
      name: "NBAPlayerHoFPrediction",
      description:
        "Utilizing a diverse set of machine learning algorithms, including linear regression, XGBoost, k-nearest neighbors, and the random forest classifier, this project focuses on predicting NBA Hall of Fame (NBAHoF) players.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
      ],
      image: nbaplayer,
      source_code_link: "https://github.com/bron322/NBAPlayersHoFPrediction",
    },
  ];
  
  export { services, technologies, experiences, projects, socials };