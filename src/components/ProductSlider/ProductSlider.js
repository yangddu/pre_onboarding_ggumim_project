import styled from 'styled-components';
import { useState, useRef } from 'react';

function ProductSlider({ product }) {
  return (
    <>
      <Img src={product.imageUrl} alt="매거진상세_사진아이템" />
    </>
  );
}

export default ProductSlider;

const Img = styled.img`
  position: relative;
  width: 106px;
  height: 106px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  user-select: none;
  cursor: pointer;
`;
