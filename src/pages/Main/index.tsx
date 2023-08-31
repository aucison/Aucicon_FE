import React, { useState } from 'react';
import Banner from './Banner';
import { styled } from 'styled-components';
import Items from './Items';

const Main = () => {
  const [common, setCommon] = useState(true);
  const onClickMenu = (booleanValue: boolean) => {
    setCommon(booleanValue);
  };

  return (
    <div>
      <Banner />
      <SelectMenu>
        <h3
          onClick={() => onClickMenu(true)}
          style={common ? { fontWeight: 700 } : { fontWeight: 500 }}
        >
          경매
        </h3>
        <div />
        <h3
          onClick={() => onClickMenu(false)}
          style={common ? { fontWeight: 500 } : { fontWeight: 700 }}
        >
          비경매
        </h3>
      </SelectMenu>
      <div
        style={{ width: '100%', height: '1px', backgroundColor: '#333333' }}
      />
      <Items title="Hot Item" subtitle="인기 경매 상품" />
      <Items title="New Item" subtitle="새 경매 상품" />
    </div>
  );
};

const SelectMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 20px 120px;
  box-sizing: border-box;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin: 0 20px 1px 0;
    font-weight: 500;
    cursor: pointer;
  }
  div {
    width: 1px;
    height: 24px;
    background-color: #333333;
    margin-right: 20px;
  }
`;

export default Main;
