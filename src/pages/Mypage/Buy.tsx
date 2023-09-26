import React from 'react';
import { styled } from 'styled-components';
import { Routes, Route, useNavigate } from 'react-router-dom';
import dummy from '../../Dummy.json';
import BuyDetail from './BuyDetail';

const Buy = () => {
  return (
    <Routes>
      <Route path="/" element={<Format />} />
      <Route path="/:id" element={<BuyDetail />} />
    </Routes>
  );
};

const Format = () => {
  const navigate = useNavigate();

  const onClickItem = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = event.currentTarget.getAttribute('data-id');
    if (id) navigate(`./${Number(id)}`);
  };

  return (
    <Section>
      <h1>주문내역 조회</h1>
      <Header>
        <h4 style={{ margin: '0 120px' }}>상품 정보</h4>
        <h4 style={{ margin: '0 0 0 60px' }}>분류</h4>
        <h4>주문 일자</h4>
        <h4>주문 번호</h4>
        <h4>주문 금액</h4>
        <h4>주문 상태</h4>
      </Header>
      <Container>
        {dummy.Buy.map((item) => (
          <>
            <Item key={item.id} data-id={item.id} onClick={onClickItem}>
              <img src={item.img} />
              <InfoBox>
                <h4>{item.name}</h4>
                <p>{item.summary}</p>
              </InfoBox>
              <h5>{item.category}</h5>
              <h5>{item.date}</h5>
              <h5>{item.order_num}</h5>
              <h5>{item.price}</h5>
              <h5>{item.status}</h5>
            </Item>
            <div
              className="styledLine"
              style={{ width: '100%', height: '1px', background: '#D9D9D9' }}
            />
          </>
        ))}
      </Container>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.l};
    margin-top: 0;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: ${({ theme }) => theme.borders.grey};
  border-top: ${({ theme }) => theme.borders.grey};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  justify-content: space-around;
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 500;
  }
`;

const Container = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  .styledLine {
    margin: 20px 0;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0 20px 0 0;
  width: 100%;
  img {
    width: 100px;
    height: 100px;
  }
  h5 {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-top: 40px;
    height: fit-content;
  }
  &:first-child {
    margin-top: 20px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  margin-right: -10px;
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-bottom: 0;
  }
  p {
    font-size: 12px;
    margin-top: 5px;
  }
`;

export default Buy;
