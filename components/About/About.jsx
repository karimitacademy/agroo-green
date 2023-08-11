import React from "react";
import s from "./About.module.scss";

const About = () => {
  return (
    <div className={s.about}>
      <div className="container">
        <div className={s.info}>
          <h2 className={s.title}>Закажите семена премеального качества в AgroGreen</h2>
          <p className={s.text}>Более 500-та видов разных семян</p>
        </div>
      </div>
    </div>
  );
};

export default About;
