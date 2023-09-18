import React from 'react';
import { styled } from 'styled-components';
import Dummy from '../../Dummy.json';
const NorItem = () => {
  const item = Dummy.items[4];
  console.log(item);
  return (
    <Section>
      {/* 상품 메인 */}
      <Wrapper>
        <ImageSection>
          <ImageWrapper>
            <img src={item.img} alt="product_img" />
          </ImageWrapper>
        </ImageSection>
        <InfoSection>
          <CategoryInfo>
            {/* TODO: 경매/판매, 일반/핸드메이드 구분하여 텍스트*/}
            <h3>판매 상품 ㆍ</h3>
            <h3>일반</h3>
          </CategoryInfo>

          <Divider />
          <h2>{item.name}</h2>
          <h3>{item.brand}</h3>
          <Info>
            <h2>{`${new Intl.NumberFormat().format(item.price)}원`}</h2>
            <img src="https://velog.velcdn.com/images/ea_st_ring/post/b33749e0-3bc7-4576-b997-e245fb192477/image.svg" />
          </Info>

          <Divider />
          <ButtonBox>
            <Button>구매하기</Button>
          </ButtonBox>
        </InfoSection>
      </Wrapper>
      {/* 상품 정보 */}
    </Section>
  );
};

const Section = styled.div`
  padding: 120px 240px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 368px;
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
  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
  h3 {
    margin: 8px 0 8px 0;
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: 600;
  }
`;

const CategoryInfo = styled.div`
  width: 100%;
  display: flex;
  margin-top: 4px;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px !important;
  margin-top: 20px;
  margin-bottom: 12px;
  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: 600;
  }
  img {
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.lightGrey};
  margin: 24px 0 24px 0;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Button = styled.button`
  width: 200px;
  height: 60px;
  background-color: black;
  color: white;
  align-self: flex-end;
`;

export default NorItem;
