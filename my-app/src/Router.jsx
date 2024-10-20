import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetailPage from './Page/ProductDetailPage';
import HomePage from './Page/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product-detail/:productId" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;