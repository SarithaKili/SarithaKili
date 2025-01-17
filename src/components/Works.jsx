import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { scc } from "../assets";

const Work = ({ index, title, icon }) => (
  <Tilt className="w-full flex justify-center items-center">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full max-w-[1000px] p-[1px] shadow-card green-pink-gradient rounded-xl"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary py-6 px-8 md:py-8 md:px-12 lg:py-10 lg:px-16 min-h-[150px] flex flex-col justify-evenly items-center rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-950 hover:to-pink-950"
      >
        <h2 className="text-purple-400 text-[20px] sm:text-[24px] lg:text-[30px] font-bold text-center mb-4">
        Elevate Your Brand with My Unique Touch 
        </h2>
        <img
                    src={scc}
                    alt="scc"
                    className="w-40 h-15 object-contain relative z-10 transition-transform duration-300 transform group-hover:scale-110 group-hover:brightness-125"
                  />
        
      </div>
    </motion.div>
  </Tilt>
);

export default SectionWrapper(Work, "about");
