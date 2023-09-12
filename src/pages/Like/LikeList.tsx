import React from 'react';
import styled from 'styled-components';
import listForm from './assets/material-symbols_list.svg';
import nineForm from './assets/ph_dots-nine-bold.svg';
import Dummy from '../../Dummy.json';

const LikeList = () => {
  return (
    <Section>
      <h3>좋아요</h3>
      <Header>
        <Info>
          <p>전체 {Dummy.Like.length}개</p>
          <p>좋아요 상품은 최대 120일 간 보관됩니다.</p>
        </Info>
        <Form>
          <img src={listForm} />
          <img src={nineForm} />
        </Form>
      </Header>
      <Container>
        <Index>
          <p>상품</p>
          <p>분류</p>
          <p>가격</p>
        </Index>
        <Wrapper>
          {Dummy.Like.map((item) => (
            <Item key={item.id}>
              <img src={item.img} />
              <ItemInfo>
                <Name>{item.name}</Name>
                <Summary>{item.summary} </Summary>
              </ItemInfo>
              <Category>{item.category}</Category>
              <Price>{item.price}원</Price>
            </Item>
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
};

export default LikeList;

const Section = styled.div`
  padding: 40px 240px;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }
`;

const Header = styled.div`
  width: 1040px;
  height: 68px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p:first-child {
    color: #000;
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: 500;
  }
  p:last-child {
    color: #000;
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: 500;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 35px;
    height: 35px;
  }
`;

const Container = styled.div`
  width: 1040px;
  height: fit-content;
`;

const Wrapper = styled.div`
  width: 1040px;
  height: fit-content;
`;

const Index = styled.div`
  width: 1040px;
  height: 68px;
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 80px;
  justify-content: space-around;
`;

const Item = styled.div`
  width: 1040px;
  height: 180px;
  display: flex;
  flex-direction: row;
  img {
    width: 136px;
    height: 136px;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
`;

const Name = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 700;
`;

const Summary = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 400;
`;

const Category = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 600;
`;

const Price = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 600;
`;
