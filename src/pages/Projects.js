import "../App.css";
import CustomNavbar from "../components/navbar";
import Reveal from "../components/reveal";
import DrawingWave from "../components/wave";

export default function Projects() {
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
      <CustomNavbar />

      <div className="itemThing">
        <div className="itemInner">
          <DrawingWave {...waveProps} />
          <Reveal>
            <h1>Our Projects</h1>
          </Reveal>
        </div>
        <div className="itemInner containParagraph">
          <Reveal width={window.innerWidth}>
            <h3>
              Content about your projects goes here.
            </h3>
          </Reveal>
        </div>
      </div>
    </>
  );
}