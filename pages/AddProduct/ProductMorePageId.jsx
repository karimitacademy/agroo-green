
import ProductMore from '@/components/ProductMore/ProductMore';
import { useRouter } from 'next/router';
import React from 'react';

const ProductMorePage = () => {
    const router = useRouter();
  const { id } = router.query;

    return (
        <div>
            <ProductMore/>
        </div>
    );
};

export default ProductMorePage;