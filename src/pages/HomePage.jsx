// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router";
import { FaListUl, FaPaperPlane, FaClipboardCheck } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-600 via-pink-700 to-purple-800 text-gray-100 h-[80vh] flex flex-col justify-center items-center px-6 lg:px-80 space-y-6">
        <h1 className="text-5xl font-bold">Welcome to Shopful</h1>
        <p className="text-lg max-w-2xl">
          Your one-stop portal for browsing opportunities, submitting
          applications, and tracking your progress—all in a seamless, modern
          interface.
        </p>
        <Link
          to="/apply"
          className="inline-block mt-4 bg-amber-600 hover:bg-amber-500 text-gray-100 font-semibold py-3 px-6 rounded-lg transition"
        >
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center space-y-4">
          <FaListUl size={48} className="text-amber-600" />
          <h3 className="text-xl font-semibold text-gray-900">
            Browse Listings
          </h3>
          <p className="text-gray-600">
            Explore all available opportunities with detailed descriptions and
            requirements.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center space-y-4">
          <FaPaperPlane size={48} className="text-amber-600" />
          <h3 className="text-xl font-semibold text-gray-900">
            Submit Application
          </h3>
          <p className="text-gray-600">
            Fill out and send your application in just a few clicks.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center space-y-4">
          <FaClipboardCheck size={48} className="text-amber-600" />
          <h3 className="text-xl font-semibold text-gray-900">Track Status</h3>
          <p className="text-gray-600">
            Keep up-to-date on every stage of your application lifecycle.
          </p>
        </div>
      </section>
    </main>
  );
}
