import React from "react";
import s from "./About.module.scss";
import { motion } from "framer-motion";

const About = () => {
  const featureAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.div initial="hidden" whileInView="visible"  className={s.about}>
      <div className="container">
        <motion.div variants={featureAnimation} custom={1} className={s.info}>
          <motion.h2 variants={featureAnimation} custom={3} className={s.title}>
            Закажите семена премеального качества в AgroGreen
          </motion.h2>
          <motion.p variants={featureAnimation} custom={5} className={s.text}>Более 500-та видов разных семян</motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
