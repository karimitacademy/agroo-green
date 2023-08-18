import React from "react";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer} id="footer_us">
      <div className={s.boxes}>
        <div className={s.nav}>
          <p className={s.link}>Гарант 100%</p>
          <p className={s.link}>Высшее качество</p>
          <p className={s.link}>Выберайте лучших</p>

        </div>
        <div className={s.nav}>
          <p className={s.link}>WhatsApp</p>
          <p className={s.link}>Teleram</p>
          <p className={s.link}>VK</p>
        </div>
        <div className={s.nav}>
          <p className={s.link}>+999-77-77-77</p>
          <p className={s.link}>+999-55-55-55</p>
          <p className={s.link}>+999-33-33-33</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
