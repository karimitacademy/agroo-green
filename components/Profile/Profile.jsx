import React, { useEffect, useState } from "react";
import MyButton from "../UI/button/MyButton";
import Header from "../Header/Header";
import { Button, Drawer } from "antd";
import MyInput from "../UI/input/MyInput";
import { useRouter } from "next/router";
import axios from "axios";
import ProfileUpdate from "./ProfileUpdate";

const Profiles = () => {
  const [profile, setProfile] = useState([]);
  const [tt, setTt] = useState(true);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [create, setCreate] = useState({
    id: id,
    firstName: "",
    lastName: "",
    count: "",
    city: "",
  });
  let value;
  if (typeof window !== "undefined") {
    value = localStorage.getItem("id") || "";
  }
  useEffect(() => {
    const getProfile = async () => {
      try {
        const resp = await axios(`http://localhost:3000/profile/${value}`);
        setProfile(resp.data);
        console.log(resp);
        setTt(true);
      } catch (e) {
        setTt(false);
      }
    };
    getProfile();
  }, []);

  const createProfile = async () => {
    try {
      const resp = await axios.post("http://localhost:3000/profile", {
        ...create,
      });
      alert("вы успешно создали профиль");
    } catch (e) {
      alert("Произошла ошибка");
    }
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Header />
      <div className="container">
        {tt ? (
          profile && (
            <div
              style={{
                background: "grey",
                borderRadius: "17px",
                width: "1300px",
                marginTop: "100px",
                color: "white",
                padding: "40px",
								display: "flex",
								justifyContent: "space-between"
              }}
              key={profile.id}
            >
              <div className="">
                <h1>Ваша карта</h1>
                <br />
                <br />
                <p style={{ fontSize: "25px", marginBottom: "6px" }}>
                  Имя : {profile.firstName}
                </p>
                <p style={{ fontSize: "25px", marginBottom: "6px" }}>
                  Фамилия : {profile.lastName}
                </p>
                <p style={{ fontSize: "25px", marginBottom: "6px" }}>
                  Страна : {profile.count}
                </p>
                <p style={{ fontSize: "25px", marginBottom: "6px" }}>
                  Город : {profile.city}
                </p>
                <ProfileUpdate id={id} />
              </div>
							<div className="">
								<img src="https://www.mnhockeyhub.com/app_images/no_photo_neutral.svg?16678557091" alt="1" />
							</div>
							
            </div>
          )
        ) : (
          <>
            <br />
            <br />
            <br />
            <Button
              style={{ background: "rgb(136, 211, 22)" }}
              type="primary"
              onClick={showDrawer}
            >
              Редактировать Профиль
            </Button>
            <Drawer
              style={{ background: "grey" }}
              width="500px"
              title="Basic Drawer"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <MyInput
                placeholder="имя"
                onChange={(e) =>
                  setCreate({ ...create, firstName: e.target.value })
                }
              />
              <br />
              <br />
              <MyInput
                placeholder="фамилия"
                onChange={(e) =>
                  setCreate({ ...create, lastName: e.target.value })
                }
              />
              <br />
              <br />
              <MyInput
                placeholder="Страна"
                onChange={(e) =>
                  setCreate({ ...create, count: e.target.value })
                }
              />
              <br />
              <br />
              <MyInput
                placeholder="Город"
                onChange={(e) => setCreate({ ...create, city: e.target.value })}
              />
              <br />
              <br />
              <Button style={{background: "rgb(136, 211, 22)", width: "300px", height:"45px", color: "white"}} onClick={createProfile}>
                    Создать
                </Button>
            </Drawer>
          </>
        )}
      </div>
    </div>
  );
};

export default Profiles;
