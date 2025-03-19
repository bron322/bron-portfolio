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
    micron,
    sap,
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
    imageclasifier,
    counterstrike,
    carpark,
    electricvehicle,
    resumecategorization,
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
      title: "Data Scientist",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: backend,
    }
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
      title: "Full Stack Developer, Intern",
      company_name: "SAP Asia Pte. Ltd.",
      icon: sap,
      iconBg: "#E6DEDD",
      date: "January 2025 - July 2025",
      points: [
        "Developed a Next.JS demo web app to showcase the integration of a new GenAI feature into an existing SAP product.",
        "Implemented a Jenkins CI/CD pipeline to automate build, test, and deployment processes.",
        "Actively participated in scrum practices, contributing to sprint planning, stand-ups, and retrospectives.",
      ],
    },
    {
      title: "Data Scientist, Intern",
      company_name: "Micron Technology, Inc.",
      icon: micron,
      iconBg: "#E6DEDD",
      date: "May 2024 - August 2024",
      points: [
        "Utilised Python, Pandas and XGBoost for data analysis and model development to optimize wafer classification.",
        "Achieved significant 50% Test Time Reduction while maintaining high accuracy.",
        "Enhanced production efficiency and reduced testing costs and time by streamlining the wafer testing processes.",
      ],
    },
    {
      title: "Software Engineer, Intern",
      company_name: "National Institute of Education, Singapore",
      icon: nie,
      iconBg: "#383E56",
      date: "December 2023 - December 2024",
      points: [
        "Focused on capturing students' emotions during reading and note-taking activities.",
        "Led the design and implementation of an intuitive and user-friendly interface for the emotion analytics tool.",
        "Ensured seamless integration with Knowledge Forum's existing platform.",
      ],
    },
    {
      title: "Data Science Education Project Assistant/Intern",
      company_name: "S-Lab for Advanced Intelligence | NTU, Singapore",
      icon: ntu,
      iconBg: "#E6DEDD",
      date: "October 2023 - March 2024",
      points: [
        "Proficiency in translating and adapting machine learning code and content from Chinese to English.",
        "Assisting students in learning machine learning coding in Python to foster knowledge transfer and collaboration.",
      ],
    },
    {
      title: "Student",
      company_name: "Nanyang Technological University, Singapore",
      icon: ntu,
      iconBg: "#383E56",
      date: "August 2022 - Present",
      points: [
        "Pursuing Bachelor Degree of Science in Data Science and Artificial Intelligence.",
        "Relevant courses: Data Structures & Algorithm, Software Engineering, Algorithm Design and Analysis, Data Analysis with Computer, Artificial Intelligence.",
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
      source_code_link: "https://github.com/wytan12/EmotionAnalysis.git",
    },
    {
      name: "Advanced Car Parking Management System",
      description:
        "This project is an advanced car parking management system that utilizes deep learning techniques to monitor and manage parking spaces. The system is powered by a VGG16 model to classify parking spaces as either occupied or vacant.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "deep learning",
          color: "pink-text-gradient",
        },
      ],
      image: carpark,
      source_code_link: "https://github.com/bron322/CarParkSpaceDetection",
    },
    {
      name: "EV Population Power BI",
      description:
        "This Power BI electric vehicle population project involves analyzing the distribution of electric vehicles (EVs) across various regions in United States.",
      tags: [
        {
          name: "PowerBI",
          color: "blue-text-gradient",
        },
        {
          name: "DataAnalytics",
          color: "green-text-gradient",
        },
      ],
      image: electricvehicle,
      source_code_link: "https://github.com/bron322/EVPopulationPowerBI",
    },
    {
      name: "Resume Categorization",
      description:
        "Using Streamlit for an interactive web application and a Kaggle dataset for training, the goal is to automatically classify resumes into predefined categories. The project showcases the use of natural language processing (NLP) and classification algorithms to streamline the resume screening process.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Streamlit",
          color: "green-text-gradient",
        },
        {
          name: "LogisticRegression",
          color: "pink-text-gradient",
        },
      ],
      image: resumecategorization,
      source_code_link: "https://github.com/bron322/ResumeCategorization",
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
      name: "Image Classifier",
      description:
        "A simple image classifier implemented using TensorFlow/Keras to predict whether a person in a photo is displaying a happy or sad face. The image classifier model is built using Convolutional Neural Networks (CNNs), a type of deep learning model commonly used for image classification tasks.",
      tags: [
        {
          name: "tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "keras",
          color: "green-text-gradient",
        },
        {
          name: "OpenCV python",
          color: "pink-text-gradient",
        },
      ],
      image: imageclasifier,
      source_code_link: "https://github.com/bron322/ImageClassifier",
    },
    {
      name: "CSGO Pro Player Analysis",
      description:
        "A comprehensive data science initiative aimed at analysing the performance metrics of CSGO players. Utilizing machine learning models and data visualization techniques, the project provides valuable resources for enhancing player performance, optimizing team strategies and predicting match outcomes.",
      tags: [
        {
          name: "Pandas",
          color: "blue-text-gradient",
        },
        {
          name: "XGBoost",
          color: "green-text-gradient",
        },
        {
          name: "Shaply",
          color: "pink-text-gradient",
        },
      ],
      image: counterstrike,
      source_code_link: "https://github.com/bron322/CSGOProPlayersAnalysis",
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
