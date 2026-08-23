import { useEffect } from "react";

import CustomNavbar from "../components/navbar";
import Footer from "../components/footer";
import Reveal from "../components/reveal";

import LanjaghbyurSpeaking from "../images/LanjaghbyurSpeaking.png";
import YervandashatImage from "../images/YervandashatImage.png";

import "../App.css";
import "./Projects.css";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects | STEM Bridge Initiative";
  }, []);

  const projects = [
    {
      title: "Computer Lab in Village School - Yervandashat, Armenia",
      status: "In Progress",
      description: "Building a fully-equipped computer lab in a village school in Yervandashat to provide students with access to modern technology and coding education.",
      details: "Yervandashat is a border village of ~700 residents, 15 km from the Armenian border. This project brings an engineering lab to the village school, offering free STEM education to children aged 10-18.",
      impact: "Up to 700 students annually",
      image: YervandashatImage
    },
    {
      title: "Computer Lab in Village School - Lanjaghbyur, Armenia",
      status: "Completed",
      description: "Building a fully-equipped computer lab in a village school in Lanjaghbyur to provide students with access to modern technology and coding education.",
      details: "This project aims to serve students, providing them with hands-on experience in programming, digital literacy, and STEM fields.",
      impact: "~200 students annually",
      image: LanjaghbyurSpeaking
    },
    {
      title: "International Partnership",
      status: "Planning",
      description: "Trying to find an organization to partner with in another country to build up/create STEM education centers. Contact us if you have information!",
      details: "",
      impact: "TBD",
      image: null
    },
  ];

  return (
    <>
      <CustomNavbar />

      <div className="projects-header">
        <div className="itemInner">
          <Reveal>
            <h1>Our Projects</h1>
          </Reveal>
        </div>
        <div className="itemInner">
          <Reveal width="100%">
            <h3 className="projects-intro">
              We're committed to making a tangible difference in bridging the digital divide. 
              Here are the initiatives we're currently working on and have completed.
            </h3>
          </Reveal>
        </div>
      </div>

      {projects.map((project, index) => (
        <div 
          key={index} 
          className={`project-section ${index % 2 === 0 ? 'even' : 'odd'}`}
        >
          <div className="project-content">
            <Reveal width="100%">
              <div className="project-text">
                <h2>{project.title}</h2>
                <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
                <p className="project-description">{project.description}</p>
                <p className="project-details">{project.details}</p>
                <p className="project-impact">
                  <strong>Impact:</strong> {project.impact}
                </p>
              </div>
            </Reveal>
            
            <Reveal width="100%">
              <div className="project-visual">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="placeholder-visual">
                    <span className="placeholder-icon">📚</span>
                    <p>Project Image Coming Soon</p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      ))}

      <div className="projects-cta">
        <Reveal>
          <h2>Want to Support Our Projects?</h2>
          <p>Every contribution helps us expand our reach and impact more students.</p>
          <a 
            href="https://www.gofundme.com/f/stem-bridge-initiative-bridging-the-digital-divide"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate Now
          </a>
        </Reveal>
      </div>
      <Footer />
    </>
  );
}