import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles"; // Ensure this file exists and has the required styles
import { experiences } from "../constants"; // Ensure this file exports an array of experience objects
import { SectionWrapper } from "../hoc"; // A higher-order component to wrap your section
import { textVariant } from "../utils/motion"; // A function that returns motion variants

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "4px solid rgb(250, 102, 191)" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, cursor: "pointer" }}
      
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-pink-400 text-[16px]" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <a
          className="view-link text-blue-400 underline mt-2"
          href={experience.link}
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
        >
          View
        </a>
        {experience.image && (
          <div className="mt-4">
            <img
              src={experience.image}
              className="w-full h-auto rounded-md"
              alt="Experience visual representation"
            />
          </div>
        )}
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <div>
 <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Field Experiences.
        </h2>
      </div>
       
      

      <div >
        <VerticalTimeline>
          {experiences.length > 0 ? (
            experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))
          ) : (
            <p className="text-center text-red-500">No experiences found.</p>
          )}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience,"experience");