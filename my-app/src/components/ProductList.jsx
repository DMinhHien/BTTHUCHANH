import React from 'react';

const ProductList = ({ products, editProduct, deleteProduct, setShowForm }) => {
  return (
    <div >
      
      <button
        onClick={() => setShowForm(true)}
        className="mb-4 bg-black text-white p-2 rounded"
      >
        New Product
      </button>
      <h2 className="text-xl font-bold mb-2">Product List</h2>
      <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">Name</th>
            <th className="border border-gray-300 p-2 text-left">Price</th>
            <th className="border border-gray-300 p-2 text-left">Image</th>
            <th className="border border-gray-300 p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border border-gray-300 p-2">{product.name}</td>
              <td className="border border-gray-300 p-2">{product.price} VNĐ</td>
              <td className="border border-gray-300 p-2">
                <img src={product.image} alt={product.name} className="w-20 h-20 object-cover" />
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => editProduct(product)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ProductList;