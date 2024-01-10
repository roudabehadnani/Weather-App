import React from 'react'
import {motion} from "framer-motion";
import cloud1 from "./assess/Image/cloud1.png"
import cloud2 from "./assess/Image/cloud2.png"


function BackgroundAnimation() {
  return (
    <div className='background-animation'>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        //   height: "100vh",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {/* closing addition */}
        <motion.div
        //   style={{
        //     height: "200px",
        //     width: "200px",
        //     background: "yellow",
        //     zIndex: "-1",
        //   }}
          animate={{
            x: [0, -5, 10, -65],
            y: [0, 0, 0, 0],
            // scale: [1, 1.2, 1.01, 1, 1],
            // rotate: [0, 0, 270, 270, 0],
            transition: {
              duration: 30,
              repeat: Infinity,
            },
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        ><img src={cloud1} alt='img'/></motion.div>
        <motion.div
        //   style={{
        //     height: "200px",
        //     width: "200px",
        //     background: "blue",
        //     zIndex: "-1",
        //   }}
          animate={{
            x: [10, 20, 30, 50],
            y: [0, 0, 0, 0],
            // scale: [0.8, 1, 0.9, 0.95, 1],
            // rotate: [0, 10, 260, 200, 50],
            transition: {
              duration: 20,
              repeat: Infinity,
            },
            // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        ><img src={cloud2} alt='img'/></motion.div>
      </div>
    </div>
  )
}

export default BackgroundAnimation