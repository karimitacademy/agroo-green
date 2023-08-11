import React from 'react';
import { useDeleteFolloversMutation } from '../redux/Product';
import MyButton from '../UI/button/MyButton';

const DeleteFollover = ({id}) => {
    const [deleteFollover] = useDeleteFolloversMutation()
    const handleDeleteProduct = async()=>{
        await deleteFollover(id).unwrap()
    }
    return (
        <div>
            <MyButton onClick={handleDeleteProduct}>Удалить из Корзины</MyButton>
        </div>
    );
};

export default DeleteFollover;