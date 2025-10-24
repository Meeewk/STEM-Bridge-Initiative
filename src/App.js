import "./App.css";
import CustomNavbar from "./components/navbar";
import Reveal from "./components/reveal";
import DrawingWave from "./components/wave";
import { useRef } from "react";
import AdoptGoFundMeWidget from "./components/donation";
import ArmenianKidsHandsUpPhoto from "./images/ArmenianKidsHandsUp.jpg";
import ArmenianKidsChessPhoto from "./images/ArmenianChess.jpg";
import ArmenianKidsTablePhoto from "./images/ArmenianKidsTable.jpg";
import GroupPhoto from "./images/GroupPhoto.jpeg";
import DonationProgressPie from "./components/donationProgressPie";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const supportRef = useRef(null);
  const contactRef = useRef(null);
  const pieChartCategories = [
    {
      name: "GoFundMe Donations",
      amount: 2500,
      description: "Raised through our GoFundMe campaign."
    },
    {
      name: "Fundraising Events",
      amount: 2000,
      description: "Raised through events such as a boba shop and book donations."
    },
    {
      name: "Matching Programs",
      amount: 2500,
      description: "Raised through corporate matches from Google and Microsoft."
    },
  ];
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
            color="#8080f7"
            strokeWidth="8"
          />
          <Reveal>
            <h1>Our Mission</h1>
          </Reveal>
        </div>
        <div className="itemInner containParagraph">
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
        <div className="itemInner containParagraph">
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
            color="#8080f7"
            strokeWidth="8"
          />
          <Reveal>
            <h1>About us</h1>
          </Reveal>
        </div>

        <div className="itemInner containParagraph">
          <Reveal width={window.innerWidth}>
            <img className="itemThingImg groupPhoto" src={GroupPhoto} />
          </Reveal>
          <Reveal width={window.innerWidth}>
            <h3>
              Our team is mainly comprised of immigrant high school students from Washington State. As students in America, we experience the privilege of an advanced STEM education, and with our experiences in other countries, we recognize STEM Education's immense value in the modern world. We wanted a way to fight inequality in the world, and we decided to do it by tackling the prevelant digital divide.
            </h3>
          </Reveal>
        </div>
      </div>

      

      <div className="itemThing" ref={supportRef}>
        <div className="itemInner">
          <DrawingWave
            id="wave"
            widthPercent={14}
            heightPercent={10}
            frequency={window.innerWidth / 100}
            duration={0.5}
            color="#8080f7"
            strokeWidth="8"
          />
          <Reveal>
            <h1>Support Us</h1>
          </Reveal>
        </div>

        <div className="itemInner containParagraph supportUsParagraph">
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
            {/* <AdoptGoFundMeWidget /> */}
            <DonationProgressPie goal={8500} categories={pieChartCategories} />
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
            color="#8080f7"
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
