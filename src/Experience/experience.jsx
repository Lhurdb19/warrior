import React from "react";
import { FaReact, FaCode, FaGithub, FaUsers, FaBookOpen, FaBullhorn, FaDraftingCompass } from "react-icons/fa";
import './Experience.css';

const Experience = () => {
  const experiences =[
    {
      role: "Front-End Developer",
      company: "HejiDev", 
      duration: "2024 - Present",
      description: [
        "Developed NitroFlix, a movie streaming platform using React & TMDb API.",
        "Built NationMeal, a meal recipe web app with TheMealDB API.",
        "Designed and implemented a decentralized NFT dashboard with MetaMask integration.",
        "Created a sports event & player search tool using TheSportsDB API.",
        "Optimized UI/UX across projects using Tailwind CSS, Framer Motion, and Figma.",
      ],
      icon: <FaReact className="exp-icon" style={{color: 'white'}} />,
    },
    {
      role: "Ambassador",
      company: "GUAGE COMPANY",
      duration: "2024 - Present",
      description: [
        "Representing GUAGE COMPANY in community-building initiatives.",
        "Driving user adoption through Web3 education and brand evangelism.",
        "Collaborating on marketing and event campaigns targeting crypto enthusiasts.",
      ],
      icon: <FaUsers className="exp-icon" style={{color: 'white'}} />,
    },
    {
      role: "Freelance Front-End Developer",
      company: "Self-Employed",
      duration: "2023 - Present",
      description: [
        "Developed custom landing pages and portfolios for clients.",
        "Enhanced SEO and reduced website load times by 30% through optimization.",
        "Integrated Firebase authentication and real-time database for secure login.",
      ],
      icon: <FaCode className="exp-icon" style={{color: 'white'}} />,
    },
    {
      role: "Open Source & Hackathons",
      company: "GitHub & Hackathons",
      duration: "Ongoing",
      description: [
        "Contributed to open-source projects, improving UI consistency and fixing bugs.",
        "Participated in frontend-focused hackathons, building React-based projects in 48 hours.",
      ],
      icon: <FaGithub className="exp-icon" style={{color: 'white'}} />,
    },
    {
      role: "DeFi Educator",
      company: "DEFI COMPANY",
      duration: "2020 - 2023",
      description: [
        "Educated users on decentralized finance concepts and protocols.",
        "Hosted webinars, AMAs, and workshops on DeFi tools and risks.",
        "Onboarded over 500+ new users into DeFi platforms.",
      ],
      icon: <FaBookOpen className="exp-icon" style={{color: 'white'}} />,
    },
    {
      role: "Marketer",
      company: "XOE ECOSYSTEM",
      duration: "2020 - 2023",
      description: [
        "Led community marketing efforts to grow awareness for XOE Ecosystem.",
        "Developed and distributed content on social platforms to highlight ecosystem features.",
        "Increased engagement and project traction via targeted campaigns.",
      ],
      icon: <FaBullhorn className="exp-icon" style={{color: 'white'}} />,
    },
  ];

  return (
    <>
    <section className="experience-container">
        <span>
        <FaDraftingCompass />
        <h4>DESIGN EVOLUTION</h4>
        </span>
      <h2>My Experience</h2>
          <div className="exp-component">
      <div className="work-experience">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-wrap">
            <div className="experience-box">
              {exp.icon}
              <div className="exp-heading">
                <h3 >{exp.role}- </h3> 
                <p >{exp.company} • {exp.duration}</p>
              </div>
            </div>
            <ul className="exp-workdone">
              {exp.description.map((point, i) => (
                <li key={i} className="flex">
                  <span className="text-green-400" style={{color: 'white'}}>✔</span>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="exp-image">
        <img src="https://res.cloudinary.com/damamkuye/image/upload/v1742339787/mockup5_iju4av.jpg" alt="" />
      </div>
        </div>
    </section>
        {/* <Getintouch/> */}
        </>
  );
};

export default Experience;
