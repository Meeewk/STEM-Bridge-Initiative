import "./App.css";
import CustomNavbar from "./components/navbar";
import Reveal from "./components/reveal";
import DrawingWave from "./components/wave";
import HorizontalScroller from "./components/horizontalScroller";
import { useRef } from "react";
import AbhayPhoto from "./images/AbhayPhoto.jpeg";
import EdgarPhoto from "./images/EdgarPhoto.jpeg";
import KarlenPhoto from "./images/KarlenPhoto.jpg";
import MariPhoto from "./images/MariPhoto.jpeg";
import MatthewPhoto from "./images/MatthewPhoto.JPG";
import SusannaPhoto from "./images/SusannaPhoto.jpg";
import YanaPhoto from "./images/YanaPhoto.jpeg";
import GoFundMeWidget from "./components/donation";
import AdoptGoFundMeWidget from "./components/donation";
import ArmenianKidsHandsUpPhoto from "./images/ArmenianKidsHandsUp.jpg";
import ArmenianKidsChessPhoto from "./images/ArmenianChess.jpg";
import ArmenianKidsTablePhoto from "./images/ArmenianKidsTable.jpg";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const supportRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <CustomNavbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        supportRef={supportRef}
        contactRef={contactRef}
      />
      <div id="topImgDiv">
        <img
          id="topImg"
          className="rounded-img"
          src={ArmenianKidsHandsUpPhoto}
        />
      </div>
      <div id="after"></div>

      <div className="itemThing" ref={homeRef}>
        <div className="itemInner">
          <DrawingWave
            id="wave"
            widthPercent={14}
            heightPercent={10}
            frequency={window.innerWidth / 100}
            duration={0.5}
            color="rgba(25,104,119,255)"
            strokeWidth="8"
          />
          <Reveal>
            <h1>Our Mission</h1>
          </Reveal>
        </div>
        <div className="itemInner">
          <Reveal width={window.innerWidth}>
            <h3>
              The digital divide is the grave inequality in the modern world
              caused by the access to digital infastructure certain parts of the
              world enjoy, while poorer regions don't have the luxury of it. Our
              mission is to bridge this divide, by tackling the problem at its'
              absolute root: <i>Education</i>. We seek to provide poorer
              countries and regions of the world with the tools to provide
              students a proper STEM education, and teach them the skills
              required for success in the digitalized world of today.
            </h3>
          </Reveal>
          <Reveal width={window.innerWidth}>
            <img className="itemThingImg" src={ArmenianKidsChessPhoto} />
          </Reveal>
        </div>
      </div>

      <div className="itemThing">
        <div className="itemInner">
          <Reveal width={window.innerWidth}>
            <img className="itemThingImg" src={ArmenianKidsTablePhoto} />
          </Reveal>
          <Reveal width={window.innerWidth}>
            <h3>
              Our primary goal as of today is to build computer lab
              infastructure in pre-existing schools in villages and other rural,
              poorer areas. Coding and computer science are at the forefront of
              current human technology, and being proficient in it is becoming
              an increasingly necessary quality for those who desire sucess in
              STEM fields.
            </h3>
          </Reveal>
        </div>
      </div>

      <div className="itemThing" ref={aboutRef}>
        <div className="itemInner">
          <DrawingWave
            id="wave"
            widthPercent={14}
            heightPercent={10}
            frequency={window.innerWidth / 100}
            duration={0.5}
            color="rgba(25,104,119,255)"
            strokeWidth="8"
          />
          <Reveal>
            <h1>About us</h1>
          </Reveal>
        </div>
      </div>

      <HorizontalScroller
        items={[
          {
            name: "Karlen Aleksanyan",
            image: KarlenPhoto,
            
            description:
              "My name is Karlen Aleksanyan, I'm a high school junior from Washington. I love engineering and robotics, so of course I want to allow everyone to experience it. One fun fact about me is that I love shawarma. Armenian shawarma, that is.",
          },
          {
            name: "Yana Sukhudyan",
            image: YanaPhoto,
            description:
              "Hi! I’m Yana, a junior at North Creek High School and VP of Stem Bridge Initiative. I’m passionate about helping underserved communities and making an impact through fundraising. I enjoy traveling, reading, and spending time with family and friends. Excited to contribute!",
          },
          {
            name: "Mari Ivanyan",
            image: MariPhoto,
            description:
              "My name is Mari Ivanyan, I'm a sophomore at lake washington high school, I love math, history and all things stem! One fun fact about me is that I've hated honey ever since I've been a toddler but I hope to get over that someday.",
          },
          {
            name: "Matthew Kokhan",
            image: MatthewPhoto,
            description:
              "Hello! I’m Matthew Kokhan, a junior at North Creek High School. I’m interested in helping the next generation have the proper technological opportunities to succeed. I enjoy learning, coding games, and playing volleyball! I’m glad to be a part of this initiative!",
          },
          {
            name: "Abhay Sankar",
            image: AbhayPhoto,
            description:
              "My name is Abhay Sankar, I'm a high schooler at North Creek High School. I love public speaking and teaching, as a matter of fact, I have my own tutoring company! I also love law and business. One fun fact about me is that I love watching the TV show suits.",
          },
          {
            name: "Edgar Ter-Galstyan",
            image: EdgarPhoto,
            description:
              "I'm Edgar Ter-Galstyan, a freshman at Henry M. Jackson High School. I'm passionate about helping others achieve their goals and making an impact. I’m also into motorsports, sports, and traveling to experience new cultures. Excited to be part of this mission!",
          },
          {
            name: "Susanna Aleksanyan",
            image: SusannaPhoto,
            description:
              "My name is Susanna Aleksanyan, I'm a sophomore in Washington state. I love art, law, and oh did I mention art. I love drawing and painting, and have been doing so since I was little. One fun fact about me is that one of my pastimes is putting in my airpods and just walking around my room.",
          },
        ]}
      />

      <div className="itemThing" ref={supportRef}>
        <div className="itemInner">
          <DrawingWave
            id="wave"
            widthPercent={14}
            heightPercent={10}
            frequency={window.innerWidth / 100}
            duration={0.5}
            color="rgba(25,104,119,255)"
            strokeWidth="8"
          />
          <Reveal>
            <h1>Support Us</h1>
          </Reveal>
        </div>

        <div className="itemInner">
          <Reveal width={window.innerWidth}>
            <h3>
              STEM Bridge Initiative is currently raising funds in order to
              build computer labs in small communities in developing countries,
              where students often don’t have access to technology. The support
              we receive from you directly provides STEM resources and the
              crucial infrastructure needed to make these labs possible. These
              tools educate students on STEM fields and prepare them for future
              opportunities. Every donation, big or small, helps create an
              impact where it's needed most. Currently, we’re focused on
              collecting donations through our GoFundMe to make sure these labs
              are built as soon as possible.
            </h3>
          </Reveal>
          <Reveal width={window.innerWidth}>
            <AdoptGoFundMeWidget />
          </Reveal>
        </div>
      </div>

      <div className="itemThing" ref={contactRef}>
        <div className="itemInner">
          <DrawingWave
            id="wave"
            widthPercent={14}
            heightPercent={10}
            frequency={window.innerWidth / 100}
            duration={0.5}
            color="rgba(25,104,119,255)"
            strokeWidth="8"
          />
          <Reveal>
            <h1>Contact</h1>
          </Reveal>
        </div>

        <div className="itemInner">
          <Reveal width={window.innerWidth}>
            <h3>
              <p>
                <a href="mailto:stembridgeinitiativeyan@gmail.com">
                  stembridgeinitiativeyan@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+14254039029">+1-425-403-9029</a>
              </p>
            </h3>
          </Reveal>
        </div>
      </div>
    </>
  );
}
