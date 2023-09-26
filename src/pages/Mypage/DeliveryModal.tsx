import React from 'react';
import styled from 'styled-components';
import closeBtn from './assets/closeBtn.svg';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeliveryModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  return (
    <ModalContainer>
      {isOpen ? (
        <ModalBackdrop onClick={onClose}>
          <ModalView onClick={(e) => e.stopPropagation()}>
            <Header>
              <h3>배송상태</h3>
              <CloseBtn src={closeBtn} onClick={onClose} />
            </Header>
            <Info>
              <Status>
                <div>현재 상태</div>
                <p>배송 완료</p>
              </Status>
              <Invoice>
                <div>송장 번호</div>
                <p>1242139823189 (CJ 대한통운)</p>
              </Invoice>
            </Info>
            <Tracking>
              <TrackingIndex>
                <h4>배송 시간</h4>
                <h4>현재 위치</h4>
                <h4>배송 상태</h4>
                <h4>기사 연락처</h4>
              </TrackingIndex>
            </Tracking>
          </ModalView>
        </ModalBackdrop>
      ) : null}
    </ModalContainer>
  );
};

export default DeliveryModal;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ModalBackdrop = styled.div`
  z-index: 1;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalView = styled.div.attrs(() => ({
  role: 'dialog',
}))`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 700px;
  height: fit-content;
  padding: 30px 40px;
  background-color: #ffffff;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.s};
    margin: 0;
  }
`;

const CloseBtn = styled.img`
  width: 12px;
  height: 12px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const Status = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin: 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    width: 120px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin: 0;
    padding-left: 20px;
  }
`;

const Invoice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  div {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin: 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    width: 120px;
    height: 30px;
    text-align: center;
    line-height: 30px;
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin: 0;
    padding-left: 20px;
  }
`;

const Tracking = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TrackingIndex = styled.div`
  width: 100%;
  height: 40px;
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
