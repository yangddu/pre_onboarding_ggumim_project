import { Swiper, SwiperSlide } from 'swiper/react';
import ProductSlider from './ProductSlider/ProductSlider';
import styled from 'styled-components';

function ProductSliderContent({ productList, handleSelect, selectedProduct }) {
  const params = {
    slidesPerView: 6.2,
    spaceBetween: 0,
    centeredSlides: false,
  };

  return (
    <Swiper {...params}>
      {productList?.map(product => (
        <SwiperSlide key={product.productId}>
          <SwiperCon>
            {product.outside ? (
              ''
            ) : (
              <DiscountBadge>{product.discountRate}%</DiscountBadge>
            )}
            <ProductSlider
              handleSelect={handleSelect}
              selectedProduct={selectedProduct}
              product={product}
            />
          </SwiperCon>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductSliderContent;

const SwiperCon = styled.div`
  position: relative;
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 0px;
`;

const DiscountBadge = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  background-image: url(//cdn.ggumim.co.kr/storage/20211117191419RW6JS6bjRm.png);
  width: 24px;
  height: 28px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 11px;
  font-weight: bold;
  line-height: 25px;
  color: white;
  text-align: center;
  padding-left: 1px;
  z-index: 100;
`;
