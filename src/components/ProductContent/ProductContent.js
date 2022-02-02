import React, { useState } from 'react';
import styled from 'styled-components';
import ToolTip from '../ToolTip/ToolTip';

function ProductContent({ product }) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleTag = () => {
    setIsClicked(prev => !prev);
  };

  return (
    <ProductTag
      pointX={product.pointX}
      pointY={product.pointY}
      onClick={toggleTag}
    >
      {!isClicked ? (
        <ViewTag src="http://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png" />
      ) : (
        <ClosedTagWrapper>
          <ClosedTag src="http://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png" />
          <ToolTip
            imageUrl={product.imageUrl}
            productName={product.productName}
            discountRate={product.discountRate}
            priceDiscount={product.priceDiscount}
            priceOriginal={product.priceOriginal}
            outside={product.outside}
          />
        </ClosedTagWrapper>
      )}
    </ProductTag>
  );
}

export default ProductContent;

const ProductTag = styled.div`
  position: absolute;
  top: ${props => props.pointY}px;
  left: ${props => props.pointX}px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const ViewTag = styled.img``;

const ClosedTagWrapper = styled.div``;

const ClosedTag = styled.img``;
