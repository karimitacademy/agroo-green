import React, { useState } from "react";
import s from "./Autorization.module.css";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import { useAddUserMutation } from "../redux/Product";
import Link from "next/link";

const Register = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    userName: "",
    password: "",
    id: Date.now(),
  });

  const [addUser, { isError }] = useAddUserMutation();

  const [formErrors, setFormErrors] = useState({
    email: "",
    userName: "",
    password: "",
  });

  const handleUser = async (e) => {
    e.preventDefault();

    const newFormErrors = { ...formErrors };

    if (!newUser.email) {
      newFormErrors.email = <p style={{color:'white'}}>Заполните это поле</p>;
    } else {
      newFormErrors.email = "";
    }

    if (!newUser.userName) {
      newFormErrors.userName = <p style={{color:'white'}}>Заполните это поле</p>;
    } else {
      newFormErrors.userName = "";
    }

    if (!newUser.password) {
      newFormErrors.password = <p style={{color:'white'}}>Заполните это поле</p>;
    } else {
      newFormErrors.password = "";
    }

    setFormErrors(newFormErrors);

    if (newUser.email && newUser.userName && newUser.password) {
      const resp = await addUser({ ...newUser }).unwrap();
      setNewUser({
        email: "",
        userName: "",
        password: "",
        id: Date.now(),
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
          <h1 className={s.title}>Создать Аккаунт</h1>
          <MyInput
            placeholder="Email"
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          {formErrors.email && (
            <span className={s.error}>{formErrors.email}</span>
          )}
          <MyInput
            placeholder="UserName"
            onChange={(e) =>
              setNewUser({ ...newUser, userName: e.target.value })
            }
          />
          {formErrors.userName && (
            <span className={s.error}>{formErrors.userName}</span>
          )}
          <MyInput
            placeholder="Password"
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
          {formErrors.password && (
            <span className={s.error}>{formErrors.password}</span>
          )}
          <MyButton
            onClick={handleUser}
            disabled={Object.values(formErrors).some((error) => error !== "")}
          >
            Создать Аккаунт
          </MyButton>
          <Link href="/Register/LoginPage" className={s.link}>
            Уже есть Аккаунт?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
