/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Search } from './assets/search.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <HeaderWrapper>
      <PostSection>
        <Logo
          onClick={() => window.location.replace('/')}
          style={{ cursor: 'pointer' }}
        />
        <HeaderSearch>
          <HeaderInput
            placeholder="브랜드, 상품명"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <Search style={{ cursor: 'pointer' }} />
        </HeaderSearch>
      </PostSection>
      <NavSection>
        <NavItem to="/market">Market</NavItem>
        <NavItem to="/sell">Sell</NavItem>
        <NavItem to="/mypage">My Page</NavItem>
        <NavItem to="/like">Like</NavItem>
      </NavSection>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 120px;
  box-sizing: border-box;
  width: 100%;
  border-bottom: 1px solid #ebebeb;
`;

const HeaderSearch = styled.div`
  width: 330px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #757575;
  margin-left: 60px;
  margin-top: 10px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderInput = styled.input`
  width: 330px;
  height: 20px;
  border: none;
  outline: none;
  font-size: 12px;
`;

const PostSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const NavSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: fit-content;
  margin-top: 10px;
`;

const NavItem = styled(Link)`
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  color: #000;
  position: relative;
  overflow: hidden;
  & + & {
    margin-left: 40px;
  }
  &::before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: #666666;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
`;

export default Header;
