import React from 'react';
import ProductContent from '../ProductContent/ProductContent';

function ProductList({ productList }) {
  return (
    <>
      {productList?.map(product => (
        <ProductContent key={product.productId} product={product} />
      ))}
    </>
  );
}

export default ProductList;
