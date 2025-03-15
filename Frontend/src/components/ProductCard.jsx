import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductCard() {
  const { id } = useParams();
  const product = useSelector((state) =>
    state.product.find((p) => p.id === parseInt(id))
  );
  // console.log(product.price, "product", "product");

  if (!product) {
    return <h2 className="text-center text-red-500">Product Not Found</h2>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      {/* <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-[600px] transform scale-105 "> */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-[600px] transform scale-105 hover:scale-110 transition duration-300">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full rounded-xl object-cover"
        />
        <h2 className="text-3xl font-bold text-gray-800 mt-6">
          {product.name}
        </h2>
        <p className="text-2xl font-semibold text-green-600 mt-4">
          {product.price}
        </p>
        <button className="w-full bg-blue-600 text-white py-3 text-lg rounded-lg mt-6 hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
