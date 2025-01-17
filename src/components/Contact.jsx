import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { my, saritha_cv_144 } from "../assets";
import Tech from "./Tech";

// template_ofn85th
// service_9wzy5ij
// tk-51U5rxuS331sZF


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_9wzy5ij',
        'template_ofn85th',
        {
          from_name: form.name,
          to_name: "saritha",
          from_email: form.email,
          to_email: "sarithakili7@gmail.com",
          message: form.message,
        },
        'tk-51U5rxuS331sZF'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex flex-col gap-10 overflow-hidden justify-center">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex flex-col items-center bg-black-500 p-8 rounded-2xl w-full md:w-1/2"
        >
          <div className="relative">
            <img
              src={my}
              alt="Profile"
              className="w-40 h-50 rounded-full mb-6 border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform transition-all duration-300 hover:scale-110 hover:rotate-3"
            />
          </div>
          <p className="text-white font-medium text-xl mb-4 hover:text-primary transition-colors duration-300">
            Saritha K.
          </p>
          <p className="text-secondary mb-2 hover:text-white transition-colors duration-300">
            Email: sarithakili7@gmail.com
          </p>
          <p className="text-secondary mb-2 hover:text-white transition-colors duration-300">
            Contact: +94-759070529
          </p>
          <a
            href={saritha_cv_144}
            download
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Download CV
          </a>
        </motion.div>

        {/* Right Section */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="bg-black-800 p-8 rounded-2xl w-full md:w-1/2"
        >
          <Tech />
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="bg-black-800 p-8 rounded-2xl"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 hover:text-primary transition-colors duration-300">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 hover:shadow-lg focus:ring-2 focus:ring-white"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 hover:text-primary transition-colors duration-300">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 hover:shadow-lg focus:ring-2 focus:ring-white"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4 hover:text-primary transition-colors duration-300">
              Your Message
            </span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium transition-all duration-300 hover:shadow-lg focus:ring-2 focus:ring-white"
            />
          </label>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-2 px-4 rounded-xl outline-none text-white font-bold shadow-md shadow-primary transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 w-32" // Adjusted button size
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");