import React from 'react';
import s from './Cards.module.scss'
const Cards = () => {
    return (
        <div className={s.container}>
            <div className={s.grids}>
                <div className={s.card}>Зерна пшеницы</div>
                <div className={s.cards_grids}>
                    <div className={s.grid_card1}>Кукуруза</div>
                    <div className={s.grid_card2}>Кофе</div>
                    <div className={s.grid_card3}>Тыква</div>
                    <div className={s.grid_card4}>Пшеница</div>
                </div>
            </div>
        </div>
    );
};

export default Cards;