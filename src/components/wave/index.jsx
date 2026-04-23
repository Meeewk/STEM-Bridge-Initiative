import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function genWavePath({ widthPercent = 100, heightPercent = 4, frequency = 4 }) {
  let width = (window.innerWidth * widthPercent) / 100;
  let height = (window.innerHeight * heightPercent) / 100;

  // Calculate the vertical center point for the wave
  const waveCenter = height / 2;

  let path = `M 0 ${waveCenter} `; // Start at the center vertically

  const step = width / frequency; // Calculate the width of each semicircle

  for (let i = 0; i < frequency; i++) {
    const cx = (i * 2 + 1) * step; // Center of the semicircle
    const cy = (i % 2 === 0 ? waveCenter - height / 4 : waveCenter + height / 4); // Alternate direction (up/down), ensuring no overlap
    const radius = height / 4; // Radius of the semicircle

    if (i % 2 === 0) {
      path += `A ${radius} ${radius} 0 0 1 ${cx + step} ${waveCenter} `; // Arc going up
    } else {
      path += `A ${radius} ${radius} 0 0 0 ${cx + step} ${waveCenter} `; // Arc going down
    }
  }

  return { path, width, height };
};



export default function DrawingWave({id= "", widthPercent = 100, heightPercent = 30, frequency = 5, duration = 2, color = "#8080f7", strokeWidth = "4", delay = 0}) {
  const [wavePath, setWavePath] = useState(genWavePath({ widthPercent: widthPercent, heightPercent: heightPercent, frequency: frequency * 2 }))
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});
  const waveControl = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setWavePath(genWavePath({ widthPercent: widthPercent, heightPercent: heightPercent, frequency: frequency * 2 }));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isInView) {
      waveControl.start("visible");
    }
  }, [isInView]);


  return (
    <svg id={id} ref={ref} width={wavePath.width} height={wavePath.height} viewBox={`0 0 ${wavePath.width}} ${wavePath.height}`} fill="none">
      <motion.path
        d={wavePath.path}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="transparent"
        variants={{
          hidden: {pathLength: 0},
          visible: {pathLength: 1},
        }}
        initial="hidden"
        animate={waveControl}
        transition={{ duration: duration, ease: "easeInOut", delay: delay }}
      />
    </svg>
  );
}