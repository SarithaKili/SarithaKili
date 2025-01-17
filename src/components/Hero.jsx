import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Sidebar from "./Sidebar";

const Hero = () => {
  const fullText = "I'm passionate about crafting intuitive UX";

  const randomMovement = (containerWidth, containerHeight) => {
    const maxHeight = containerHeight - 10; // Keep some padding
    const maxWidth = containerWidth - 10; // Keep some padding

    return {
      y: [
        -maxHeight / 1,
        Math.random() * maxHeight - maxHeight / 2,
        maxHeight / 2,
      ],
      x: [
        -maxWidth / 2,
        Math.random() * maxWidth - maxWidth / 2,
        maxWidth / 2,
      ],
    };
  };

  return (
    <section className="relative w-full h-screen mx-auto flex justify-center items-center">
      <div className={`absolute inset-0 top-40 max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center gap-4`}>
        {/* Main content section */}
        <div className="text-center relative z-10"> {/* Ensure this is above the balls */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span
              className="text-gradient"
              style={{
                background: "linear-gradient(to right, #c5299e, #973cbf)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Saritha
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            {fullText}
          </p>
          <div
            className="mt-8 p-4 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg"
            style={{
              display: "inline-block",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(2px)",
            }}
          >
            <Sidebar />
          </div>
        </div>

        {/* Responsive container for moving balls */}
        <div className="relative w-full h-80 overflow-hidden flex justify-center items-center"> 
          <div className="absolute inset-0 flex justify-center items-center">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                className="w-3 h-3 rounded-full absolute"
                animate={{
                  ...randomMovement(300, 300), // Adjust based on the container size
                  backgroundColor: [
                    "#d45eff",
                    "#ff7f50",
                    "#32cd32",
                    "#ff6347",
                    "#d45eff",
                  ],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                style={{
                  backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;