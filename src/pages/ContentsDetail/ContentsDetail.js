import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductList from '../../components/ProductList/ProductList';
import ProductSliderContent from '../../components/ProductSliderContent/ProductSliderContent';

function ContentsDetail() {
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    fetch('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(response => response.json())
      .then(data => setImageData(data));
  }, []);

  return (
    <ContentsDetailWrpper>
      <ContentsCenter>
        <ViewImg src={imageData.imageUrl} alt="디테일 이미지" />
        <ProductList productList={imageData.productList} />
        <ProductSliderWrap>
          <ProductSliderContent productList={imageData.productList} />
        </ProductSliderWrap>
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
  overflow: hidden;
`;

const ViewImg = styled.img``;

const ProductSliderWrap = styled.div`
  display: flex;
  align-items: center;
`;
