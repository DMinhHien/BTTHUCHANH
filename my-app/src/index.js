import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './Page/HomePage';
import ProductDetailPage from './Page/ProductDetailPage';
import reportWebVitals from './reportWebVitals';
import App from './Router'
import Dashboard from './Page/DashBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);
reportWebVitals();
