import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    java,
    git,
    figma,
    firebase,
    terado,
    starbucks,
    techquench,
    techefect,
    carrent,
    jobit,
    tripguide,
    python,
    education,
    kota,
    jodhpur
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
      id: "contact",
      title: "Contact",
    },
  ];
  
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
      title: "Freelancer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: " Speroh Labs Private Limited",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Aug 2023 - Oct 2023",
      points: [
        "Developing and maintaining web applications using React.js, Nextjs and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Spearheaded the development of an interactive dashboard using Next.js and Shadcn UI, resulting in a 25% increase in user engagement and improved client data visualization.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Techquench",
      icon: techquench,
      iconBg: "#E6DEDD",
      date: "April 2023 - June 2023",
      points: [
        "Collaborated with senior developers to enhance app performance, reducing load times by 15% and implementing React Native, leading to a 30% reduction in development time.",
        "Contributed to the writing of clean and efficient code, resulting in a 20% increase in app performance.",
        "Played a key role in the adoption of React Native, showcasing adaptability and a willingness to learn new technologies.",
        "Gained practical experience in app development and optimization.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Terado",
      icon: terado,
      iconBg: "#E6DEDD",
      date: "Aug 2022 - Oct 2022",
      points: [
        "Streamlined project workflow, ensuring timely app delivery and integrating REST API and GraphQL, resulting in a 20% improvement in app responsiveness.",
        "Demonstrated a commitment to delivering high-quality solutions within project deadlines.",
        "Showcased the ability to work with complex technologies such as REST API and GraphQL.",
        "Contributed to the enhancement of user satisfaction through improved app responsiveness.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Techefect",
      icon: techefect,
      iconBg: "#383E56",
      date: "Jan 2022 - March 2022",
      points: [
        "Played a key role in implementing new website features, contributing to a 30% improvement in website effectiveness and reduced bounce rates.",
        "Demonstrated proficiency in web development technologies and a proactive approach to learning and growth.",
        "Gained practical experience in web development and the delivery of user-focused solutions.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      college_name:
        "K.J. Somaiya Institute of Technology",
      degree: "B.Tech",
      duration: "Jan, 2021 - May, 2024",
      cgpa: "9.13",
      image: education,
    },
    {
      college_name: "Shiv Jyoti Sr. Sec. School, Kota",
      degree: "12th",
      duration: "Jan, 2019 - April, 2020",
      cgpa: "81.89%",
      image: kota,
    },
    {
      college_name: "Montessori Child Centre, Jodhpur",
      degree: "10th",
      duration: "Jan, 2017 - April, 2018",
      cgpa: "89.81%",
      image: jodhpur,
    },
  ];
  
  const projects = [
    {
      name: "KalMiFyn",
      description:
        "An app designed to provide a platform for individuals to express their feelings and engage in conversations, ultimately promoting mental well-being.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "tensorflow",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/richab246/Chatbot",
    },
    {
      name: "AI-Marketplace",
      description:
        "Developing a dynamic Next.js website for Ai-Marketplace, ongoing project updates for efficient management – a robust solution currently under construction.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "postcss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/richab246/Marketplace",
    },
    {
      name: "Bus Recommendation",
      description:
        "A comprehensive application that provides the schedules of private and city buses, allowing users to easily search and plan their journeys based on the origin and destination.",
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
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/richab246/Bus_Recommendation",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
