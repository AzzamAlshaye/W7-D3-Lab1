// src/components/ProductList.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleDesc, setVisibleDesc] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching products. Please try again later.");
        setLoading(false);
      });
  }, []);

  const toggleDescription = (id) => {
    setVisibleDesc((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddToCart = (product) => {
    toast.success(`${product.title} added to cart!`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow hover:shadow-lg transition duration-200 p-4 flex flex-col"
          >
            <div className="flex-1 flex items-center justify-center mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain"
              />
            </div>
            <h2 className="text-lg font-semibold mb-2 truncate">
              {product.title}
            </h2>
            <p className="text-gray-500 text-sm mb-2 capitalize">
              {product.category}
            </p>
            {/* Rating Display */}
            {product.rating && (
              <p className="text-yellow-500 text-sm mb-4">
                Rating: {product.rating.rate} / 5 ({product.rating.count}{" "}
                reviews)
              </p>
            )}

            {/* Toggleable Description */}
            {visibleDesc[product.id] && (
              <p className="text-gray-700 text-sm mb-4">
                {product.description}
              </p>
            )}

            <button
              onClick={() => toggleDescription(product.id)}
              className="mb-4 text-blue-600 hover:underline focus:outline-none"
            >
              {visibleDesc[product.id]
                ? "Hide Description"
                : "Show Description"}
            </button>

            <div className="mt-auto flex items-center justify-between">
              <span className="text-xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
