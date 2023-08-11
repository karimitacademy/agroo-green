import React, { useState } from "react";
import s from "./Autorization.module.css";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

import { useSignInMutation, useSignInQuery } from "../redux/Product";
import Link from "next/link";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const [signIn, { isError }] = useSignInMutation();

  const [formErrors, setFormErrors] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const handleUser = async (e) => {
    e.preventDefault();

    const newFormErrors = { ...formErrors };

    if (!user.email) {
      newFormErrors.email = <p style={{color:'white'}}>Заполните это поле</p>;
    } else {
      newFormErrors.email = "";
    }

    if (!user.userName) {
      newFormErrors.userName = <p style={{color:'white'}}>Заполните это поле</p>;
    } else {
      newFormErrors.userName = "";
    }

    if (!user.password) {
      newFormErrors.password = <p style={{color:'white'}}>Заполните это поле</p>;
    } else {
      newFormErrors.password = "";
    }

    setFormErrors(newFormErrors);

    if (user.email && user.userName && user.password) {
      const resp = await signIn({ ...user }).unwrap();
      setUser({
        email: "",
        password: "",
        userName: "",
      });

      if (resp) {
        localStorage.setItem("access", resp.accessToken);
        localStorage.setItem("id", resp.user.id);
        if (localStorage.getItem("access")) {
          window.location.href = "http://localhost:3001/Content/ContentPage";
        }
      }
    }
  };

  return (
    <div className={s.body}>
      <div className={s.container}>
        <form className={s.form}>
          <h1 className={s.title}>Войти в Аккаунт</h1>
          <MyInput
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          {formErrors.email && (
            <span className={s.error}>{formErrors.email}</span>
          )}
          <MyInput
            placeholder="UserName"
            onChange={(e) => setUser({ ...user, userName: e.target.value })}
          />
          {formErrors.userName && (
            <span className={s.error}>{formErrors.userName}</span>
          )}
          <MyInput
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          {formErrors.password && (
            <span className={s.error}>{formErrors.password}</span>
          )}
          <MyButton
            onClick={handleUser}
            disabled={Object.values(formErrors).some((error) => error !== "")}
          >
            Войти в Аккаунт
          </MyButton>
          <Link href="/Register/RegisterPage" className={s.link}>
            Нет Аккаунта? Зарегистрируйтесь
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
