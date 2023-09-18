import React from 'react';
import { styled } from 'styled-components';
import Dummy from '../../Dummy.json';
import SelectBar from './SelectBar';

const AucItem = () => {
  const item = Dummy.items[4];
  console.log(item);
  return (
    <Section>
      <Wrapper>
        <ImageSection>
          <ImageWrapper>
            <img src={item.img} alt="product_img" />
          </ImageWrapper>
        </ImageSection>
        <InfoSection>
          <CategoryInfo>
            {/* TODO: 경매/판매, 일반/핸드메이드 구분하여 텍스트*/}
            <h3>경매 상품 ㆍ</h3>
            <h3>일반</h3>
          </CategoryInfo>
          <Divider />

          <TimerBox>마감까지 24:36:40.18</TimerBox>
          <h1>{item.name}</h1>
          <h3>{item.brand}</h3>
          <PriceInfo>
            <Info>
              <h3>현재 가격</h3>
              <h2 style={{ color: 'red' }}>{`${new Intl.NumberFormat().format(
                item.price,
              )}원`}</h2>
            </Info>
            <Info>
              <h3>시작가</h3>
              <h2>{`${new Intl.NumberFormat().format(item.price)}원`}</h2>
            </Info>
            <img src="https://velog.velcdn.com/images/ea_st_ring/post/b33749e0-3bc7-4576-b997-e245fb192477/image.svg" />
          </PriceInfo>
          <SelectBar />
        </InfoSection>
      </Wrapper>
    </Section>
  );
};

const Section = styled.div`
  padding: 120px 240px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
`;

const ImageSection = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  border: ${({ theme }) => theme.borders.grey};
  margin-top: 8px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const InfoSection = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 40px;
  h1 {
    margin: 12px 0 0 4px;
    font-size: ${({ theme }) => theme.fontSizes.l};
  }
  h3 {
    margin: 0 0 8px 6px;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

const CategoryInfo = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4px;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin: 0;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px !important;
  margin-bottom: 16px;
  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: 600;
  }
  h3 {
    width: 100px;
    margin: 2px 0 0 4px;
    text-align: start;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

const TimerBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 164px;
  height: 32px;
  padding: 0 20px;
  background-color: #000;
  color: #fff;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  border-radius: 24px;
  margin-top: 24px;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.grey};
  margin-top: 16px;
`;

const PriceInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 24px;
  margin-bottom: 36px;
  img {
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    align-self: flex-end;
  }
`;

export default AucItem;
