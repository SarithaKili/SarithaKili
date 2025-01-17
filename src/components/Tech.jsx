import React, { useEffect, useState } from "react";

const skills = [
 "!!! skills can export from me" ,"Figma","Adobe Photoshop" ,"HTML", "CSS", "Tailwind CSS","Java", "Python", "C++", "JavaScript",
  "React.js", "Node.js", "Spring Boot", 
  "MySQL", "MongoDB",
  "ML and DL practices", "Learning algorithms",
  "OOP", "SDLC",
  "Git", "GitHub", "Datastructure & Algorithms"
  
];

const Tech = () => {
  const [typedText, setTypedText] = useState("");
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 30;
  const pauseBetweenSkills = 1000;

  useEffect(() => {
    if (currentSkillIndex < skills.length) {
      const currentSkill = `>> ${skills[currentSkillIndex]}`;
      if (charIndex < currentSkill.length) {
        const typingTimeout = setTimeout(() => {
          setTypedText((prev) => prev + currentSkill[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);

        return () => clearTimeout(typingTimeout);
      } else {
        const pauseTimeout = setTimeout(() => {
          setTypedText((prev) => prev + "\n");
          setCurrentSkillIndex((prev) => prev + 1);
          setCharIndex(0);
        }, pauseBetweenSkills);

        return () => clearTimeout(pauseTimeout);
      }
    }
  }, [charIndex, currentSkillIndex]);

  return (
    <div
      className=" inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-gradient-to-r from-purple-950 to-pink-950 text-white shadow-lg rounded-lg p-6 w-96 h-96 overflow-auto">
        <div className="text-sm font-mono space-y-1">
          <pre>{typedText}</pre>
        </div>
      </div>
    </div>
  );
};

export default Tech;
