import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef} from "react";

export default function Reveal({ children, width = "fit-content", overflow = "hidden"}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }

  }, [isInView]);


  return (
    <div ref={ref} style={{ position: "relative", width: width, overflow: overflow}}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75},
          visible: { opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.2, delay: 0.2}}
      >
        {children}
      </motion.div>
    </div>
  );
}