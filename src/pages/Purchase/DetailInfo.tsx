import React from 'react';
import styled from 'styled-components';

const DetailInfo = () => {
  return (
    <Container>
      <ShortDescription>
        <h3>한줄 소개</h3>
        {/* Description 자리  */}
        <span>
          사용감 없어요 <br /> 새 제품이에요.
        </span>
        <h3>상품 설명</h3>
        {/* Description 자리  */}
        <span>
          최고다 이거 <br /> 캬 레전드 바람막이
        </span>
        {/* 경매일 경우 정보 설명 */}
      </ShortDescription>
      {/* 이미지 올 자리 */}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 160px 240px;
`;

const ShortDescription = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    margin-bottom: 24px;
  }
`;
export default DetailInfo;
