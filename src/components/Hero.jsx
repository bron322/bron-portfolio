// src/components/Hero.jsx
import { motion } from "framer-motion";
import { styles } from "../styles";
import SafeCosmicCanvas from "../cosmic/SafeCosmicCanvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0 z-0">
        <SafeCosmicCanvas />
      </div>

      {/* Foreground content */}
      <div
        className={`relative z-10 max-w-7xl mx-auto ${styles.paddingX} pt-24 pb-10 flex flex-col lg:flex-row items-center gap-10`}
      >
        <div className="flex flex-row items-start gap-5 w-full lg:w-[60%]">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#7AFFF4]" />
            <div className="w-1 sm:w-0.5 sm:h-60 h-40 bg-gradient-to-r from-cyan-500 to-cyan-700" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white leading-tight`}>
              Hi, I'm
              <br />
              <span className="text-[#7AFFF4] whitespace-nowrap">
                Lebron Lim
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Data Scientist | Software Engineer{" "}
              <br className="sm:block hidden" />
              Leveraging Analytical Expertise to Accelerate Innovation
            </p>
          </div>
        </div>

        <div className="hidden lg:block w-[40%]" />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
