import portfolioImg01 from "../images/snnozz.png";
import portfolioImg02 from "../images/fit_right.jpg";
import portfolioImg03 from "../images/health_bridge.png";
import portfolioImg04 from "../images/news_hub.png";
import portfolioImg05 from "../images/CineVerse.png";
import portfolioImg06 from "../images/Menstru_Ease.jpg";


const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "Personal",
    title: "Snoozz",
    description:
      "Snoozz.in is a portfolio website for Snoozz- an advertising company. The portfolio highlights various work/ads done by Snoozz and all the services that they provide.",
    technologies: [ "HTML","CSS", "JavaScript", "PHP", "GSAP"],
    siteUrl: "https://snoozz.in/",
  },
  {
    id: "02",
    imgUrl: portfolioImg02,
    category: "Personal",
    title: "Fit Right",
    description:
      "FitRight is an already existing offline nuts & bolts business. This project provides FitRight with a seamless and user-friendly Ecommerce Platform, thus expanding its customer base.",
    technologies: ["React", "Material UI", "Node.js", "MongoDB"],
    siteUrl: "https://github.com/Archiesachin/FitRight_sem5",
  },
  {
    id: "03",
    imgUrl: portfolioImg03,
    category: "Hackathon",
    title: "Health Bridge",
    description:
      "HealthBridge is an EHR system using OCR and AI/ML to extract medicine names from prescriptions, aiding healthcare providers in making informed decisions based on patient history for improved care outcomes.",
    technologies: ["HTML", "CSS", "Flask", "MySQL", "OCR"],
    siteUrl: "https://github.com/Archiesachin/HealthBridge",
  },
  {
    id: "04",
    imgUrl: portfolioImg04,
    category: "Personal",
    title: "News Hub",
    description:
      "News Hub offers categorized searches for streamlined discovery and allows users to save articles for future reference, enhancing convenience.",
    technologies: ["HTML", "CSS", "JavaScript", "PWA"],
    siteUrl: "https://github.com/Archiesachin/NEWS_HUB_PWA",
  },
  {
    id: "05",
    imgUrl: portfolioImg05,
    category: "Personal",
    title: "CineVerse",
    description:
      "CineVerse is a movie recommendation system based on 3 recommendation models: Content Based Filtering , Mood Based Filtering , Collaborative Filtering.",
    technologies: ["HTML", "Flask", "MongoDB", "SVD Algorithm", 'Similarity Scores'],
    siteUrl: "https://github.com/Archiesachin/CineVerse-Movie_Rec",
  },

  {
    id: "06",
    imgUrl: portfolioImg06,
    category: "Hackathon",
    title: "MenstruEase",
    description:
      "MenstruEase is a web application dedicated to empowering individuals to take control of their menstrual health and hygiene. It is a comprehensive solution with a range of features for both users and healthcare professionals.",
    technologies: ["React", "OCR", "Flask", "MongoDB"],
    siteUrl: "https://github.com/Archiesachin/SheCanCode_MenstruEase",
  },
  
];

export default portfolios;