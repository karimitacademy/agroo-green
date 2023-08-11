"use client";

import React, { useEffect, useState } from "react";
import { useAddProductsMutation, useGetProductQuery } from "../redux/Product";
import s from "./Add.module.scss";
import { id } from "../Autorization/Register";
import Header from "../Header/Header";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import DeleteProduct from "../Product/DeleteProduct";
import Link from "next/link";

const AddProduct = () => {
  let value;
  if (typeof window !== "undefined") {
    value = localStorage.getItem("id") || "";
  }

  const [addProduct, { isError }] = useAddProductsMutation();

  const [product, setProduct] = useState({
    id: Date.now(),
    sellerId: value,
    title: "",
    count: "",
    city: "",
    description: "",
    url: "",
    price: "",
  });
  const handleProduct = async (e) => {
    e.preventDefault();
    if (product) {
      await addProduct({ ...product }).unwrap();
      setProduct("");
      alert('Вы успешно добавили продукт')
    }
    else(
      alert('Ошибка попробуйте снова')
    )
  };

  const { data = [], isLoading } = useGetProductQuery();
  if (isLoading) return <div className="">Loading...</div>;

  return (
    <div>
      <Header />

      <form action="" className={s.form}>
        <MyInput
          type="text"
          placeholder="title"
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="count"
          onChange={(e) => setProduct({ ...product, count: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="city"
          onChange={(e) => setProduct({ ...product, city: e.target.value })}
        />
        <MyInput
          type="text"
          placeholder="description"
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <MyInput
          type="text"
          placeholder="url"
          onChange={(e) => setProduct({ ...product, url: e.target.value })}
        />
        <MyInput
          type="number"
          placeholder="price"
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <div className="" style={{ textAlign: "center" }}>
          <MyButton onClick={handleProduct}>Add Product</MyButton>
        </div>
      </form>
      <div className="container">
        <h1 className={s.title}>Ваши Продукты</h1>
        <div className={s.grids} style={{ paddingTop: "80px" }}>
          {data.map((item) => (
            <>
              {localStorage.getItem("id") === item.sellerId ? (
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
                    <p>Страна : {item.count}</p>
                    <p>Город : {item.city}</p>
                    <p>Описание : {item.description}</p>
                    <p>
                      Цена :{" "}
                      <span style={{ color: "gold" }}>{item.price}$</span>
                    </p>
                    <DeleteProduct id={item.id} />
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
