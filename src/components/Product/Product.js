import React from 'react';
import ProductContent from '../ProductContent/ProductContent';

function Product({ ProductList }) {
  console.log(ProductList);
  return (
    <div>
      {ProductList.map(product => (
        <ProductContent key={product.productId} product={product} />
      ))}
    </div>
  );
}

export default Product;
