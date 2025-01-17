import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { my1 } from "../assets"; // Ensure the image path is correct

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full xs:w-[250px] sm:w-[300px] md:w-[350px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      whileHover={{ scale: 1.05 }} // Smooth hover effect to scale the card
      transition={{ duration: 0.3 }} // Transition for smooth scaling of the card
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col hover:bg-gradient-to-r hover:from-purple-950 hover:to-pink-950'
      >
        <motion.img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          whileHover={{ scale: 1.2 }} // Resize the image on hover
          transition={{ duration: 0.3 }} // Transition for smooth resizing of the image
        />
        <h3 className='text-white text-[17px] font-normal text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div>
        <h2 className={`${styles.sectionHeadText} text-center`}>About me !</h2>
      </div>
        
      <div
        className="mt-10 p-10 rounded-lg"
        style={{
          background: "linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(174, 118, 247, 0.6) 25%, rgba(47, 6, 108, 0.6) 50%, rgba(0, 79, 128, 0.6) 75%, rgba(0, 0, 0, 0.4))"
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="relative lg:w-1/3 w-full flex justify-center">
            <motion.img
              src={my1} // Adjust the image path
              alt="Saritha Kili"
              className="object-cover w-[300px] h-[400px] shadow-lg"
              initial={{ opacity: 1 }} // Start with full opacity
              animate={{ opacity: 0.8 }} // Animate to reduced opacity
              transition={{ duration: 4, ease: "easeInOut" }} // Smooth transition
            />
            <motion.div
              className="absolute inset-0 bg-black"
              initial={{ opacity: 0 }} // Start with no overlay
              animate={{ opacity: 0.5 }} // Animate to semi-transparent overlay
              transition={{ duration: 1, ease: "easeInOut" }} // Smooth transition
            />
          </div>

          <motion.p
            variants={fadeIn("", "", 0.3, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello! I am Saritha, a passionate Computer Engineering
            undergraduate with a knack for software engineering, web
            development, AR/VR, and UI/UX design. I specialize in creating
            intuitive, user-friendly solutions and have a strong foundation
            in modern tech.
            <br /> <br />
            Throughout my academic journey, I have contributed to impactful
            projects, such as a lab booking system with real-time
            availability and notifications, an E-waste management system
            focusing on human-computer interaction principles. <br />
            <br />
            With a blend of creativity and technical expertise,
            I am driven to design solutions that solve real-world
            challenges—and yes, I can’t resist exploring innovations
            like AI/ML and LLM to push boundaries even further.
          </motion.p>
        </div>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "About");