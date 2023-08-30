import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Main from './pages/Main';
import Sell from './pages/Sell';
import { createGlobalStyle } from 'styled-components';
import Header from './pages/Main/Header';
import ItemList from './pages/ItemList';
import LikeList from './pages/Like/LikeList';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/mypage" element={<div>My Page</div>} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/like" element={<LikeList />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
	body {
		padding: 0;
		margin: 0;
	}
`;

export default App;
