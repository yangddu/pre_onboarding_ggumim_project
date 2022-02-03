import React from 'react';
import ProductContent from './ProductContent/ProductContent';

function ProductList({ productList, selectedProduct, handleSelect }) {
  return (
    <>
      {productList?.map(product => (
        <ProductContent
          handleSelect={handleSelect}
          selectedProduct={selectedProduct}
          key={product.productId}
          product={product}
        />
      ))}
    </>
  );
}

export default ProductList;
