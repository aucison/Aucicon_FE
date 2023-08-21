import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Items from './Items';

const Main = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Items title="Hot Item" subtitle="인기 경매 상품" />
      <Items title="New Item" subtitle="새 경매 상품" />
    </div>
  );
};

export default Main;
