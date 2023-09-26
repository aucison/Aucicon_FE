import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dummy from '../../Dummy.json';
import AucItemFormat from '../../components/AucItemFormat';

export type Item = {
  id?: number;
  img: string;
  brand: string;
  name: string;
  price: number;
  timelimit: string;
};

type ClassProps = {
  title: string;
  subtitle: string;
};

const Items = ({ title, subtitle }: ClassProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <Section>
      <Class>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Class>
      <Wrapper>
        <Slider {...settings}>
          {(Dummy.items as Item[]).map((item) => (
            <AucItemFormat key={item.id} item={item} />
          ))}
        </Slider>
      </Wrapper>
    </Section>
  );
};

export default Items;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Class = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 120px;
  margin-bottom: 10px;
`;

const Title = styled.p`
  color: #000;
  font-family: Futura;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 2px;
`;

const SubTitle = styled.p`
  color: #727272;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 300;
  margin-top: 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #fafafa;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  .slick-list {
    overflow: hidden !important;
    max-width: 100vw;
    width: 100% !important;
    height: 425px;
  }
  .slick-slider {
    overflow: hidden !important;
    max-width: 100vw;
    width: 100% !important;
    height: 405px;
  }
  .slick-slider .slick-initialized {
    width: 100%;
  }
  .slick-slide .slick-active .slick-current {
    width: 180px !important;
  }
  .slick-track {
    left: 120px;
    width: 100%;
  }
`;
