import React, { useEffect, useState } from 'react';
import s from './Buy.module.scss'
import { useRouter } from 'next/router';
import Header from '../Header/Header';
const BuyMore = () => {
  const [data, setData] = useState([])
  const router = useRouter();
  const { id } = router.query;
  useEffect(()=>{
    const getProductId = async()=>{
      const resp = await fetch(`http://localhost:3000/products/${id}`)
      const data = await resp.json()
      setData(data)
    }
    getProductId()
  },[])
    return (
        <div className={s.body}>
          <Header/>
        <div className={s.grids} style={{ paddingTop: "40px" }}>
          <div  className="">
            
              <div className={s.cards}>
                <img
                src={data.url}
                  className={s.cards_img} 
                  alt="url"
                  width={350}
                  height={350}
                />
                <p className="">
                  Заголовок : {data.title}
                </p>
                <p >Страна : {data.count}</p>
                <p >Город : {data.city}</p>
                <p >Описание : {data.description}</p>
                <p >
                  Цена : <span style={{ color: "gold" }}>{data.price}$</span>
                </p>
                <div  className="">
                </div>
              </div>
          </div>
        
      </div>
      </div>
    );
};

export default BuyMore;