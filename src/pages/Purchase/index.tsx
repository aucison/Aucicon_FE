import React from 'react';
import { styled } from 'styled-components';
import Dummy from '../../Dummy.json';
const Purchase = () => {
  // TODO: 개별 상품 조회를 통해 값 채우기

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
          <h3>{item.brand}</h3>
          <h1>{item.name}</h1>
          <Info>
            <h2>{`${new Intl.NumberFormat().format(item.price)}원`}</h2>
            <img src="https://velog.velcdn.com/images/ea_st_ring/post/b33749e0-3bc7-4576-b997-e245fb192477/image.svg" />
          </Info>
          <Divider />

          <Divider />
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
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  h3 {
    margin: 0 0 8px 0;
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 120px;
  height: 20px !important;
  h2 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.xl};
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
  background: ${({ theme }) => theme.colors.grey};
  margin-top: 16px;
`;

export default Purchase;
