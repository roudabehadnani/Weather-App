import React from "react";
import "./Background.css";
import { motion } from "framer-motion";
import cloud1 from "./assess/Image/cloud1.png";
import cloud2 from "./assess/Image/cloud2.png";

function Background() {
  return (
    <div className="background">
      <motion.div
        initial={{
          opacity: 0.3,
          x: -500,
          y: 0,
        }}
        animate={{
          opacity: 0.6,
          x: 1000,
          y: 260,
          transition: {
            duration: 180,
            repeat: Infinity,
          },
        }}
        viewport={{ once: true }}
      >
        <img src={cloud1} alt="img" />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0.7,
          x: 1000,
          y: -80,       
        }}
        animate={{
          opacity: 0.1,
          x: -500,
          y:80,
          transition: {
            duration: 160, 
            repeat: Infinity,
          },
        }}
        viewport={{ once: true }}
      >
        <img src={cloud2} alt="img" />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0.6,
          x: -500,
          y: 0,       
        }}
        animate={{
          opacity: 0.4,
          x: 1000,
          y:91,
          transition: {
            duration: 105, 
            repeat: Infinity,
          },
        }}
        viewport={{ once: true }}
      >
        <img src={cloud1} alt="img" />
      </motion.div>
    </div>
  );
}

export default Background;
