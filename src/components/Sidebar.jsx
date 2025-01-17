import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { behance, facebook, github, instagram, linkedin } from "../assets";

const Sidebar = ({ index }) => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/saritha7/",
      src: linkedin,
      alt: "LinkedIn",
    },
    {
      href: "https://www.behance.net/sarisari10",
      src: behance,
      alt: "Behance",
    },
    {
      href: "https://github.com/SarithaKili",
      src: github,
      alt: "GitHub",
    },
    {
      href: "https://www.facebook.com/saritha2513?mibextid=ZbWKwL",
      src: facebook,
      alt: "Facebook",
    },
    {
      href: "https://www.instagram.com/saritha.k_25/",
      src: instagram,
      alt: "Instagram",
    },
  ];

  return (
    <div className="flex justify-center items-center" >
      <Tilt
        options={{
          max: 35,
          scale: 1.1,
          speed: 400,
        }}
        className="p-[1px] shadow-card rounded-full"
      >
        <motion.div
          variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          className="bg-gray-900 py-3 px-5 flex items-center space-x-4 rounded-full"
        >
          {socialLinks.map(({ href, src, alt }, i) => (
            <motion.a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              key={i}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
              className="p-2 transition-transform duration-300 rounded-full hover:bg-gray-700"
            >
              <img
                src={src}
                alt={alt}
                className="w-6 h-6 transition-all duration-300 hover:opacity-90"
              />
            </motion.a>
          ))}
        </motion.div>
      </Tilt>
    </div>
  );
};

export default Sidebar;
