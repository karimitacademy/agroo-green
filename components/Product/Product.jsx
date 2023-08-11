import React, { useState } from "react";
import s from "./Product.module.scss";
import { useGetProductQuery } from "../redux/Product";
import { motion } from "framer-motion";
import Link from "next/link";
import AddFollovers from "../Follvers/AddFollovers";
import MyLoader from "../UI/loader/MyLoader";
import Pagination from "../Pagination/Pagination";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [videoPerPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Состояние для отслеживания типа сортировки: "asc" - по возрастанию, "desc" - по убыванию
 
  let value;
  if (typeof window !== "undefined") {
    value = localStorage.getItem("id") || "";
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const { data = [], isLoading } = useGetProductQuery();
  const lastVideoIndex = currentPage * videoPerPage;
  const firstVideoIndex = lastVideoIndex - videoPerPage;
  const currentVideo = data.slice(firstVideoIndex, lastVideoIndex);
  const filteredVideos = currentVideo
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    if (isLoading)
    return (
      <div className="">
        <MyLoader />
      </div>
    );
  const textAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  const featureAnimation = {
    hidden: {
      y: 400,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      id="ss"
      className="container"
    >
      <div className={s.card}>
        <MyInput
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск продуктов..."
          style={{width:'700px'}}
        />
        <MyButton onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
          Сортировать по цене {sortOrder === "asc" ? "вверх" : "вниз"}
        </MyButton>
      </div>
      <div className={s.grids} style={{ paddingTop: "80px" }}>
        {filteredVideos.map((item) => (
          <div variants={textAnimation} className="" key={item.id}>
            <Link
              href={
                item.sellerId !== value
                  ? `/AddProduct/${item.id}`
                  : "/Product/ProductPAge"
              }
              onClick={() => localStorage.setItem("productId", item.id)}
              className={s.product}
            >
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
                <p variants={textAnimation} className="">
                  Заголовок : {item.title}
                </p>
                <p variants={textAnimation}>
                  Цена : <span style={{ color: "gold" }}>{item.price}$</span>
                </p>
                <div variants={featureAnimation} className="">
                  {item.sellerId !== value ? (
                    <AddFollovers item={item} />
                  ) : (
                    <button style={{ color: "white", fontSize: "30px" }}>
                      Ваш Продукт
                    </button>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <br />
      <br />
      <br />
      <Pagination
        videoPerPage={videoPerPage}
        totalSize={data.length}
        paginate={paginate}
      />
    </motion.section>
  );
};

export default Product;
