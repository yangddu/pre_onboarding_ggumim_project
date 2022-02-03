import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductSlider from '../ProductSlider/ProductSlider';
import styled from 'styled-components';

function ProductSliderContent({ productList }) {
  const params = {
    slidesPerView: 6.2,
    spaceBetween: 6,
    centeredSlides: false,
  };

  return (
    <>
      <Swiper {...params}>
        {productList?.map(product => (
          <SwiperSlide>
            <SwiperCon>
              <ProductSlider key={product.productId} product={product} />
            </SwiperCon>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ProductSliderContent;

const SwiperCon = styled.div`
  display: inline-flex;
  justify-content: center;
  width: 106px;
  height: 106px;
  margin: 28px 0px;
`;
