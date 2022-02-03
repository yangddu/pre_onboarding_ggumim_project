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
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin: 28px 0px;
`;
