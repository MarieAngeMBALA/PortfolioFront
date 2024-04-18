import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import Footer from './components/footer/footer';
import { AuthProvider } from './context/authContext';

const App = () => {
  React.useEffect(() => {
    Modal.setAppElement('#root');
  }, []);
  
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          
            {/* <Route path="/" element={<Portfolio />} /> */}
            {/* <Route path="/portfolio" element={<Portfolio />} /> */}
            <Portfolio />
            <Footer className="Footer"/>
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;

