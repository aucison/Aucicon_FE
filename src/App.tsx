import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
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

export default App;
