import React from 'react';
import styled from 'styled-components';
const QnA = () => {
  return (
    <Container>
      <Index>
        <h3>내용</h3>
        <Info>
          <h3>작성자</h3>
          <h3>작성일</h3>
        </Info>
      </Index>
      <Divider />
      <Question>
        <h3>안녕하세요 남자친구 있으세요?</h3>
        <Info>
          <h3>asdasd</h3>
          <h3>2014-09-12</h3>
        </Info>
      </Question>
      <Question>
        <h3>달이 참 예쁘네요.</h3>
        <Info>
          <h3>asda****</h3>
          <h3>2017-08-23</h3>
        </Info>
      </Question>
      <Question>
        <h3>언제 술 한 번 같이해요.</h3>
        <Info>
          <h3>asda****</h3>
          <h3>2023-09-19</h3>
        </Info>
      </Question>
      <PaginationBar>
        <button>문의하기</button>
        {'<'}1 2 3 4{'>'}
      </PaginationBar>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Index = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  padding: 20px 240px;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgb(210, 210, 210);
  h3 {
    width: 70%;
    text-align: start;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

const Info = styled.div`
  width: 30%;
  height: 24px;
  display: flex;
  margin: 16px 0;
  h3 {
    text-align: start;
    width: 70%;
    height: 24px;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.lightGrey};
`;

const Question = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px 240px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid rgb(221, 221, 221);
  h3 {
    text-align: start;
    width: 70%;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 400;
  }
`;

const PaginationBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 0 240px;
  button {
    width: 108px;
    height: 36px;
    font-weight: 600;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #000;
  }
`;
export default QnA;
