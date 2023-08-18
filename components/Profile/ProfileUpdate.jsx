import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import MyInput from '../UI/input/MyInput';
import axios from 'axios';
import MyButton from '../UI/button/MyButton';

const ProfileUpdate = ({ id }) => {
    const showDrawer = () => {
        setOpen(true);

    };
    const onClose = () => {
        setOpen(false);
    };

    const [open, setOpen] = useState(false);
    const [create, setCreate] = useState({
        id: id,
        firstName: "",
        lastName: "",
        count: "",
        city: ""
    })
    let value;
    if (typeof window !== "undefined") {
        value = localStorage.getItem("id") || "";
    }
    const createProfile = async () => {
        try {
            const resp = await axios.put(`http://localhost:3000/profile/${value}`, { ...create })
            alert('вы успешно создали профиль')
        } catch (e) {
            alert('Произошла ошибка')
        }
    }

    return (
        <>
            <br />
            <br />
            <br />
            <Button style={{ background: 'green' }} type="primary" onClick={showDrawer}>
                Редактировать Профиль
            </Button>
            <Drawer style={{ background: "green" }} width='500px' title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                <MyInput placeholder='имя' onChange={e => setCreate({ ...create, firstName: e.target.value })} />
                <br />
                <br />
                <MyInput placeholder='фамилия' onChange={e => setCreate({ ...create, lastName: e.target.value })} />
                <br />
                <br />
                <MyInput placeholder='Страна' onChange={e => setCreate({ ...create, count: e.target.value })} />
                <br />
                <br />
                <MyInput placeholder='Город' onChange={e => setCreate({ ...create, city: e.target.value })} />
                <br />
                <br />
                <MyButton onClick={createProfile}>
                    Создать
                </MyButton>
            </Drawer></>
    );
};

export default ProfileUpdate;