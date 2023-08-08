import React, { useState, useRef, useCallback } from 'react';
import { styled } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Banner = () => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slickRef: any = useRef(null);
  const prevArrow = useCallback(() => slickRef.current.slickPrev(), []);
  const nextArrow = useCallback(() => slickRef.current.slickNext(), []);
  const [common, setCommon] = useState(true);
  const onClickMenu = (booleanValue: boolean) => {
    setCommon(booleanValue);
  };

  return (
    <Section>
      <SelectMenu>
        <h3
          onClick={() => onClickMenu(true)}
          style={common ? { fontWeight: 700 } : { fontWeight: 500 }}
        >
          일반
        </h3>
        <div />
        <h3
          onClick={() => onClickMenu(false)}
          style={common ? { fontWeight: 500 } : { fontWeight: 700 }}
        >
          핸드메이드
        </h3>
      </SelectMenu>
      <SliderWrapper>
        <PrevBtn onClick={prevArrow}></PrevBtn>
        <Slider {...settings} ref={slickRef}>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </Slider>
        <NextBtn onClick={nextArrow}></NextBtn>
      </SliderWrapper>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 589px;
  display: flex;
  flex-direction: row;
`;

const SelectMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 20px 120px;
  box-sizing: border-box;
  h3 {
    font-size: 20px;
    margin: 0 20px 1px 0;
    font-weight: 500;
    cursor: pointer;
  }
  div {
    width: 1px;
    height: 24px;
    background-color: #333333;
    margin-right: 20px;
  }
`;

const PrevBtn = styled.button`
  position: relative;
  left: 0;
  border: none;
  background-color: white;
  margin-right: 36px;
`;

const NextBtn = styled.button`
  right: 0;
  border: none;
  background-color: white;
  margin-left: 36px;
`;

export default Banner;
