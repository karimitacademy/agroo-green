import React from 'react';
import { useDeleteBuyMutation } from '../redux/Product';

const Deletebuy = ({id}) => {
  const [DeleteBuy] = useDeleteBuyMutation()
  const handleDeleteProduct = async()=>{
      await DeleteBuy(id).unwrap()
  }
  return (
    <div>
      <button onClick={handleDeleteProduct}>УДАЛИТЬ</button>
    </div>
  );
};

export default Deletebuy;