import React from "react";
import { useGetBuysQuery } from "../redux/Product";
import Link from "next/link";
import s from "./buypannel.module.scss";
import Header from "../Header/Header";
import Deletebuy from "./Deletebuy";

const BuysPanel = () => {
  const { data = [], isLoading } = useGetBuysQuery();
  let value;
  if (typeof window !== "undefined") {
    value = localStorage.getItem("id") || "";
  }
  if (isLoading) return <div className="">Loading...</div>;
  return (
    <div className="">
      <Header />
      <div className="container" style={{ paddingTop: "60px" }}>

        {data.map((item) => (
          <div className="">
            {value === item.sellerId ?
              <div className={s.card}>
                <p className="">Адрес : {item.addres}</p>
                <p className="">Имя : {item.firstName}</p>
                <p className="">Фамилия : {item.lastName}</p>
                <p className="">Контакты : {item.phone}</p>
                <Link  href={`/Content/${item.ProductId}`} style={{marginRight: "10px"}}>
                  Перейти
              </Link> 
                <Deletebuy id={item.id}/> 
                <div className=""></div>
              </div>
                
               
              : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuysPanel;

