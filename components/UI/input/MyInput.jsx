import React from 'react';
import s from './Input.module.css'

const MyInput = ({type,placeholder,onChange}) => {
    return (
        <label htmlFor="">
        <input className={s.input} type={type} placeholder={placeholder} onChange={onChange} />
        </label>
        
    );
};

export default MyInput;