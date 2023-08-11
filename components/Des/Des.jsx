import React from "react";
import s from "./Des.module.scss";
import Image from "next/image";
import {motion} from 'framer-motion'
import { description } from "@/constans/des";

const Des = () => {
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }}
    className="container">
      <div className={s.description}>
        <div className={s.description_cards}>
          {description.map((description) => (
            <motion.div variants={textAnimation} key={description.id} className={s.description_set_card}>
              <Image
                src={description.img}
                width={330}
                height={330}
                alt="kukuruza"
              />
              <motion.p variants={textAnimation}>{description.title}</motion.p>
              <motion.p variants={textAnimation}>{description.text}</motion.p>
              <motion.p variants={textAnimation}>{description.tes}</motion.p>
              <motion.p variants={textAnimation}>{description.des}</motion.p>
            </motion.div>
          ))}
        </div>


      </div>
    </motion.div>
  );
};

export default Des;
