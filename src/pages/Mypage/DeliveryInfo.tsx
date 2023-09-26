import React, { useState } from 'react';
import styled from 'styled-components';
import DeliveryModal from './DeliveryModal';

const DeliveryInfo = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModalHandler = () => {
    setModalOpen(true);
  };
  const closeModalHandler = () => {
    setModalOpen(false);
  };

  return (
    <Section>
      <h1>배송지 정보</h1>
      <Header>
        <h4>배송지명</h4>
        <h4>받는 사람</h4>
        <h4>주소</h4>
        <h4>연락처</h4>
        <h4>배송 조회</h4>
      </Header>
      <Container>
        <p>집</p>
        <p>김감자</p>
        <AddressBox>
          <h5>[우편번호]</h5>
          <p>
            서울특별시 마포구 와우산로 94
            <br />
            상세주소
          </p>
        </AddressBox>
        <p>010 - **** -1234</p>
        <ModalBtn onClick={openModalHandler}>조회하기</ModalBtn>
        <DeliveryModal isOpen={modalOpen} onClose={closeModalHandler} />
      </Container>
      <div
        className="styledLine"
        style={{ width: '100%', height: '0.8px', background: '#727272' }}
      />
    </Section>
  );
};

export default DeliveryInfo;

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
  flex-direction: row;
  justify-content: space-around;
  padding: 0 20px 0 0;
  width: 100%;
  p {
    margin-top: 60px;
  }
`;

const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 20px 0;
  h5 {
    margin-bottom: 0;
  }
  p {
    margin-top: 2px;
  }
`;

const ModalBtn = styled.button`
  width: 88px;
  height: 36px;
  border-radius: 50px;
  border: 1px solid #6a6a6a;
  background: #fff;
  margin-top: 56px;
`;
