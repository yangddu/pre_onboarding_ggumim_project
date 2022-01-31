import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Product from '../../components/Product/Product';
import ProductList from '../../components/ProductList/ProductList';
import ProductContent from '../../components/ProductContent/ProductContent';
import ProductRadioBox from '../../components/ProductContent/ProductRadioBox/ProductRadioBox';

function ContentsDetail() {
  const radioBoxRef = useRef();
  const [spot, setSpot] = useState('');
  const [position2, setPosition2] = useState({ x: 50, y: 50 });
  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    fetch('https://cdn.ggumim.co.kr/test/image_product_link.json')
      .then(response => response.json())
      .then(data => setImageData(data.productList));
    // console.log(data.productList);
  }, []);

  const onClick = e => {
    const position = e.target.dataset.x;
    setSpot(position);
    console.log(position);
  };
  // useEffect(() => {
  //   radioBoxRef.current.style.top = `${imageData[0]?.pointY}`;
  //   radioBoxRef.current.style.left = `${imageData[0]?.pointX}`;
  // }, []);

  // console.log(imageData[0].pointX);
  return (
    <div>
      <ContentsDetailWrpper>
        <ViewImg>
          <Img src="http://cdn.ggumim.co.kr/cache/star/1000/2022011017094316oRcWeb8R.jpeg" />
        </ViewImg>
        <Product ProductList={imageData} />
        {/* {imageData?.map(product => {
          return ( */}
        <Dot ref={radioBoxRef} onClick={onClick} data-x="400" data-y="200">
          {/* ({imageData.pointX}, {imageData.pointY}) */} x:{position2.x}, y:{' '}
          {position2.y}
        </Dot>
        {/* );
        })} */}
      </ContentsDetailWrpper>
    </div>
  );
}

export default ContentsDetail;

const ContentsDetailWrpper = styled.div`
  /* position: relative; */
  display: inline-block;
`;

const ViewImg = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Img = styled.img`
  position: relative;
  width: 800px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  background: yellow;
  position: absolute;
`;
