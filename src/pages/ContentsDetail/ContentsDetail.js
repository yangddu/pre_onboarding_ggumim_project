import React, { useState, useEffect } from 'react';
import ProductSliderContent from '../../components/ProductSliderContent/ProductSliderContent';
import ProductList from '../../components/ProductList/ProductList';
import styled from 'styled-components';

function ContentsDetail() {
  const [imageData, setImageData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  useEffect(() => {
    fetch('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(response => response.json())
      .then(data => setImageData(data));
  }, []);

  const handleSelect = productId => {
    productId === selectedProduct
      ? setSelectedProduct(0)
      : setSelectedProduct(productId);
  };

  return (
    <ContentsDetailWrpper>
      <ContentsCenter>
        <ViewImg
          onClick={() => handleSelect(0)}
          src={imageData.imageUrl}
          alt="디테일 이미지"
        />
        <ProductList
          handleSelect={handleSelect}
          selectedProduct={selectedProduct}
          productList={imageData.productList}
        />
        <ProductSliderWrap>
          <ProductSliderContent
            handleSelect={handleSelect}
            selectedProduct={selectedProduct}
            productList={imageData.productList}
          />
        </ProductSliderWrap>
      </ContentsCenter>
    </ContentsDetailWrpper>
  );
}

export default ContentsDetail;

const ContentsDetailWrpper = styled.div``;

const ContentsCenter = styled.div`
  margin: 40px auto;
  width: 800px;
  position: relative;
  overflow: hidden;
`;

const ViewImg = styled.img``;

const ProductSliderWrap = styled.div`
  display: flex;
  align-items: center;
`;
