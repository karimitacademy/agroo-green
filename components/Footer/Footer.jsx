import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer} id="footer_us">
      <div className={s.boxes}>
        <div className={s.nav}>
          <p className={s.link}>Обращаться</p>
          <p className={s.link}>Звонть</p>
        </div>
        <div className={s.nav}>
          <p className={s.link}>+999-77-77-77</p>
          <p className={s.link}>+999-55-55-55</p>
        </div>
        <div className={s.nav}>
          <p className={s.link}>+999-77-77-77</p>
          <p className={s.link}>+999-55-55-55</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
