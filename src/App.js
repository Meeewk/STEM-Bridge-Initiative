
import "./App.css";
import CustomNavbar from './components/navbar';
import Reveal from "./components/reveal";
import DrawingWave from "./components/wave";
import PersonCard from "./components/personCard";
import HorizontalScroller from "./components/horizontalScroller";

export default function App() {
  return (
    <>
      <CustomNavbar />
      <div id="topImgDiv">
        <img id="topImg" src="https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain" />
      </div>
      <div id="after">
      </div>


      <div className="itemThing">
        <div className="itemInner">
          <DrawingWave id="wave" widthPercent={14} heightPercent={10} frequency={window.innerWidth / 100} duration={0.5} color="rgba(25,104,119,255)" strokeWidth="8"/>
          <Reveal>
            <h1>Our Mission</h1>
          </Reveal>
        </div>
        <div className="itemInner">
          <Reveal width={window.innerWidth}>
            <h3>
              lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon vlorem ipsum goon goon goon
              lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon vlorem ipsum goon goon goon
            </h3>
          </Reveal>
          <Reveal width={window.innerWidth}>
            <img className="itemThingImg" src="https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain" />
          </Reveal>
        </div>
      </div>

      <div className="itemThing">
        <div className="itemInner">
          <Reveal width={window.innerWidth}>
            <img className="itemThingImg" src="https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain" />
          </Reveal>
          <Reveal width={window.innerWidth}>
            <h3>
              lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon vlorem ipsum goon goon goon
              lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon vlorem ipsum goon goon goon
            </h3>
          </Reveal>
        </div>
      </div>

      <div className="itemThing">
        <div className="itemInner">
          <DrawingWave id="wave" widthPercent={14} heightPercent={10} frequency={window.innerWidth / 100} duration={0.5} color="rgba(25,104,119,255)" strokeWidth="8"/>
          <Reveal>
            <h1>About us</h1>
          </Reveal>
        </div>
      </div>

      <HorizontalScroller items={[
        {
          name: "Item 1",
          image: "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
          description: "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
        },
        {
          name: "Item 1",
          image: "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
          description: "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
        },
        {
          name: "Item 1",
          image: "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
          description: "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
        },
        {
          name: "Item 1",
          image: "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
          description: "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
        },
        {
          name: "Item 1",
          image: "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
          description: "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
        },
        {
          name: "Item 1",
          image: "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
          description: "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
        },
        {
          name: "Item 1",
          image: "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
          description: "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
        },
        {
          name: "Item 1",
          image: "https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain", // Placeholder image URL
          description: "This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1. This is the description for Item 1.",
        },
      ]} />

      <div className="itemThing">
        <div className="itemInner">
          <DrawingWave id="wave" widthPercent={14} heightPercent={10} frequency={window.innerWidth / 100} duration={0.5} color="rgba(25,104,119,255)" strokeWidth="8"/>
          <Reveal>
            <h1>Support Us</h1>
          </Reveal>
        </div>

        <div className="itemInner">
          <Reveal width={window.innerWidth}>
            <h3>
              lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon vlorem ipsum goon goon goon
              lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon vlorem ipsum goon goon goon
            </h3>
          </Reveal>
          <Reveal width={window.innerWidth}>
            <img className="itemThingImg" src="https://th.bing.com/th/id/OIP.vgOzpQfCZarhNgHrai-l6wHaEW?rs=1&pid=ImgDetMain" />
          </Reveal>
        </div>
      </div>
      
      <div className="itemThing">
        <div className="itemInner">
          <DrawingWave id="wave" widthPercent={14} heightPercent={10} frequency={window.innerWidth / 100} duration={0.5} color="rgba(25,104,119,255)" strokeWidth="8"/>
          <Reveal>
            <h1>Contact</h1>
          </Reveal>
        </div>

        <div className="itemInner">
          <Reveal width={window.innerWidth}>
            <h3>
              lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon vlorem ipsum goon goon goon
              lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon lorem ipsum goon goon goon vlorem ipsum goon goon goon
            </h3>
          </Reveal>
        </div>
      </div>
      
    </>
  );
}

