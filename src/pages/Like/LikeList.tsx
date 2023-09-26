import React, { useState } from 'react';
import styled from 'styled-components';
import Dummy from '../../Dummy.json';

const LikeList = () => {
  const [common, setCommon] = useState(true);
  const onClickMenu = (booleanValue: boolean) => {
    setCommon(booleanValue);
  };

  return (
    <Section>
      <h3>좋아요</h3>
      <Header>
        <Info>
          <p>전체 {Dummy.Like.length}개</p>
          <span>ㅣ</span>
          <p>좋아요 상품은 최대 120일 간 보관됩니다.</p>
        </Info>
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
            판매
          </h3>
        </SelectMenu>
      </Header>
      <Container>
        <Wrapper>
          {Dummy.Like.map((item) => (
            <ItemFormat key={item.id}>
              <Img src={item.img}></Img>
              <Brand>{item.brand}</Brand>
              <Name>{item.name}</Name>
              <Price>
                <Text>최고가액</Text>
                {/* Number 포맷팅 */}
                <Value>{`${new Intl.NumberFormat().format(
                  item.price,
                )}원`}</Value>
              </Price>
              <TimeLimit>
                <Text>남은 시간</Text>
                <Value>{item.timelimit}</Value>
              </TimeLimit>
            </ItemFormat>
          ))}
        </Wrapper>
      </Container>
    </Section>
  );
};

export default LikeList;

const Section = styled.div`
  padding: 40px 240px;
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xxl};
    float: left;
    margin-bottom: 8px;
  }
`;

const Header = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  float: left;
  p:first-child {
    color: #000;
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: 600;
  }
  p:last-child {
    color: #000;
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: 600;
  }
  span {
    color: #6a6a6a;
    margin-left: 12px;
    margin-right: 12px;
  }
`;

const SelectMenu = styled.div`
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  /* box-sizing: border-box; */
  h3 {
    font-size: ${({ theme }) => theme.fontSizes.s};
    margin: 0 20px 1px 0;
    font-weight: 500;
    cursor: pointer;
  }
  div {
    width: 1px;
    height: 16px;
    background-color: #333333;
    margin-right: 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: fit-content;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 85px;
  margin-top: 44px;
`;

const ItemFormat = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content !important;
  height: fit-content !important;
`;

const Img = styled.img`
  width: 197px;
  height: 244px;
`;

const Brand = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 16px;
  font-weight: 700;
  width: 197px;
  margin-top: 8px;
  margin-bottom: 0px;
  margin-top: 8px;
  margin-bottom: 10px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Name = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-size: 14px;
  font-weight: 500;
  width: 197px;
  margin-top: 0px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 197px;
  p {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 14px;
  }
`;

const Text = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-weight: 700;
`;

const Value = styled.p`
  color: #000;
  font-family: Apple SD Gothic Neo;
  font-weight: 600;
`;

const TimeLimit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 197px;
  p {
    margin-top: 4px;
    margin-bottom: 0px;
    font-size: 14px;
  }
`;
