// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 text-white h-[80vh] flex flex-col justify-center items-center px-6 lg:px-80 space-y-6">
        <h1 className="text-5xl font-bold">
          Discover Amazing Finds at Shopful
        </h1>
        <p className="text-lg max-w-2xl text-center">
          Dive into our curated collection of top-quality products—from
          electronics and fashion to home goods and beyond. Shop smart and save
          big with unbeatable deals and fast delivery.
        </p>
        <Link
          to="/shop"
          className="inline-block mt-4 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg transition"
        >
          Start Shopping
        </Link>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h18v2H3V3zm2 6h14v2H5V9zm-2 6h18v2H3v-2zm2 6h14v2H5v-2z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900">
            Wide Selection
          </h3>
          <p className="text-gray-600">
            Explore thousands of products across multiple categories.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900">
            Secure Checkout
          </h3>
          <p className="text-gray-600">
            Your payments are protected with industry-standard security.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M3 6h18M3 14h18M3 18h18"
            />
          </svg>
          <h3 className="text-xl font-semibold text-gray-900">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your order delivered quickly to your doorstep.
          </p>
        </div>
      </section>
    </main>
  );
}
