import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import { NavLink, useParams } from 'react-router-dom';
import Buy from './Buy';
import Sell from './Sell';
import Address from './Address';
import Info from './Info';

const Format = () => {
  const { name } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = React.useState(name || 'buy'); // [현재 페이지, 페이지 변경 함수
  const pages = [
    { name: 'buy', content: <Buy /> },
    { name: 'sell', content: <Sell /> },
    { name: 'address', content: <Address /> },
    { name: 'info', content: <Info /> },
  ];

  useEffect(() => {
    const page = pages.find((page) => page.name === name);
    setPage(page?.name || 'buy');
  }, [name]);

  return (
    <Section>
      <NavMenu>
        <h2>마이페이지</h2>
        <Divider />
        <NavLink to="/mypage/buy">내 구매 관리</NavLink>
        <NavLink to="/mypage/sell">내 판매 관리</NavLink>
        <NavLink to="/mypage/address">배송지 관리</NavLink>
        <NavLink to="/mypage/info">내 정보 관리</NavLink>
      </NavMenu>
      <Contents>{pages.find((page) => page.name === name)?.content}</Contents>
    </Section>
  );
};

const Section = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.paddings.desktop};
  display: flex;
`;

const NavMenu = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.m};
    margin: 0;
  }
  a {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
    margin-top: 12px;
  }
  a.active {
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: 600;
  }
`;

const Divider = styled.div`
  width: 93%;
  height: 2px;
  background: ${({ theme }) => theme.colors.grey};
  margin-top: 16px;
`;

const Contents = styled.div`
  width: 90%;
  padding: 0 80px;
  display: flex;
  flex-direction: column;
`;

export default Format;
