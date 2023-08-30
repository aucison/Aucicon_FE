import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Dummy from '../../Dummy.json';

type Item = {
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
            <ItemFormat key={item.id}>
              <Img src={item.img}></Img>
              <Brand>{item.brand}</Brand>
              <Name>{item.name}</Name>
              <Price>
                <Text>최고가액</Text>
                {/* Number 포맷팅 */}
                <Value>{`${new Intl.NumberFormat().format(
                  item.price,
                )}원`}</Value>
              </Price>
              <TimeLimit>
                <Text>남은 시간</Text>
                <Value>{item.timelimit}</Value>
              </TimeLimit>
            </ItemFormat>
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
  margin-bottom: 50px;
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
    height: 425px;
  }
  .slick-slider .slick-initialized {
    width: 100%;
  }
  .slick-slide .slick-active .slick-current {
    width: 215px;
  }
  .slick-track {
    left: 120px;
    width: 100%;
  }
`;

const ItemFormat = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content !important;
  height: fit-content !important;
`;

const Img = styled.img`
  width: 215px;
  height: 267px;
`;

const Brand = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 16px;
  font-weight: 700;
  width: 215px;
  margin-top: 8px;
  margin-bottom: 0px;
  margin-top: 8px;
  margin-bottom: 10px;
  text-align: left;
`;

const Name = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 500;
  width: 215px;
  margin-top: 0px;
  text-align: left;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 215px;
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
  }
`;

const Text = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-weight: 700;
`;

const Value = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-weight: 600;
`;

const TimeLimit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 215px;
  p {
    margin-top: 4px;
    margin-bottom: 0px;
    font-size: 14px;
  }
`;
