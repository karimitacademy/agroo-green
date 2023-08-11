import React, { useState } from 'react';
import { useAddFolloversMutation } from '../redux/Product';
import MyButton from '../UI/button/MyButton';

const AddFollovers = ({item}) => {

    const [addFolover, { isError }] = useAddFolloversMutation()
    const handleUser = async (e) => {
        e.preventDefault()
        await addFolover({
            id: Date.now,
            userId: localStorage.getItem('id'),
            title: item.title,
            sellerId: item.sellerId,
            count: item.count,
            city: item.city,
            description: item.description,
            url: item.url,
            price: item.price,
            productId:item.id
        }).unwrap()
        
    }
    return (
        <div>
            <MyButton onClick={handleUser}>Добавить в Корзину</MyButton>
        </div>
    );
};

export default AddFollovers;