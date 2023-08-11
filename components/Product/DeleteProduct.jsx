import React from 'react';
import { useDeleteProductMutation } from '../redux/Product';
import MyButton from '../UI/button/MyButton';

const DeleteProduct = ({id}) => {
    const [deleteProduct] = useDeleteProductMutation()
    const handleDeleteProduct = async()=>{
        await deleteProduct(id).unwrap()
    }
    return (
        <div>
            <MyButton onClick={handleDeleteProduct}>Удалить это Продукт</MyButton>
        </div>
    );
};

export default DeleteProduct;