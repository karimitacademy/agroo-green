import React from 'react';
import s from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={s.hero}>
      <Image src="/hero-img.jpeg" alt="ferma" width={1400} height={765}/>
    </div>
  );
};

export default Hero;