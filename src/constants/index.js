import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    narayanaSchool,
    c,
    express,
    django,
    java,
    python,
    bootstrap,
    github,
    mysql,
    postgres,
    blogApp,
    farmers,
    news,
    formula1,
    travel,
    cbit,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "work",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  // const services = [
  //   {
  //     title: "Web Developer",
  //     icon: web,
  //   },
  //   {
  //     title: "React Native Developer",
  //     icon: mobile,
  //   },
  //   {
  //     title: "Backend Developer",
  //     icon: backend,
  //   },
  //   {
  //     title: "Content Creator",
  //     icon: creator,
  //   },
  // ];
  
  const technologies = [
    {
      name: "C",
      icon: c,
    },
    {
      name: "Java",
      icon: java,
    },
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
      name: "Bootstrap CSS",
      icon: bootstrap,
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
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "postgres",
      icon: postgres,
    },
    {
      name: "express",
      icon: express,
    },
    {
      name: "django",
      icon: django,
    },
  ];
  
  const experiences = [
    {
      title: "Schooling",
      company_name: "Narayana Olympiad School",
      icon: narayanaSchool,
      iconBg: "#383E56",
      date: "Jan 2013- May 2019",
      points: [
        "I have done my initial schooling from Narayana Olympiad School,Old Bowenpally.",
        "Subjects Studied: Mathematics, English, Science, Social Studies, Telugu and Hindi.",
        "Member of the School Table Tennis Club, Participant in Annual School Plays",
        "CGPA : 9.8 ",
      ],
    },
    {
      title: "Intermediate",
      company_name: "Narayana Junior College",
      icon: narayanaSchool,
      iconBg: "#383E56",
      date: "July 2019 - Feb 2021",
      points: [
        "I have studied my intermediate education in Narayana Junior College,Nallakunta",
        "My EAMCET rank is 2801",
        "I have also studied for JEE Mains. Mainly focused on getting into a high end engineering college so that I can get good Learning and placements.",
        "Percentage : 98.2%",
      ],
    },
    {
      title: "BE",
      company_name: "Chaitanya Bharathi Institute of Technology",
      icon: cbit,
      iconBg: "#383E56",
      date: "Nov 2021 ",
      points: [
        "Pursuing my BE in CSE(AI&ML) from CBIT,Gandipet.",
        "I have learnt many technologies and developed skills such as DSA,DAA,SQL,etc.",
        "Represented the college in intercollege competitions and won gold in Table Tennis.",
        "CGPA : 9.55",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I clinched the first-place title in the Planesprint hackathon, a promising startup.",
      name: "Planesprint",
    },
    {
      testimonial:
        "I am now a certified Test Automation Engineer accredited by AccelQ. ",
      name: "AccelQ",
    },
    {
      testimonial:
        " I clinched the third-place spot in the Cascade Arcade event organized by COSC.",
      name: "CbitOSC",
    },
  ];
  
  const projects = [
    {
      name: "Blog App",
      description:
        "Web-based platform were trainers can post their blogs and influencers can view the posts and rate the posts.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "mySql",
          color: "pink-text-gradient",
        },
      ],
      image: blogApp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Farmers Connect",
      description:
        "a comprehensive web platform for farmers, facilitating seamless connections between farmers while offering services such as access to the latest agricultural news, seeds, fertilizers,etc.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "sqLite",
          color: "pink-text-gradient",
        },
      ],
      image: farmers,
      source_code_link: "https://github.com/",
    },
    {
      name: "NewsChimp",
      description:
        " A web-based platform delivering daily news updates in two-line summaries, catering to user's time constraints.",
      tags: [
        {
          name: "reactJS ",
          color: "blue-text-gradient",
        },
        {
          name: "restAPI",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: news,
      source_code_link: "https://github.com/",
    },
    {
      name: "Family Travel Tracker",
      description:
        " A web application, enabling families to effortlessly monitor individual travel histories in one centralized platform, fostering seamless organization and memorable adventures",
      tags: [
        {
          name: "reactJS ",
          color: "blue-text-gradient",
        },
        {
          name: "postgres",
          color: "green-text-gradient",
        },
        {
          name: "expressJS",
          color: "pink-text-gradient",
        },
      ],
      image: travel,
      source_code_link: "https://github.com/",
    },
    {
      name: "Formula 1",
      description:
        "a dynamic F1 website, empowering users to stay updated with the latest news, purchase tickets, and explore detailed driver profiles, delivering an immersive experience for motorsport enthusiasts.",
      tags: [
        {
          name: "html ",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: formula1,
      source_code_link: "https://github.com/",
    },
  ];
  
  export {technologies, experiences, testimonials, projects };