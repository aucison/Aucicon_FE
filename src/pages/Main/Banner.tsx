import React, { useRef } from 'react';
import { styled } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide_1 from './Slide_1';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEaese: 'linear',
    pauseOnHover: true,
    pauseOnDotsHover: true,
  };

  const slickRef: any = useRef(null);

  return (
    <Section>
      <SliderWrapper>
        <Slider {...settings} ref={slickRef}>
          <div>
            <Slide_1 />
          </div>
          <div>
            <Slide_1 />
          </div>
          <div>
            <Slide_1 />
          </div>
        </Slider>
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
  height: 500px;
  display: flex;
  flex-direction: row;
  .slick-slider {
    width: 100%;
    height: 540px;
  }
  .slick-dots {
    bottom: 20px;
  }
  .slick-slider {
    max-width: 100vw;
    width: 100%;
    overflow: hidden !important;
  }
  margin-bottom: 96px;
`;

export default Banner;
