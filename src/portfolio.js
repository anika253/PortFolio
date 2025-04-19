/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anika Sharma",
  title: "Hi all, I'm Anika",
  subTitle: emoji(
    "Full Stack Developer with a strong foundation in Data Structures, Algorithms, and Competitive Programming."
  ),
  resumeLink: `https://docs.google.com/viewer?url=${encodeURIComponent(
    "https://drive.google.com/uc?id=1TeIx9KczfblM2Fvfku5ocYCXaLCixsRT"
  )}`, // Forces direct download
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anika253",
  linkedin: "https://www.linkedin.com/in/anika-sharma-549555257/",
  gmail: "anikasharma253@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "DSA and Competitive Programming",
      fontAwesomeClassname: "fas fa-brain"
    },

    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "NIT HAMIRPUR",
      //logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Electronics and Communication engineering",
      duration: "November 2022 - present || CGPA : 7.27"

      //desc: "Participated in the research of XXX and published 3 papers.",
      /*descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web developer Intern",
      company: "Cantilever",
      companylogo: require("./assets/images/cantilever logo.jpeg"),
      date: "Aug '25 to Sep'25", // as per your resume
      desc: "Developed and maintained dynamic web applications using the MERN stack (MongoDB, Express.js, React, Node.js), enhancing user experience and optimizing performance.",
      descBullets: [
        "Implemented REST APIs with Express.js and Node.js, ensuring seamless integration between the front-end and back-end, and contributing to scalable, efficient web solutions.",
        "Contributed to the design and development of user‑friendly interfaces, ensuring responsive design and cross‑browser compatibility using React and CSS frameworks."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "SOME OF MY COLLABORATIVE WEB DEV PROJECTS",
  projects: [
    {
      image: require("./assets/images/aajivika.avif"), // Add this image in assets/images folder
      projectName: "Aajivika",
      projectDesc:
        "Led the development of a React + Firebase-based web platform to empower unorganized sector workers, resulting in a 40% increase in platform users and 30% employment match success.",
      footerLink: [
        {
          name: "View GitHub",
          url: "https://github.com/anika253/AAJIVIKA.final"
        }
      ]
    },
    {
      image: require("./assets/images/crypto market.jpeg"), // Replace/add image accordingly
      projectName: "Crypto Market Index",
      projectDesc:
        "Built a React + Redux dashboard for real-time cryptocurrency updates using CoinGecko API. Implemented dynamic market visualization and user-friendly UI.",
      footerLink: [
        {
          name: "View GitHub",
          url: "https://github.com/anika253/crypto-market-index" // Placeholder; update if exists
        }
      ]
    },
    {
      image: require("./assets/images/convPortal.jpeg"), // Add this image too
      projectName: "Convocation Portal",
      projectDesc:
        "Developed a full-stack MERN application for convocation registration, admin control, and certificate generation. Implemented secure login, admin dashboard, and MongoDB integration.",
      footerLink: [
        {
          name: "View GitHub",
          url: "https://github.com/anika253/convocationPortal123"
        }
      ]
    },

    {
      image: require("./assets/images/defi.jpeg"), // Add this image too
      projectName: "AI-powered-DeFi-Advisor ",
      projectDesc:
        "DeFi Robo-Adviser is an AI-driven decentralized finance (DeFi) trading assistant that automates investment strategies, executes secure trades, and mitigates risks using cutting-edge technologies",
      footerLink: [
        {
          name: "View GitHub",
          url: "https://github.com/anika253/AI-powered-DeFi-Advisor "
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

//Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

//Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  // ← add your link here:
  resumeLink: `https://docs.google.com/viewer?url=${encodeURIComponent(
    "https://drive.google.com/uc?id=1TeIx9KczfblM2Fvfku5ocYCXaLCixsRT"
  )}`,
  display: true
};
// … your existing socialMediaLinks above …

// Coding Profiles Section
const codingProfiles = {
  // set false to hide this section
  heading: "💻 Coding Profiles",
  subHeading: "Where I solve problems and grow my skills",
  profiles: [
    {
      platform: "LeetCode",
      url: "https://leetcode.com/22bec020",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
    },
    {
      platform: "GeeksforGeeks",
      url: "https://auth.geeksforgeeks.org/user/22becevps",
      icon: require("./assets/images/gfg.jpeg")
    },
    {
      platform: "Codolio",
      url: "https://codolio.com/profile/RuLapgQq",
      icon: require("./assets/images/codolio.jpeg") // put your Codolio icon in assets/images
    }
  ],
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "8580978005",
  email_address: "anikasharma253@gmail.com"
};
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  codingProfiles,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
