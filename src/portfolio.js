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
  title2: "Vedansh",
  logo_name: "vedansh.v()",
  // nickname: "harry / picleric",
  full_name: "Vedansh Vijaywargiya",
  subTitle: "Full Stack Developer, Open Source Contributor, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1mcpvXVvrc8qcVbIzy2UhzBhijUg1Wr7z/view?usp=drive_link",
  mail: "mailto:im.vedanshvijay2002@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/vvHacker007/",
  linkedin: "https://www.linkedin.com/in/vedansh-vijaywargiya/",
  gmail: "im.vedanshvijay2002@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  facebook: "https://www.facebook.com/vedansh.vijaywargiya/",
  twitter: "https://twitter.com/vedansh_v_/",
  instagram: "https://www.instagram.com/sanecracker/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly efficient Backend and interactive User Interfaces for web applications",
        "⚡ Building responsive website front end using HTML, CSS, ReactJS",
        "⚡ Creating application backend in Java, Spring Boot, Python, Ruby on Rails, Flask, Django and Fast-API",
        "⚡ Integration of third party services such as Azure/ AWS / GCP",
      ],
      softwareSkills: [
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Gradle",
          fontAwesomeClassname: "simple-icons:gradle",
          style: {
            color: "#02303A",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#383435",
          },
        },
        {
          skillName: "ELK Stack",
          fontAwesomeClassname: "simple-icons:elastic",
          style: {
            color: "#00ADD8",
          },
        },

        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "Kibana",
          fontAwesomeClassname: "simple-icons:kibana",
          style: {
            color: "#005571",
          },
        },
        {
          skillName: "Rails",
          fontAwesomeClassname: "simple-icons:rubyonrails",
          style: {
            color: "#D30001",
          },
        },
        {
          skillName: "Golang",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#00ADD8",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#A8B9CC",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
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
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#0c4b33",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "simple-icons:swagger",
          style: {
            color: "#85EA2D",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },
        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
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
        "⚡ Experience with Continuous Integration and Deployment",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
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
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
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
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
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
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "DynamoDB",
          fontAwesomeClassname: "simple-icons:amazondynamodb",
          style: {
            color: "#4053D6",
          },
        },
        {
          skillName: "Aerospike",
          fontAwesomeClassname: "simple-icons:aerospike",
          style: {
            color: "#C22127",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
        {
          skillName: "GoDaddy",
          fontAwesomeClassname: "simple-icons:godaddy",
          style: {
            color: "#1BDBDB",
          },
        },
        {
          skillName: "Cloudflare",
          fontAwesomeClassname: "simple-icons:cloudflare",
          style: {
            color: "#F38020",
          },
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "simple-icons:cloudinary",
          style: {
            color: "#3448C5",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "SRM Institute of Science and Technology",
      subtitle: "Bachelors in Computer Science and Engineering",
      logo_path: "SRM_Logo.png",
      alt_name: "SSEC",
      duration: "2019 - 2023",
      descriptions: [
        "⚡  I am a Computer Science and Engineering graduate.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, OS, Distributed Systems etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've learnt during my tenure. ",
      ],
      website_link: "https://www.srmist.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud",
      subtitle: "Google Cloud Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1r0hYt8Pp0N0u_4Tg-poMF1Qv3LkoKVAP/view",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Hackathon",
      subtitle: "Backyard Hacks 2.0",
      logo_path: "hackathon1.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#f47e2c",
    },
    {
      title: "Hackathon",
      subtitle: "HyperHacks",
      logo_path: "hackathon2.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    // {
    //   title: "A300: Atlas Security",
    //   subtitle: "MongoDB University",
    //   logo_path: "mongo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
    //   alt_name: "MongoDB University",
    //   // color_code: "#F6B808",
    //   color_code: "#47A048",
    // },
    {
      title: "Contributor's Hack",
      subtitle: "Hakin Codes",
      logo_path: "HakinCodes.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1xvyy1M05lQN-s2VKw_Qvz6E7rPwrK2qm/view?usp=sharing",
      alt_name: "Opensource Event",
      color_code: "#fefd7b",
    },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    {
      title: "Olympiad",
      subtitle: "Ramanujan Mathematics Olympiad",
      logo_path: "Olympiad.png",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#fffbf3",
    },
    {
      title: "Competitive Programming",
      subtitle: "Reply Challenges",
      logo_path: "Reply.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1KamrXJPTrF3zfMuEerbSnFUjOkt-agKT/view",
      alt_name: "Reply",
      color_code: "#2AAFED",
    },
    {
      title: "Competitive Programming",
      subtitle: "Google Hash Code",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
      alt_name: "Reply",
      color_code: "#2AAFED",
    },
    {
      title: "Training",
      subtitle: "30 Days of Open Source",
      logo_path: "CFC.jfif",
      certificate_link:
        "https://drive.google.com/file/d/1SAKHjKisJIY3-FRZQGKLusdsGDusXAjX/view",
      alt_name: "Postman",
      // color_code: "#f36c3d",
      color_code: "#a60000",
    },
    {
      title: "Training",
      subtitle: "Git Learning",
      logo_path: "Progate.png",
      certificate_link:
        "https://drive.google.com/file/d/1sD6GS8f2Fh5MHMWlf5DhXoMhu4mykW-f/view",
      alt_name: "Reply",
      color_code: "#88e7ce",
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
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am working as a full time software developer with an experience of about 1 year and have done 5+ internships during my tenure in college. I've done projects both as a solo developer and in a team. I like contributing to opensource projects in my free time.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Associate Software Engineer",
          company: "Tekion Corp.",
          company_url: "https://tekion.com/",
          logo_path: "Tekion_logo.jpeg",
          duration: "Jul 2023 - Present",
          location: "On-Site",
          description: `Achieved cost savings of millions of dollars for the company by optimizing server performance, including reducing server load and improving latency by merging Elastic Search Indices. Led a 2-person team in the development and maintenance of a reporting tool microservice with a codebase of approximately 6000 lines. Played a key role in developing and maintaining pivotal client-centric services such as customer management, compliance, and vendor management. This involved navigating dependencies across multiple teams and ensuring seamless integration of services. Increased test code coverage of existing services to 85% and consistently delivered all pull requests with 95% and above code coverage. This commitment to quality assurance helped improve the reliability and stability of the codebase.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#00bfa5",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Associate Software Engineer Intern",
          company: "Tekion Corp.",
          company_url: "https://tekion.com/",
          logo_path: "Tekion_logo.jpeg",
          duration: "Jan 2023 - Jun 2023",
          location: "On-Site",
          description: `Enhanced system performance by reducing latency by 2000ms through the integration of parallelism into an existing sequential message delivery system. This improvement facilitated faster and non-blocking approvals, enhancing operational efficiency. Significantly improved development efficiency by reducing documentation time by 80% through the integration of Swagger API into 10 microservices. Recognized by the VP of the company for contributions to a security boot camp, particularly for writing secure and clean code. Actively contributed to identifying unsecured code in the codebase and refactored unclean code, improving overall code quality system efficieny and security posture.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#00bfa5",
        },
        {
          title: "Full Stack Developer Intern",
          company: "Reczee",
          company_url: "https://www.reczee.com/",
          logo_path: "reczee_logo.jpeg",
          duration: "Aug 2022 - Dec 2022",
          location: "Remote",
          description: `Implemented OAuth2.0 flow for Microsoft Graph API to seamlessly integrate Outlook Calendar events with the application. Strategically targeted approximately 20% of the user base by integrating the Outlook Graph API, enhancing user experience. Enabled the scheduling of online interview meetings by checking user's available slots, streamlining the interview process.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Research Intern",
          company: "Samsung",
          company_url: "https://www.samsung.com/",
          logo_path: "Sasung_logo.jpeg",
          duration: "Feb 2022 - Aug 2022",
          location: "Remote",
          description: `Conducted in-depth research on real-time video processing techniques, exploring multiple approaches to enhance efficiency. Designed and implemented workflow architectures to seamlessly integrate models into real-time mobile applications, improving overall performance. Demonstrated strong problem-solving skills by optimizing solutions for real-time video processing challenges.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#000000",
        },
        {
          title: "Software Developer Intern",
          company: "FreeCAD",
          company_url: "https://www.freecad.org/",
          logo_path: "FreeCAD-logo.svg.png",
          duration: "Dec 2021 - Feb 2022",
          location: "Remote",
          description: `Developed 3-D CAD features for a manufacturing company, facilitating the design and assembly of tools for machines. Applied object-oriented design principles to enhance software functionality and scalability. Successfully refactored legacy C++ codebase to Python, improving code maintainability and performance.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#ee3c26",
        },
        {
          title: "Machine Learning Intern",
          company: "Technocolabs",
          company_url: "https://technocolabs.com/",
          logo_path: "Technocolabs.jfif",
          duration: "Sept 2020 - Oct 2020",
          location: "Remote",
          description: `Analysed the changes before and after people started using sanitizers using the covid-19 dataset. Built and analysed several predictive models for defaulting user’s credit card and deployed it on a full-stack website using Flask. Made a predictive model for Blood Donation for Future Expectancy and deployed it on a fully-fledged website. Increased productivity and problem-solving techniques by 20%.`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Data Science Intern",
          company: "The Sparks Foundation",
          company_url: "hhttps://thesparksfoundation.info/",
          logo_path: "TSF.png",
          duration: "Aug 2020 - Sept 2020",
          location: "Remote",
          description: `Developed predictive models and deployed it on a full-stack website using Flask. Used Boxplot, Heatmap and Confusion Matrix for data visualization. Deep analysis on the superstore dataset using Bar Plots, Bar Charts, Pair Plots and Joint Plots for specific regions.`,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "R&D Member",
          company: "Webarch Club",
          company_url: "https://www.webarchsrm.com/",
          logo_path: "Webarch.jfif",
          duration: "Mar 2020 - Nov 2020",
          location: "SRM IST Kattankulathur",
          description:
            "Member responsibilities were to help students in project planning, review issues and pull requests, ensure smooth progress and help juniors out in their difficulties.",
          color: "#4285F4",
        },
        {
          title: "Campus Leader",
          company: "Code For Cause",
          company_url: "https://www.codecau.se/",
          logo_path: "CFC.jfif",
          duration: "Nov 2020 - Present",
          location: "SRM IST Kattankulathur",
          description:
            "Held numerous workshops and distributed learning content for freshers. Contributed to development of the causefolio website displaying the information about the Code for Cause Community.",
          color: "#a60000",
        },
        {
          title: "Machine Learning - Research Member",
          company: "Next Tech Lab",
          company_url: "https://nextech.io/",
          logo_path: "NTL.jfif",
          duration: "Oct 2020 - Present",
          location: "SRM IST Kattankulathur",
          description:
            "Responsibilities were to build fast and efficient machine learning models, have talks on research topics related to computer vision and deep learning. Build team projects, intract with fellow members and ensure smooth progress and help juniors out in their difficulties.",
          color: "#62cff0",
        },
        {
          title: "Campus Ambassador",
          company: "Bagcampus",
          company_url: "https://bagcampus.in/",
          logo_path: "Bagcampus.jpg",
          duration: "Dec 2020 - May 2021",
          location: "SRM IST Kattankulathur",
          description:
            "Spread Awareness of new Technologies, Companies and new Opportunities to Students and Grow Bagcampus Community.",
          color: "#0059c9",
        },
        {
          title: "Volunteer",
          company: "Google Crowdsource",
          company_url: "https://crowdsource.google.com/",
          logo_path: "GCS.jfif",
          duration: "Sept 2020 - Present",
          location: "Remote",
          description:
            "As a member of the global Crowdsource community one can gain recognition from other Crowdsourcers and Google.",
          color: "#ffffff",
        },
        {
          title: "Student Volunteer",
          company: "National Service Scheme",
          company_url: "https://nss.gov.in/",
          logo_path: "NSS.jfif",
          duration: "Dec 2019 - May 2020",
          location: "SRM IST Kattankulathur",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#282b6c",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Backend Projects, build Python Scripts and setup Cloud Infrastructures. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo.jpeg",
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
