import React, { useEffect } from "react";
import s from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  useEffect(() => {
    // Получаем хэш из URL
    const hash = window.location.hash;
    if (hash) {
      // Находим элемент по указанному хэшу
      const element = document.querySelector(hash);
      if (element) {
        // Плавно скроллим к элементу
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem('access')
    localStorage.removeItem('id')
    if (!localStorage.getItem('accees') & !localStorage.getItem('id')) {
      window.location.href = 'http://localhost:3001'
    }
  }

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Link href="/Content/ContentPage" className={s.logo_title}>
          AgroGreen
        </Link>
      </div>
      <div className={s.links}>
        <a className={s.links_text} href="#about_us">
          О нас
        </a>
        <Link href="/Product/ProductPage" className={s.links_text}>
          Продукты
        </Link>
        <Link href="/AddProduct/AddProductPage" className={s.links_text}>
          Добавить свой Продукты
        </Link>

        <Link href="/AddProduct/BuyPanelPage" className={s.links_text}
        >
          Заказы
        </Link>

        <a className={s.links_text} href="#footer_us">
          {" "}
          Контакты
        </a>
        <Link className={s.links_text} href="/AddProduct/FolloversPage">
          Корзина
        </Link>


      </div>
      <nav className={s.links} >
        <a onClick={handleLogOut} className={s.links_text}>
          Выйти
        </a>
      </nav>
    </header>
  );
};

export default Header;
