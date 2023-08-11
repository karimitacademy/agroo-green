import React, { useEffect, useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';
import MyInput from '../UI/input/MyInput';
import axios from 'axios';
import { useAddCommentsMutation, useGetCommentQuery } from '../redux/Product';
import MyButton from '../UI/button/MyButton';
const Comments = ({id}) => {
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('bottom');
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const [profile, setProfile] = useState([])
    let value;
    if (typeof window !== "undefined") {
      value = localStorage.getItem("id") || "";
    }
    let values;
    if (typeof window !== "undefined") {
      values = localStorage.getItem("productId") || "";
    }
    useEffect(()=>{
        
        const getProfile = async()=>{
            try{
            const resp = await axios(`http://localhost:3000/profile/${value}`)
            setProfile(resp.data)
            }catch(e){
                console.log('dd')
            }
        } 
        getProfile()
    },[])
   
    const [comment, setComment] = useState({
        message: ""
})
const { data = [], isLoading } = useGetCommentQuery();
const [addComments, { isError }] = useAddCommentsMutation();
const handleProduct = async (e) => {
    e.preventDefault();
      await addComments({
        id: Date.now(),
        productId: id,
        firstName: profile.firstName,
        lastName: profile.lastName,
        message: comment.message
       }).unwrap();
  };
    return (
        <>

            <Space>

                <Button style={{ width: '300px', height: '45px', fontSize: "18px" }} type="primary" onClick={showDrawer}>
                    Отзывы
                </Button>
            </Space>
            <Drawer
                title="Отзывы"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
            >
                <input style={{width:"700px",height:'45px',marginRight:"200px"}} onChange={e => setComment({...comment, message:e.target.value})} placeholder='Добавить свой отзыв'></input>
                <MyButton onClick={handleProduct}>Добавить</MyButton>
                {
                    data.map(item =>
                    values === item.productId ?
                    <div style={{background:'whitesmoke',margin:'20px 0',padding:"20px",color:'black'}}> <p style={{marginBottom:"12px"}}>{item.firstName} {item.lastName}</p> <p>{item.message}</p>  </div>
                   : null 
                    )
                }
            </Drawer>
        </>
    );
};
export default Comments;