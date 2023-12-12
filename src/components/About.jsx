import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { socials } from "../constants";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Introduction</h2>
        </div>
        <div className='flex flex-row items-center'>
        <p className='mt-4 text-[25px] max-w-3xl leading-[30px]'>Connect with me!</p>   
        <div className="flex flex-row items-center mt-2 ml-10">
          {socials.map((social) => (
            <div
              key={social.title} // Add a unique key for each element in the array
              onClick={() => window.open(social.link, "_blank")}
              className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-4`}
            >
              <img
                src={social.icon}
                alt={social.title}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        </div>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am an undergraduate student aspiring to secure internship
        opportunities in the field of software engineering.
        <br></br>
        My passion lies in crafting innovative solutions for complex challenges.
        My expertise in full-stack development, combined with a strong
        commitment to user-centric design, allows me to create products that not
        only meet technical requirements but also delight users.
        <br></br>Currently, I am actively seeking internship opportunities to
        advance my practical skills and knowledge in the tech industry. I'm
        particularly interested in leveraging emerging technologies like AI to
        drive meaningful change in the tech industry. Let's connect to explore
        potential collaborations and share insights on the latest tech trends.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
