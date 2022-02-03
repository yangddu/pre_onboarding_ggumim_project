import { useEffect, useState } from 'react';
import styled from 'styled-components';

function ProductSlider({ product, handleSelect, selectedProduct }) {
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(selectedProduct === product.productId ? true : false);
  }, [selectedProduct, product.productId]);

  return (
    <ImgWrap isSelected={isSelected}>
      <Img
        src={product.imageUrl}
        alt="매거진상세_사진아이템"
        onClick={() => {
          handleSelect(product.productId);
        }}
      />
    </ImgWrap>
  );
}

export default ProductSlider;

const ImgWrap = styled.div`
  border: ${props =>
    props.isSelected &&
    `
      2px solid #ff659e;
    `};
  margin: ${props =>
    props.isSelected &&
    `
      -2px;
    `};
  border-radius: ${props =>
    props.isSelected &&
    `
      18px;
    `};
`;

const Img = styled.img`
  box-sizing: border-box;
  position: relative;
  width: 106px;
  height: 106px;
  margin-bottom: -3px;
  border-radius: 16px;
  border: 0.5px solid #aaafb9;
  user-select: none;
  cursor: pointer;
`;
