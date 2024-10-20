
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ productId}) => {
  return (
    <Link to={`/product-detail/${productId}`} className="flex flex-col w-full gap-2 shadow-lg p-2 rounded-lg bg-surface text-on-surface hover:shadow-on-background/50 hover:shadow-2xl cursor-pointer">
      <div className="text-lg font-semibold break-all ">Product name</div>
      <div className='relative w-full h-[200px] flex justify-center'>
        <img
          src="/img/iphone16.webp"
          alt="product image"
          width={300}
          height={300}
          quality={75}
          className="h-full object-contain w-full"
          priority
        />
      </div>
      <div className="text-lg">600,000 VNĐ</div>
      <div className="text-sm opacity-50 font-semibold">
        900,000 VNĐ <span className="text-red-500">-30%</span>{" "}
      </div>
    </Link>
  );
};

export default ProductCard;
