import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useBuyProductMutation, useGetProductIdQuery } from "../redux/Product";
import Link from "next/link";
import s from "./ProductMore.module.scss";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import Header from "../Header/Header";

const ProductMore = () => {
  const [data, setData] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const [buyProduct, setbuyProduct] = useState({
    // id: Date.now(),
    firstName: "",
    lastName: "",
    addres: "",
    phone: "",
  });
  useEffect(() => {
    const getProductId = async () => {
      const resp = await fetch(`http://localhost:3000/products/${id}`);
      const data = await resp.json();
      setData(data);
    };
    getProductId();
  }, []);
  const [buy] = useBuyProductMutation();
  const handleUser = async (e) => {
    e.preventDefault();
    if (buyProduct) {
      const resp = await buy({
        userId: localStorage.getItem("id"),
        ProductId: localStorage.getItem("productId"),
        id: Date.now(),
        firstName: buyProduct.firstName,
        lastName: buyProduct.lastName,
        addres: buyProduct.addres,
        phone: buyProduct.phone,
        sellerId: data.sellerId,
      }).unwrap();
      if(resp){
        alert(" ВЫ УСПЕШНО ОФОРМИЛИ ЗАКАЗ")
      }else(
        alert("ПРОИЗОШЛА ОШИБКА")
      )
    }
  };

  return (
    <div className="">
      <Header />

      <div className={s.fon}>
        <br />
        <br />
        <br />
        <br />
        <div
          initial="hidden"
          whileInView="visible"
          id="ss"
          className="container"
        >
          <div className={s.grid}>
            <div className={s.grids} style={{ paddingTop: "20px" }}>
              <div className={s.product}>
                <div className={s.cards}>
                  <img
                    className={s.cards_img}
                    src={data.url}
                    alt="url"
                    width={350}
                    height={350}
                  />
                  <p className="">Заголовок : {data.title}</p>
                  <p>Страна : {data.count}</p>
                  <p>Город : {data.city}</p>
                  <p>Описание : {data.description}</p>
                  <p>
                    Цена : <span style={{ color: "white" }}>{data.price}$</span>
                  </p>
                  <div className=""></div>
                </div>
              </div>
            </div>
            <div className={s.inputs}>
              <MyInput
                onChange={(e) =>
                  setbuyProduct({ ...buyProduct, firstName: e.target.value })
                }
                className={s.inptu}
                placeholder="Имя"
              />
              <MyInput
                onChange={(e) =>
                  setbuyProduct({ ...buyProduct, lastName: e.target.value })
                }
                className={s.inptu}
                placeholder="Фамилия"
              />
              <MyInput
                onChange={(e) =>
                  setbuyProduct({ ...buyProduct, addres: e.target.value })
                }
                className={s.inptu}
                placeholder="Адресс"
              />
              <MyInput
                onChange={(e) =>
                  setbuyProduct({ ...buyProduct, phone: e.target.value })
                }
                className={s.inptu}
                placeholder="Телефон"
              />
              <MyButton onClick={handleUser}>Купить сейчас</MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMore;
