import React from 'react';
import styled from 'styled-components';
import Dummy from '../Dummy.json';
import LikeBtn from './Main/assets/like_btn.svg';

const Item = () => {
  return (
    <Section>
      <SearchKeyword>
        <p>
          <span>&apos;검색어&apos;</span> 에 대한 상품 n개
        </p>
      </SearchKeyword>
      <Wrapper>
        {Dummy.items.map((item) => (
          <Container key={item.id}>
            <Img src={item.img} />
            <Brand>{item.brand}</Brand>
            <Name>{item.name}</Name>
            <Info>
              <Price>{item.price}원</Price>
              <img src={LikeBtn} />
            </Info>
          </Container>
        ))}
      </Wrapper>
    </Section>
  );
};

export default Item;

const Section = styled.div`
  padding: 40px 240px;
`;

const SearchKeyword = styled.div`
  width: 1040px;
  height: 100px;
  margin-top: 36px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #eaeaea;
  p {
    color: #000;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    float: left;
    margin-left: 30px;
    margin-top: 30px;
  }
  p span {
    color: #000;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 85px;
  margin-top: 44px;
`;

const Container = styled.div`
  width: fit-content;
  height: 388px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 215px;
  flex-shrink: 0;
`;

const Brand = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  float: left;
  text-align: left;
  margin-top: 8px;
  margin-bottom: 0px;
`;

const Name = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  float: left;
  text-align: left;
  margin-top: 8px;
  margin-bottom: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    width: 20px;
    height: 20px;
    margin-bottom: 6px;
  }
`;

const Price = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  float: left;
  margin-top: 10px;
`;
