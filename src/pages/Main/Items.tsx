import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dummy from '../../Dummy.json';

type ClassProps = {
  title: string;
  subtitle: string;
};

const Items = ({ title, subtitle }: ClassProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Class>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Class>
      <Wrapper>
        <Slider {...settings}>
          {Dummy.items.map((item) => (
            <Item key={item.id}>
              <Img>{item.img}</Img>
              <Brand>{item.brand}</Brand>
              <Name>{item.name}</Name>
              <Price>
                <Text>최고가액</Text>
                <Value>{item.price}</Value>
              </Price>
              <TimeLimit>
                <Text>남은 시간</Text>
                <Value>{item.timelimit}</Value>
              </TimeLimit>
            </Item>
          ))}
        </Slider>
      </Wrapper>
    </div>
  );
};

export default Items;

const Class = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
`;

const Title = styled.p`
  color: #000;
  font-family: Futura;
  font-size: 36px;
  font-weight: 500;
`;

const SubTitle = styled.p`
  color: #727272;
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-weight: 300;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 255px;
  height: 425px;
`;

const Img = styled.img`
  width: 255px;
  height: 267px;
`;

const Brand = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 20px;
  font-weight: 700;
`;

const Name = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 500;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-weight: 700;
`;

const Value = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-weight: 600;
`;

const TimeLimit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
