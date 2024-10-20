import React, { useParams, useRef, useState } from "react";
import Nav from "../components/nav";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  return (
    <>
    <Nav/>
    <section className="max-w-4xl mx-auto p-4 mt-2">
      <div className="flex flex-col md:flex-row gap-8 bg-slate-100 p-4">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center ">
          <img
            src="/img/iphone16.webp"
            alt="Product"
            className="object-cover w-full max-w-sm rounded-lg"
          />
        </div>
        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 ">
          {/* Product Name */}
          <h1 className="text-2xl font-bold">Product Name</h1>
          {/* Price */}
          <div className="text-lg font-semibold text-red-500">600,000 VNĐ</div>
          <div className="text-gray-500 line-through">900,000 VNĐ</div>
          {/* Add to Cart Button */}
          <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-yellow-500">
            Buy Now
          </button>
        </div>
      </div>
        <div className="flex flex-col gap-5 bg-slate-100 p-4 mt-4">
            <div className="w-full items-center bg-blue-300 rounded-md h-[50px] ">
                <h1 className="font-bold text-2xl text-center m-2">Mô tả sản phẩm</h1>
            </div>
            <div className="bg-white w-full">
                <p className="p-2 overflow-scroll h-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptas sint facere nisi magni laborum numquam optio nihil esse dolores ullam accusantium assumenda id molestiae placeat deleniti expedita doloribus harum veniam pariatur, a autem temporibus. Repellat, incidunt. Unde non maxime ratione nemo labore dicta asperiores. Quia dolores harum reprehenderit quam necessitatibus corporis quasi numquam repellat nesciunt repellendus consequatur error, excepturi iste earum rem veniam saepe magni facere ipsa ipsam aliquid! Eum est dicta error ea voluptatibus veritatis soluta deserunt delectus tempore voluptatum rerum optio facilis nulla veniam libero, officia ab, dolor modi consectetur vitae magni illum pariatur. Alias asperiores neque iusto quisquam dignissimos odio, deserunt amet numquam libero vitae, tempora accusantium ea porro natus recusandae aut repellendus inventore laborum dolorem, perferendis repellat minima dolor. Corporis asperiores perferendis rem eligendi! Dolorem animi optio totam minima. Unde, fugiat voluptatem? Eaque libero necessitatibus eveniet repellat nemo aut totam dolorem vitae! Eligendi, dolore quaerat modi accusamus rerum omnis ratione sed quis explicabo provident iste saepe pariatur, alias similique accusantium nostrum vitae iusto maiores, qui autem quasi. Amet laboriosam repellendus, aspernatur ut ipsam eligendi? Ad aliquid numquam repellendus dolorum, asperiores maxime rerum esse aliquam corporis sapiente. Rerum nihil facilis consequuntur atque. Deserunt autem temporibus ab?</p>
            </div>
        </div>
        <div>
            <h1 className="font-bold text-2xl text-center m-4">Các sản phẩm liên quan</h1>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 overflow-visible place-items-center">
        {Array.from({ length: 24 }).map((item,index) => (
          <ProductCard key={index} />
        ))}
      </ul>
    </section>
    </>
  );
};

export default ProductDetail;