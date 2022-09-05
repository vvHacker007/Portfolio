/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "thucpn",
  logo_name: "thucpn()",
  // nickname: "harry / picleric",
  full_name: "Thuc Pham",
  subTitle:
    "Full Stack Developer, Blockchain Practitioner, Open Source Enthusiast, Blogger, Startup Dreamer, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1wrkG62HyDgbUOjNxexCT891tcqd83_cK/view?usp=sharing",
  mail: "mailto:thucpn.developer@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/thucpn",
  linkedin: "https://www.linkedin.com/in/thucpn",
  gmail: "thucpn.developer@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/thucpn",
  twitter: "https://twitter.com/thucngocpham",
  instagram: "https://www.instagram.com/thucpn.inst",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website front end using ReactJS and NextJS",
        "⚡ Creating application backend in Node, Express, Prisma and PostgreSQL",
        "⚡ Integration of third party services such as Firebase/ Twilio / Sendgrid",
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
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:next-dot-js",
          style: {
            color: "#9B9B9B",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#9B9B9B",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "simple-icons:nestjs",
          style: {
            color: "#E0234E",
          },
        },
        {
          skillName: "Prisma",
          fontAwesomeClassname: "simple-icons:prisma",
          style: {
            color: "#2D3748",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4169E1",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
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
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration and Countinuous Deployment",
      ],
      softwareSkills: [
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#9B9B9B",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
    {
      title: "Project Management",
      fileName: "ProjectManagement",
      skills: [
        "⚡ Experience analyzing requirements and business rules from customers",
        "⚡ Experience breaking down requirements and estimating the effort",
        "⚡ Experience working on designing prototype for mobile and web applications",
        "⚡ Experience initiating, managing projects and assigning tasks to team members",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Notion",
          fontAwesomeClassname: "simple-icons:notion",
          style: {
            color: "#9B9B9B",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#0052CC",
          },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "simple-icons:slack",
          style: {
            color: "#4A154B",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "FPT University",
      subtitle: "Bachelors in Software Engineering",
      logo_path: "Logo-FPT.webp",
      alt_name: "FPT University",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ Also, I have completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ Activly join activities and societies such as FPT Hackathon, FPT ACM, etc.",
      ],
      website_link: "https://international.fpt.edu.vn/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "University Hackathon",
      subtitle: "Top 1 Minathon Hackathon 2022",
      logo_path: "hackaton.jpg",
      certificate_link:
        "https://drive.google.com/file/d/15d7Skm5R9Fh2bWnelJyBa1Nd6Qm6NNPf/view?usp=sharing",
      alt_name: "University Hackathon",
      color_code: "#ffffff",
    },
    {
      title: "Competitive Programming",
      subtitle: "Top 3 of Qualification Round 1 - TopDev Challenge",
      logo_path: "Logo-xanh-trắng-ngang.png",
      certificate_link:
        "https://drive.google.com/file/d/1XWYN1J1KOQhp8qN_q8LU_4-dQOf11mcT/view?usp=sharing",
      alt_name: "Competitive Programming",
      color_code: "#013b00",
    },
    {
      title: "Coursera Specialization",
      subtitle:
        "Complete courses on Mordern Application Development with Node.js and AWS",
      logo_path: "coursera.png",
      certificate_link:
        "https://drive.google.com/file/d/1dxX06J9A_3O6YVvLm1fCUXUZTv26m5v8/view?usp=sharing",
      alt_name: "Coursera Specialization",
      color_code: "#0055D3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Startup Project",
  description:
    "I love start-up. I aspire to bring the passion for entrepreneurship to everywhere in Vietnam. If you are developing a potential start-up business, contact me for a loyal and dedicated co-founder 🤝",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experiences",
      experiences: [
        {
          title: "Software Engineer",
          company: "HoverIT Singapore",
          company_url: "https://hoverit.com/",
          logo_path: "hoverit.png",
          duration: "Dec 2021 - Present",
          location: "Remote Freelance",
          description: `Join as a remote freelance developer, I helped HoverIT (a startup project) release MVP 3 months faster than expected: image cropping, stores filtering, delivery options, pick-up QR code, dashboard for admin. I am also play a role as a designer to redesign UI, improve UX. I have integrated analysis tool such as Sentry, Fullstory, Facebook Pixel and Google Analytics to track user behavior on the application.`,
          color: "#35F1E0",
        },
        {
          title: "Software Engineer Intern",
          company: "KMS Technology Vietnam",
          company_url: "https://kms-technology.com/",
          logo_path: "kms.png",
          duration: "May 2021 - Aug 2021",
          location: "Internship",
          description: `Developed new features for Visily - a design tool similar to Figma. Improving layout algorithm to increase performance of UI template rendering. Gained hands-on experience with ReactJs, NextJs, Nodejs, ExpressJs, PostgreSQL, APIs, Git, Graphql, Data Structures, Algorithms, and tech principles and culture via team projects, code reviews, pair programming and discussion with product team.`,
          color: "#25A9E0",
        },
      ],
    },
    {
      title: "Startups",
      experiences: [
        {
          title: "Co-Founder, Technical Leader",
          company: "Grabwork",
          company_url: "https://www.grabwork.com.vn/",
          logo_path: "grabwork.png",
          duration: "Nov 2021 - Aug 2022",
          location: "Startup Project",
          description:
            "Grabwork is a startup project that provides SaaS solutions to help small businesses in Vietnam integrate the job board system and conduct online interview with candidates. Grabwork has completed the MVP version with more than 100 candidates and businesses registered to use. In this project, I am responsible for the technical leader and project management. I am also responsible for the design of the UI/UX of the website.",
          color: "#1967D2",
        },
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
