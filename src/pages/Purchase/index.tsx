import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
// eslint-disable-next-line no-unused-vars
import AucItem from './AucItem';
// eslint-disable-next-line no-unused-vars
import NorItem from './NorItem';
import DetailInfo from './DetailInfo';
import QnA from './QnA';
import Dummy from '../../Dummy.json';

interface Item {
  id: number;
  is_wish: string;
  category: string;
  kind: string;
  img: string;
  brand: string;
  name: string;
  price: number;
  timelimit: string;
}

const Purchase = () => {
  // TODO: 개별 상품 조회를 통해 값 채우기
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item>();
  const itemData = Dummy.items;
  const [board, setBoard] = useState(true);
  const onClickMenu = (booleanValue: boolean) => {
    setBoard(booleanValue);
  };

  useEffect(() => {
    const item = itemData.find((item) => item.id === Number(id));
    console.log(item);
    item && setItem(item);
  }, [id, itemData]);
  if (!item) return <div>잘못된 접근입니다.</div>;
  return (
    <>
      {(item.category === 'auc' && <AucItem id={id} />) || <NorItem id={id} />}
      <SelectMenu>
        <h3
          onClick={() => onClickMenu(true)}
          style={
            board
              ? { fontWeight: 700, borderBottom: '4px solid black' }
              : { fontWeight: 500 }
          }
        >
          상품 정보
        </h3>
        <h3
          onClick={() => onClickMenu(false)}
          style={
            board
              ? { fontWeight: 500 }
              : { fontWeight: 700, borderBottom: '4px solid black' }
          }
        >
          문의
        </h3>
      </SelectMenu>
      <Divider />
      {(board && <DetailInfo />) || <QnA />}
    </>
  );
};

const SelectMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding: 0px 240px;
  box-sizing: border-box;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin: 0 40px 0 0;
    font-weight: 500;
    cursor: pointer;
    height: 40px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.grey};
`;

export default Purchase;
