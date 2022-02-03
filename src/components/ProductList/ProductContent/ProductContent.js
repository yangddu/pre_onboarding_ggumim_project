import ToolTip from './ToolTip/ToolTip';
import styled from 'styled-components';

function ProductContent({ product, selectedProduct, handleSelect }) {
  return (
    <ProductTagWrapper
      pointX={product.pointX}
      pointY={product.pointY}
      onClick={() => handleSelect(product.productId)}
    >
      <ProductTag
        src={
          selectedProduct === product.productId
            ? 'https://cdn.ggumim.co.kr/storage/20211029145330GwwumnWNSs.png'
            : 'https://cdn.ggumim.co.kr/storage/20211029145238AlZrQ41xtg.png'
        }
      />
      <ToolTip
        imageUrl={product.imageUrl}
        productName={product.productName}
        discountRate={product.discountRate}
        priceDiscount={product.priceDiscount}
        priceOriginal={product.priceOriginal}
        outside={product.outside}
        IsShownBox={selectedProduct === product.productId ? 'flex' : 'none'}
      />
    </ProductTagWrapper>
  );
}

export default ProductContent;

const ProductTagWrapper = styled.div`
  position: absolute;
  left: ${props => props.pointY * 1.6}px;
  top: ${props => props.pointX * 1.6}px;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const ProductTag = styled.img``;
