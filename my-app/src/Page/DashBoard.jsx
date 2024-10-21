import React, { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import Nav from '../components/nav';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [showForm, setShowForm] = useState(false); // Thêm trạng thái để theo dõi việc hiển thị form

  const addProduct = (product) => {
    setProducts([...products, product]);
    setShowForm(false); // Ẩn form sau khi thêm
  };

  const editProduct = (product) => {
    setCurrentProduct(product);
    setShowForm(true); // Hiển thị form khi chỉnh sửa
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    setCurrentProduct(null);
    setShowForm(false); // Ẩn form sau khi cập nhật
  };

  const deleteProduct = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);
    setProducts(filteredProducts);
  };

  return (
    <>
    <Nav/>
    <div className="max-w-4xl mx-auto p-4">
      {showForm && (
        <ProductForm 
          addProduct={addProduct} 
          currentProduct={currentProduct} 
          updateProduct={updateProduct} 
        />
      )}
      <ProductList 
        products={products} 
        editProduct={editProduct} 
        deleteProduct={deleteProduct} 
        setShowForm={setShowForm} // Truyền hàm setShowForm
      />
    </div>
    </>
  );
};

export default Dashboard;