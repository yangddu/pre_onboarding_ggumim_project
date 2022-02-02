import React, { useState } from 'react';
import styled from 'styled-components';

function ProductContent({ product }) {
  console.log(product.productId);
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
          <Tooltip>
            <TooltipImage src={product.imageUrl} />
            <TooltipDesc>
              <TooltipDescName>{product.productName}</TooltipDescName>
              <TooltipDescPrice>
                {product.discountRate ? (
                  <>
                    <TooltipDescPriceDiscountRate>
                      {product.discountRate}%
                    </TooltipDescPriceDiscountRate>
                    <TooltipDescPriceDiscount>
                      {product.priceDiscount}
                    </TooltipDescPriceDiscount>
                  </>
                ) : (
                  <>
                    <TooltipDescPriceLabel>예상가</TooltipDescPriceLabel>
                    <TooltipDescPriceDiscount>
                      {product.priceOriginal}
                    </TooltipDescPriceDiscount>
                  </>
                )}
              </TooltipDescPrice>
            </TooltipDesc>
          </Tooltip>
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

const Tooltip = styled.div`
  z-index: 1000;
  display: flex;
  align-items: center;
  position: absolute;
  top: 28px;
  left: -20px;
  background-color: rgba(255, 255, 255, 0.95);
  width: 220px;
  height: 86px;
  padding: 8px 0 8px 8px;
  margin-top: 16px;
  border-radius: 7px;
  -webkit-box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  box-shadow: 3px 3px 8px 0 rgb(0 0 0 / 20%);
  font-size: 14px;
  color: #4a4a4a;

  &:before {
    content: '';
    position: absolute;
    top: -8px;
    left: 34px;
    width: 12px;
    height: 8px;
    background-image: url('http://cdn.ggumim.co.kr/storage/20211118152728RO3OXnhkrC.png');
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 1100;
  }
`;

const TooltipImage = styled.img`
  flex-shrink: 0;
  width: 70px;
  height: 70px;
  margin-right: 8px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

const TooltipDesc = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-bottom: 2px;
  overflow: hidden;
  text-align: left;
`;

const TooltipDescName = styled.div`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: initial;
  width: 100%;
  color: #333c45;
  text-overflow: ellipsis;
  line-height: 1.3em;
`;

const TooltipDescPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const TooltipDescPriceLabel = styled.span`
  color: #898f94;
  font-size: 11px;
  line-height: 1.2em;
  font-weight: bold;
  margin-right: 4px;
`;

const TooltipDescPriceDiscountRate = styled.span`
  color: #ff585d;
  font-size: 16px;
  font-weight: bold;
  margin-right: 4px;
`;

const TooltipDescPriceDiscount = styled.span`
  display: flex;
  align-items: center;
  color: #181d1f;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
`;

const ViewTag = styled.img``;

const ClosedTagWrapper = styled.div``;

const ClosedTag = styled.img``;
