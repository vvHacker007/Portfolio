/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello there",
  title2: "Mycale",
  logo_name: "My Portfolio",
  full_name: "Mycale C. Radcliffe",
  subTitle:
    "A new college grad developer looking to experiment and find what sticks.",
  resumeLink:
    "https://docs.google.com/document/d/1ebL1p8ao6_fdgb2vLGTBXuRfP4nyRCDi6xIF7LCEvj8/edit?usp=sharing",
  mail: "mailto:mcradcliffe2490@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/mcradcliffe2490",
  linkedin: "https://www.linkedin.com/in/mcradcliffe/",
  gmail: "mcradcliffe2490@gmail.com",
  facebook: "https://www.facebook.com",
  twitter: "https://twitter.com/BigPapiKite",
  instagram: "https://www.instagram.com/mcradcliffe/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "Building responsive website front end using ReactJS",
        "Some experience creating application backend in Node and Express",
        "Currently employed by Captech Consulting",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Other Related Skills",
      fileName: "CloudInfraImg",
      skills: [
        "Experience with Firebase Authentication and Firestore",
        "Experience with computer hardware, built several computers for myself",
        "Familiar with Linux, MacOS, and Windows",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PCnBuilding",
          fontAwesomeClassname: "simple-icons:pcgamingwiki",
          style: {
            color: "#7d63ff",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "logos:linux-tux",
        },
        {
          skillName: "Mac",
          fontAwesomeClassname: "wpf:mac-os",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Windows",
          fontAwesomeClassname: "logos:microsoft-windows",
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "North Carolina Agricultural and Technical State University",
      subtitle: "Bachelors in Computer Science",
      logo_path: "Aggies_logo.png",
      alt_name: "NCAT",
      duration: "2018 - 2022",
      descriptions: [
        "I'm currently finishing the last semester for my Bachelors in Computer Science.",
        "Here are some of the classes I've taken: ",
        "Data Structures | " +
          "Algorithms | " +
          "Programming Languages | " +
          "Database Design | " +
          "Python for Data Science | " +
          "Operating Systems | " +
          "AI & Machine Learning | " +
          "Theory of Computing | " +
          "Discrete Math | " +
          "Internet Systems | " +
          "In Progress Courses | " +
          "Software Engineering | " +
          "Computer Arch & Org | " +
          "Linear Algebra",
      ],
      website_link: "https://www.ncat.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud",
      subtitle: "Google Cloud Fundamentals: Core Infrastructure",
      logo_path: "google_logo.png",
      certificate_link:
        "https://coursera.org/share/2c67f7b5f82629798a33c61c845c8583",
      alt_name: "Google Cloud",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Hackathon",
      subtitle: "HackCLT 2018",
      logo_path: "HackCLT.png",
      alt_name: "hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Hackathon",
      subtitle: "HackNCAT 2020",
      logo_path: "HackNCAT.png",
      alt_name: "hackathon",
      color_code: "#2AAFED",
    },
    {
      title: "Hackathon",
      subtitle: "HackNCAT 2021",
      logo_path: "HackNCAT.png",
      alt_name: "hackathon",
      color_code: "#2AAFED",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Extracurriculars",
  description:
    "I've completed several internships and worked on a few small projects for school and on the side. The details " +
    "of my experiences will be layed out here.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "STEP Intern",
          company: "Google",
          company_url: "https://careers.google.com/",
          logo_path: "google_logo.png",
          duration: "May 2019 - Aug 2019, May 2020 - Aug 2020",
          location: "Mountain View, CA and Remote",
          description:
            "(2019) Added full stack functionality for an aspect of a new internal web tool for the DialogFlow team " +
            "which will allow for direct access to look at and manipulate user data via the web tool instead of " +
            "manually querying the database.\n" +
            "(2020) Worked on several personal projects that used vanilla Javascript, HTML, CSS, and Java Servlets\n" +
            "Worked on a project with two other interns where we began building a web application for helping college " +
            "students find housing, where I specifically worked on User Authentication (see github for the code)\n",
          color: "#ee3c26",
        },
        {
          title: " Front End Intern",
          company: "IBM",
          company_url: "https://www.ibm.com/us-en?ar=1",
          logo_path: "IBM_logo.jpg",
          duration: "Jun 2021 - Aug 2021",
          location: "Remote",
          description:
            "Developed an internal tool to increase productivity by comparing two maintained files against " +
            "an excel specs sheet to find differences and produce a file documenting these differences\n" +
            "Developed an internal web tool using Node.js that reads xml files given by the product engineering team " +
            "and produces a webpage that has the xml data organized into tables and functions that can be copied " +
            "instead of manually coding them\n",
          color: "#0071C5",
        },
        {
          title: "Undergraduate Research Assistant",
          company: "North Carolina Agricultural and Technical State University",
          company_url:
            "https://www.ncat.edu/provost/undergraduate-research.php",
          logo_path: "NCAT_research.png",
          duration: "Aug 2020 - Present",
          location: "Greensboro, NC",
          description:
            "Worked in research on detecting sybils on twitter and helped write a " +
            "survey paper on quantum machine learning (will attach a link when it's published)",
          color: "#ffc601",
        },
      ],
    },
    {
      title: "Extracurriculars",
      experiences: [
        {
          title: "Interview Prep Student Interest Group Co-Lead",
          company: "ACM",
          company_url: "https://www.acm.org/",
          logo_path: "ACM_logo.png",
          duration: "Aug 2020 - May 2021",
          location: "Greensboro, NC",
          description:
            "Help prepare students for technical interviews for internships and full time opportunities",
          color: "#4285F4",
        },
        // {
        //   title: "Campus Leader",
        //   company: "Code For Cause",
        //   company_url: "https://www.codecau.se/",
        //   logo_path: "CFC.jfif",
        //   duration: "Nov 2020 - Present",
        //   location: "SRM IST Kattankulathur",
        //   description:
        //     "Held numerous workshops and distributed learning content for freshers. Contributed to development of the causefolio website displaying the information about the Code for Cause Community.",
        //   color: "#a60000",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "These are some of the various projects I've worked on in school and in my personal time. You can click a box to be " +
    "taken to the github repository for that project",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "M_profile_pic.jpeg",
    description:
      "You can contact me at any of the links below. Email is the best way to contact me and I'm usually good about " +
      "responding within 2-3 days",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't currently have anything on my blog, but I plan to start blogging soon. I like to write, so I'll probably" +
      " blog a lot about the things I'm interested in like tech, media, and theology",
    link: "https://medium.com/@mcradcliffe2490",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "College Roomate Finder",
      url: "https://github.com/googleinterns/step120-2020/pull/10",
      description:
        "This was an internship capstone project that would allow college students to find college students" +
        "to room with when trying to lease housing. I worked on the user authentication for the site",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
          fill: "#",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "1",
      name: "Marvel Comic Finder",
      url: "https://github.com/mcradcliffe2490/HackNCAT-APP_Team",
      description:
        "A web application that can help recommend you marvel comics to read using the Marvel API",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "2",
      name: "Blog Post Sample",
      url: "https://github.com/mcradcliffe2490/react_frontend_sample",
      description:
        "Short sample of the front end of a blog site made in React. Fake database using JSONPlaceholder API",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Basic Command Shell",
      url:
        "https://github.com/mcradcliffe2490/Operating-Systems-Work/tree/master/ash",
      description:
        "Basic command shell made for my operating systems class. Takes in basic commands like cd, ls, etc. " +
        "Run in your terminal to start it",
      languages: [
        {
          name: "C++",
          iconifyClass: "logos:c-plusplus",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
