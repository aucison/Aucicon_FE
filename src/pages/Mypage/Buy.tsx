import React from 'react';
import { styled } from 'styled-components';

const Buy = () => {
  return (
    <Section>
      <h1>주문내역 조회</h1>
      <Header>
        <h4 style={{ margin: '0 120px 0 80px' }}>상품 정보</h4>
        <h4>분류</h4>
        <h4>주문 일자</h4>
        <h4>주문 번호</h4>
        <h4>주문 금액</h4>
        <h4>주문 상태</h4>
      </Header>
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

export default Buy;
