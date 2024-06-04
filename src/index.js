import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './styles/index.css';
import App from './pages/App';
import AboutMe from './pages/aboutMe'
import Menu from './utils/menu'; 
import reportWebVitals from './reportWebVitals';
import './styles/App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="background-image"> 
      <Router> 
        <Routes> 
          <Route path="/" element={<App />} /> 
          <Route path="/aboutme" element={<AboutMe />} /> 
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);

reportWebVitals();
