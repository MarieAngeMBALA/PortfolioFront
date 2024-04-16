import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';

const App = () => {
  React.useEffect(() => {
    Modal.setAppElement('#root');
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

