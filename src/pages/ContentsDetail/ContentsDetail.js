import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import ProductList from '../../components/ProductList/ProductList';

function ContentsDetail() {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    fetch('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(response => response.json())
      .then(data => setImageData(data));
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <ContentsDetailWrpper>
      <ContentsCenter>
        <ViewImg src={imageData.imageUrl} alt="디테일 이미지" />
        <ProductList productList={imageData.productList} />
        <SlideWrapper>
          <Slider {...settings}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
          </Slider>
        </SlideWrapper>
      </ContentsCenter>
    </ContentsDetailWrpper>
  );
}

export default ContentsDetail;

const ContentsDetailWrpper = styled.div``;

const ContentsCenter = styled.div`
  margin: 0 auto;
  width: 800px;
  position: relative;
`;

const ViewImg = styled.img``;

const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow-y: hidden;
  overflow-x: auto;
`;
