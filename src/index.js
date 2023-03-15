import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import TestContextProvider from './context';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <TestContextProvider>
  <Router>
   <App />
  </Router> 
  </TestContextProvider>
  
   
  </React.StrictMode>
);


