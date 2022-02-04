import React from 'react';
import numberWithCommas from '../../../../utils/numberWithCommas';
import styled from 'styled-components';

function ToolTip({
  imageUrl,
  productName,
  discountRate,
  priceDiscount,
  outside,
  IsShownBox,
}) {
  return (
    <Tooltip IsShownBox={IsShownBox}>
      <TooltipImage src={imageUrl} />
      <TooltipDesc>
        <TooltipDescName>{productName}</TooltipDescName>
        <TooltipDescPrice>
          {outside ? (
            <>
              <TooltipDescPriceLabel>예상가</TooltipDescPriceLabel>
              <TooltipDescPriceDiscount>
                {numberWithCommas(priceDiscount)}
              </TooltipDescPriceDiscount>
            </>
          ) : (
            <>
              <TooltipDescPriceDiscountRate>
                {discountRate}%
              </TooltipDescPriceDiscountRate>
              <TooltipDescPriceDiscount>
                {numberWithCommas(priceDiscount)}
              </TooltipDescPriceDiscount>
            </>
          )}
        </TooltipDescPrice>
      </TooltipDesc>
      <TooltipMovieIconWrapper>
        <MovieIconImg
          src="//cdn.ggumim.co.kr/storage/20211102181936xqHzyWAmb8.png"
          width="20"
          height="20"
        />
      </TooltipMovieIconWrapper>
    </Tooltip>
  );
}

export default ToolTip;

const Tooltip = styled.div`
  display: ${props => props.IsShownBox && props.IsShownBox};
  z-index: 1000;
  align-items: center;
  position: absolute;
  top: 28px;
  left: -136px;
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
    right: 61px;
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

const TooltipMovieIconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
  margin-right: 2px;
`;

const MovieIconImg = styled.img``;
