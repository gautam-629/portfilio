import { BsCircleFill } from "react-icons/bs";
import { IProject, ISkill, Service } from "./types";

export const services: Service[] = [
    {
        icon: '/img/laptop.png',
        title: 'Frontend Development',
        about: "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
    },

    {
        icon: '/img/backend.png',
        title: 'Backend Development',
        about: "handle database, server, api using <b>Express </b> & other popular frameworks",
    },

    {
        icon: '/img/mobile.png',
        title: 'Mobile App Development',
        about: 'I can build a beautiful and scalable mobile application using React Native'

    }
]

export const language: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: "javascript",
        level: "70"
    },
    {
        Icon: BsCircleFill,
        name: "node js",
        level: "65"
    },
    {
        Icon: BsCircleFill,
        name: "React-native",
        level: "80"
    },
    {
        Icon: BsCircleFill,
        name: "java",
        level: "70"
    },
    {
        Icon: BsCircleFill,
        name: "Next js",
        level: "70"
    },
    {
        Icon: BsCircleFill,
        name: "Typescript",
        level: "60"
    }
]

export const tools: ISkill[] = [
    {
        Icon: BsCircleFill,
        name: "Figma",
        level: "70"
    },
    {
        Icon: BsCircleFill,
        name: "Photoshop",
        level: "45",
      }
]

export const projects: IProject[] = [
    { 
      name: "Ecommerce",
      description:
        "This app is used to show and purchase a goods through the Online",
      image_path: "/img/ecommerce.png",
      deployed_url: "#",
      github_url: "https://github.com/gautam-629/MERN-Ecommerce.git",
      category: ["all"],
      key_techs: ["React", "Node", "Express","Mongodb"],
    },
      { 
        name: "Food Ordering",
        description:
          "This app is used to show and purchase a Foods through the Online",
        image_path: "/img/food.png",
        deployed_url: "#",
        github_url: "https://github.com/gautam-629/khaja-ghar-php.git",
        category: ["all"],
        key_techs: ["php", "Jquery", "Mysql","javascript"],
      },
  ];
  
  