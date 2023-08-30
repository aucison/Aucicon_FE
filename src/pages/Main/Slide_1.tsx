import React from 'react';
import { styled } from 'styled-components';

const Slide_1 = () => {
  const onClickSell = () => {
    window.location.href = '/sell';
  };

  const onClickGuide = () => {
    window.location.href = '/guide';
  };
  return (
    <Slide>
      <h1>Aucison이 처음이신가요?</h1>
      <h3>중고 경매 플랫폼 Aucison</h3>
      <Buttons>
        <button style={{ marginRight: '20px' }} onClick={onClickSell}>
          판매하기
        </button>
        <button onClick={onClickGuide}>판매자 가이드 보기</button>
      </Buttons>
    </Slide>
  );
};

const Slide = styled.div`
  width: 100%;
  height: 540px;
  background-image: url('https://velog.velcdn.com/images/ea_st_ring/post/e6938055-87f6-4efe-b8fc-b73d1db1a7aa/image.png');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  h1 {
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.fontSizes.title};
  }
  h3 {
    margin-top: 8px;
    color: #555;
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  button {
    color: white;
    background: #000;
    padding: 9px 32px;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 500;
    cursor: pointer;
  }
  div {
    margin-bottom: 72px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Slide_1;
