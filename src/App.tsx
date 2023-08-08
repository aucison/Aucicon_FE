import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<div>My Page</div>} />
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
