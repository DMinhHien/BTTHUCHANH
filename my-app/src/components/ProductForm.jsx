import React, { useState } from 'react';

const ProductForm = ({ addProduct, currentProduct, updateProduct }) => {
  const [name, setName] = useState(currentProduct ? currentProduct.name : '');
  const [price, setPrice] = useState(currentProduct ? currentProduct.price : '');
  const [image, setImage] = useState(currentProduct ? currentProduct.image : '');

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Lấy tệp đầu tiên từ input file
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { 
      id: currentProduct ? currentProduct.id : Date.now(), 
      name, 
      price, 
      image: URL.createObjectURL(image) // Tạo URL cho hình ảnh
    };

    if (currentProduct) {
      updateProduct(productData);
    } else {
      addProduct(productData);
    }

    // Reset form
    setName('');
    setPrice('');
    setImage('');
  };

  return (
    
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="file"
        accept="image/*" // Chỉ chấp nhận file hình ảnh
        onChange={handleImageChange}
        className="border p-2 rounded mb-2"
        required
      />
      <button type="submit" className="bg-yellow-400 text-white p-2 rounded">
        {currentProduct ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
