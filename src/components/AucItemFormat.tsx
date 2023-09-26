import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Item } from '../pages/Main/Items';

type ItemProps = {
  item: Item;
};

const AucItemFormat = ({ item }: ItemProps) => {
  const { id, img, brand, name, price, timelimit } = item;

  const navigate = useNavigate();
  const onClickItem = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.getAttribute('data-id');
    if (id) navigate(`/buy/${Number(id)}`);
  };

  return (
    <ItemFormat onClick={onClickItem} data-id={id}>
      <Img src={img}></Img>
      <Brand>{brand}</Brand>
      <Name>{name}</Name>
      <Price>
        <Text>최고가액</Text>
        {/* Number 포맷팅 */}
        <Value>{`${new Intl.NumberFormat().format(price)}원`}</Value>
      </Price>
      <TimeLimit>
        <Text>남은 시간</Text>
        <Value>{timelimit}</Value>
      </TimeLimit>
    </ItemFormat>
  );
};

export default AucItemFormat;

const ItemFormat = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content !important;
  height: fit-content !important;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 45px;
  border-radius: 5px;
`;

const Brand = styled.p`
  color: #000;
  font-size: 16px;
  font-weight: 700;
  width: 200px;
  margin-top: 8px;
  margin-bottom: 0px;
  margin-top: 8px;
  margin-bottom: 10px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Name = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 500;
  width: 200px;
  margin-top: 0px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  border-top: 1px solid #e1e1e1;
  p {
    margin-top: 12px;
    margin-bottom: 0px;
    font-size: 14px;
  }
`;

const Text = styled.p`
  color: #000;
  font-weight: 500;
`;

const Value = styled.p`
  color: #000;
  font-weight: 800;
`;

const TimeLimit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  p {
    margin-top: 4px;
    margin-bottom: 0px;
    font-size: 14px;
  }
`;
