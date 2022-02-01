import React from 'react';
import styled from 'styled-components';

function ProductContent({ product }) {
  return (
    <ProductTag pointX={product.pointX} pointY={product.pointY}></ProductTag>
  );
}

export default ProductContent;

const ProductTag = styled.div`
  position: absolute;
  top: ${props => props.pointY}px;
  left: ${props => props.pointX}px;
  width: 32px;
  height: 32px;
  background: yellow;
`;
