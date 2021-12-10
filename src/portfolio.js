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
        "Some experience working with third party services such as Firebase Authentication and GCP",
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
  subtitle: "Work, Internship and Volunteership",
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
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "https://medium.com/@vedanshvijay/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Mind Space",
      url: "https://www.mindspace.cf/",
      description:
        "This is Blogging website where users can create blogs, follow and unfollow other users, get summarized blog reccomendation on their dashboard and have a personalised searching mechanism.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "1",
      name: "Youtube Downloader",
      url: "https://github.com/vvHacker007/Youtube-Downloader/",
      description:
        "A desktop GUI which can be used to download youtube videos and playlist with desired quality and type on desktop.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "2",
      name: "Tune In",
      url: "https://github.com/vvHacker007/Tune-In",
      description:
        "Tune in is a collaborative music playing system where multiple guests can join a room and enjoy the song being played. Guests can pause and vote to skip the current song.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
      ],
    },
    {
      id: "3",
      name: "Event Scheduler",
      url: "https://github.com/vvHacker007/Event-Scheduler",
      description:
        "It is an all-purpose scheduler software. It is designed to monitor all the activities and give appropriate reminders for them.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Movie Reccomendation System",
      url: "https://github.com/vvHacker007/Movie-Recommendation-Systems",
      description:
        "Made three python kernels explaining and implementing the three different types of movie recommender systems.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "3",
      name: "Login Authenticator",
      url: "https://github.com/vvHacker007/Login-Authenticator",
      description: "Made a template for a Login Authenticator using Flask ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Calculator",
      url: "https://github.com/vvHacker007/Calculator",
      description:
        "Made a GUI based Calculator. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Notepad",
      url: "https://github.com/vvHacker007/Notepad",
      description:
        "Made a GUI based Notepad. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "Tetris",
      url: "https://github.com/vvHacker007/Tetris",
      description: "Made a GUI based arcade game Tetris using pygame.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Steganography",
      url: "https://github.com/vvHacker007/Steganography",
      description:
        "A CLI tool to conceal messages within a file, text, image, or video.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "8",
      name: "Mini Paint",
      url: "https://github.com/vvHacker007/Mini-Paint",
      description: "GUI based Mini Paint Application.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "9",
      name: "Speedtest",
      url: "https://github.com/vvHacker007/Speed-test",
      description:
        "An internet speed testing application which can notify about the download speed, upload speed, and also the reaction time of the connection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "10",
      name: "Cat Classifier",
      url: "https://github.com/vvHacker007/Cat-Classifier",
      description:
        "Binary Cat Classifier made by hard coding Neural Networks in Python without using libraries such as Tensorflow or keras.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "11",
      name: "Snake",
      url: "https://github.com/vvHacker007/Snake",
      description:
        "A snake game which covers all the basic features like score, high score and an automated speed increase simultaneously when the snake eats the food.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "12",
      name: "Score Predictor",
      url: "https://score-predictor-app.herokuapp.com/",
      description:
        "Predicts students score based on the number of hours the student puts in it.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "13",
      name: "Blood Donation Predictor",
      url: "https://blood-donation-predictor-app.herokuapp.com/",
      description:
        "Predicts if one is ready to donate blood based on the user's blood donation history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "14",
      name: "Credit-Card Default Predictor",
      url: "https://default-predictor-app.herokuapp.com/",
      description:
        "Predicts whether user's credit card would be defaulted or not based on the user's bank statements and history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "15",
      name: "Portfolio Website",
      url: "https://vvhacker007.github.io/Portfolio/",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
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
