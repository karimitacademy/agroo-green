import React from 'react';
import s from './loader.module.css'
const MyLoader = () => {
    return (
        <div className={s.container}>
        <div className={s.cloud_front}>
          <span className={s.left_front}></span>
          <span className={s.right_front}></span>
        </div>
        <span className={s.sun_sunshine}></span>
        <span className={s.sun}></span>
        <div className={s.cloud_back}>
          <span className={s.left_back}></span>
          <span className={s.right_back}></span>
        </div>
      </div>
    );
};

export default MyLoader;