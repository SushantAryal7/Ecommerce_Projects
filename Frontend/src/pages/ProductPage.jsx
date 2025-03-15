import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../features/cartSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchProducts } from "../features/productSlice";
// url
// const url = "https://fakestoreapi.com/products";
export default function ProductPage() {
  // const products = useSelector((state) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.product);

  console.log(products, "products useselectir");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  if (status === "loading")
    return (
      <h1 className=" mt-30 flex text-center content-center mx-50">
        Loading....
      </h1>
    );
  if (error)
    return (
      <h1 className=" mt-30 flex text-center content-center mx-50">
        'error':{error}
      </h1>
    );
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 mt-16 ">
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6"> */}
      <div className="max-w-6xl bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 rounded-xl p-4 shadow-md flex flex-col items-center"
            >
              {/* ✅ Fixed Height & Proper Image Handling */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl"
              />

              <h2 className="text-xl font-bold text-gray-800 mt-4 h-14 overflow-hidden">
                {product.title}
              </h2>

              <p className="text-lg font-semibold text-gray-900 mt-2">
                ₹{product.price}
              </p>

              <div className="flex space-x-2 mt-4 w-full">
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="w-1/2 bg-blue-600 text-white py-1 rounded-lg text-sm hover:bg-blue-700"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="w-1/2 bg-gray-300 text-gray-800 py-1 rounded-lg text-sm hover:bg-gray-400"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
