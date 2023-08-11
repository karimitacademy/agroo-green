import React from "react";
import { useGetFolloversQuery } from "../redux/Product";
import s from "./follovers.module.scss";
import DeleteFollover from "./DeleteFollover";
import Header from "../Header/Header";
import MyLoader from "../UI/loader/MyLoader";
import MyButton from "../UI/button/MyButton";
import Link from "next/link";
const Follovers = () => {
  const { data = [], isLoading } = useGetFolloversQuery();
  if (isLoading)
    return (
      <div className="">
        <MyLoader />
      </div>
    );
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <h1 className={s.title}>Корзина</h1>
        <div className={s.grids} style={{ paddingTop: "80px" }}>
          {data.map((item) => (
            <>
              {localStorage.getItem("id") === item.userId ? (
                <div className={s.product}>
                  <div className={s.cards}>
                    <img
                      className={s.cards_img}
                      src={
                        item.url.length > 1
                          ? item.url
                          : "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
                      }
                      alt="url"
                      width={350}
                      height={350}
                    />
                    <p className="">Заголовок : {item.title}</p>
                    <p>
                      Цена :{" "}
                      <span style={{ color: "gold" }}>{item.price}$</span>
                    </p>
                    <DeleteFollover id={item.id} />
                    <Link href={`/AddProduct/${item.productId}`}
                     ><MyButton>Оформить заказ</MyButton></Link>

                  </div>
                </div>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Follovers;