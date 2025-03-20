import "./App.css";
import CustomNavbar from "./components/navbar";
import Reveal from "./components/reveal";
import DrawingWave from "./components/wave";
import PersonCard from "./components/personCard";
import HorizontalScroller from "./components/horizontalScroller";
import { useRef } from "react";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const supportRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <CustomNavbar homeRef={homeRef} aboutRef={aboutRef} supportRef={supportRef} contactRef={contactRef}/>
      <div id="topImgDiv">
        <img
          id="topImg"
          src="https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain"
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
            <img
              className="itemThingImg"
              src="https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain"
            />
          </Reveal>
        </div>
      </div>

      <div className="itemThing">
        <div className="itemInner">
          <Reveal width={window.innerWidth}>
            <img
              className="itemThingImg"
              src="https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain"
            />
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
            name: "Item 1",
            image:
              "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
            description:
              "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
          },
          {
            name: "Item 1",
            image:
              "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
            description:
              "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
          },
          {
            name: "Item 1",
            image:
              "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
            description:
              "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
          },
          {
            name: "Item 1",
            image:
              "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
            description:
              "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
          },
          {
            name: "Item 1",
            image:
              "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
            description:
              "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
          },
          {
            name: "Item 1",
            image:
              "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
            description:
              "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
          },
          {
            name: "Item 1",
            image:
              "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
            description:
              "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
          },
          {
            name: "Item 1",
            image:
              "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
            description:
              "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
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
              lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum
              goon goon goon lorem ipsum goon goon goon vlorem ipsum goon goon
              goon lorem ipsum goon goon goon lorem ipsum goon goon goon lorem
              ipsum goon goon goon lorem ipsum goon goon goon vlorem ipsum goon
              goon goon
            </h3>
          </Reveal>
          <Reveal width={window.innerWidth}>
            <img
              className="itemThingImg"
              src="https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain"
            />
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
