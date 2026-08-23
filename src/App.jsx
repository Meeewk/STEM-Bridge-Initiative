import { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CustomNavbar from "./components/navbar";
import Footer from "./components/footer";
import Reveal from "./components/reveal";
import DrawingWave from "./components/wave";
import DonationProgressPie from "./components/donationProgressPie";

import ArmenianKidsChessPhoto from "./images/ArmenianChess.jpg";
import ArmenianKidsTablePhoto from "./images/ArmenianKidsTable.jpg";
import GroupPhoto from "./images/GroupPhoto.jpg";

import "./App.css";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const supportRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "STEM Bridge Initiative";
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      const refMap = {
        home: homeRef,
        about: aboutRef,
        support: supportRef
      };
      const targetRef = refMap[location.state.scrollTo];
      if (targetRef?.current) {
        setTimeout(() => {
          const topOffset = 20 * window.innerHeight / 100;
          const elementPosition = targetRef.current.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - topOffset, behavior: "smooth" });
        }, 100);
      }
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  const pieChartCategories = [
    {
      name: "Donations",
      amount: 5688,
      description: "Raised through our GoFundMe campaign."
    },
    {
      name: "Fundraising Events",
      amount: 2812,
      description: "Raised through events such as a boba shop and book donations."
    }
  ];

  const waveProps = {
    id: "wave",
    widthPercent: 14,
    heightPercent: 10,
    frequency: window.innerWidth / 100,
    duration: 0.5,
    color: "#8080f7",
    strokeWidth: "8"
  };

  return (
    <>
      <CustomNavbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        supportRef={supportRef}
      />

      <div className="itemThing first" ref={homeRef}>
        <div className="itemInner">
          <DrawingWave {...waveProps} />
          <Reveal>
            <h1>Our Mission</h1>
          </Reveal>
        </div>
        <div className="itemInner containParagraph">
          <Reveal width="100%">
            <h3>
              The digital divide is the grave inequality in the modern world
              caused by the access to digital infrastructure certain parts of
              the world enjoy, while poorer regions don't have the luxury of it.
              Our mission is to bridge this divide, by tackling the problem at
              its absolute root: <i>Education</i>. We seek to provide poorer
              countries and regions of the world with the tools to provide
              students a proper STEM education, and teach them the skills
              required for success in the digitalized world of today.
            </h3>
          </Reveal>
          <Reveal width="100%">
            <img
              className="itemThingImg"
              src={ArmenianKidsChessPhoto}
              alt="Armenian kids playing chess"
            />
          </Reveal>
        </div>
      </div>

      <div className="itemThing">
        <div className="itemInner containParagraph">
          <Reveal width="100%">
            <img
              className="itemThingImg"
              src={ArmenianKidsTablePhoto}
              alt="Armenian kids at table"
            />
          </Reveal>
          <Reveal width="100%">
            <h3>
              Our primary goal as of today is to build computer lab
              infrastructure in pre-existing schools in villages and other
              rural, poorer areas. Coding and computer science are at the
              forefront of current human technology, and being proficient in it
              is becoming an increasingly necessary quality for those who desire
              success in STEM fields.
            </h3>
          </Reveal>
        </div>
      </div>

      <div className="itemThing" ref={aboutRef}>
        <div className="itemInner">
          <DrawingWave {...waveProps} />
          <Reveal>
            <h2>About us</h2>
          </Reveal>
        </div>
        <div className="itemInner containParagraph">
          <Reveal width="100%">
            <img
              className="itemThingImg groupPhoto"
              src={GroupPhoto}
              alt="Group photo"
            />
          </Reveal>
          <Reveal width="100%">
            <h3>
              Our team is mainly comprised of immigrant high school students
              from Washington State. As students in America, we experience the
              privilege of an advanced STEM education, and with our experiences
              in other countries, we recognize STEM Education's immense value in
              the modern world. We wanted a way to fight inequality in the
              world, and we decided to do it by tackling the prevalent digital
              divide.
            </h3>
          </Reveal>
        </div>
      </div>

      <div className="itemThing" ref={supportRef}>
        <div className="itemInner">
          <DrawingWave {...waveProps} />
          <Reveal>
            <h2>Support Us</h2>
          </Reveal>
        </div>
        <div className="itemInner containParagraph supportUsParagraph">
          <Reveal width="100%">
            <h3>
              STEM Bridge Initiative is currently raising funds in order to
              build computer labs in small communities in developing countries,
              where students often don't have access to technology. The support
              we receive from you directly provides STEM resources and the
              crucial infrastructure needed to make these labs possible. These
              tools educate students on STEM fields and prepare them for future
              opportunities. Every donation, big or small, helps create an
              impact where it's needed most. Currently, we're focused on
              collecting donations through our <a style={{color: "blue"}} href="https://www.gofundme.com/f/stem-bridge-initiative-bridging-the-digital-divide">GoFundMe</a> to make sure these labs
              are built as soon as possible.
            </h3>
          </Reveal>
          <Reveal width="100%">
            <DonationProgressPie goal={8500} categories={pieChartCategories} />
          </Reveal>
        </div>
      </div>

      <Footer />
    </>
  );
}