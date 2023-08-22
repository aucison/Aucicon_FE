import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Header from '../Main/Header';

const PurchaseComplete = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      <Section>
        <Message>
          <hr />
          <p>결제가 완료되었습니다.</p>
          <hr />
        </Message>
        <Container>
          <img src="https://static.luck-d.com/product/2144/main_carousel/NIKE_AIR_JORDAN_1_HIGH_OG_TAXI_PS_AQ2664711_39616.jpg" />
          <Item>
            <Class>판매 상품</Class>
            <Name>조던 1 레트로 하이 OG 페이턴트 브레드</Name>
            <Price>203,000원</Price>
            <Info>
              <Address>배송지: 서울특별시 감자로 9 감자 빌딩</Address>
              <OrderCode>주문 번호: 1234567</OrderCode>
            </Info>
          </Item>
        </Container>
        <Buttons>
          <GoHomeBtn onClick={goHome}>홈으로 가기</GoHomeBtn>
          <OrderHistoryBtn>주문 내역 보기</OrderHistoryBtn>
        </Buttons>
      </Section>
    </div>
  );
};

export default PurchaseComplete;

const Section = styled.div`
  padding: 40px 240px;
  margin-bottom: 100px;
  hr {
    background-color: #727272;
    height: 0.8px;
  }
`;

const Message = styled.div`
  margin-top: 36px;
  p {
    color: #000;
    font-size: 36px;
    font-weight: 300;
  }
  hr {
    width: 1040px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 1040px;
  height: 260px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f5f5f5;
  margin-top: 60px;
  img {
    width: 200px;
    height: 200px;
    margin: 30px 30px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
  margin-top: 10px;
  margin-left: 40px;
`;

const Class = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 10px;
`;

const Name = styled.p`
  color: #000;
  font-size: 22px;
  font-weight: 700;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 10px;
`;

const Price = styled.p`
  color: #000;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  margin-top: 0px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    font-weight: 500;
    text-align: left;
  }
`;

const Address = styled.p`
  color: #000;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const OrderCode = styled.p`
  color: #000;
  margin-top: 0;
  margin-bottom: 38px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

const GoHomeBtn = styled.button`
  width: 220px;
  height: 60px;
  background: #fff;
  font-size: 16px;
`;

const OrderHistoryBtn = styled.button`
  width: 220px;
  height: 60px;
  background: #000;
  color: #fff;
  font-size: 16px;
`;
