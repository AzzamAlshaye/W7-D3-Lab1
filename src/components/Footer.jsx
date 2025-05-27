// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-600 via-pink-500 to-purple-600 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Social */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Shopful</h3>
          <p className="text-gray-200">
            We’re dedicated to providing exceptional services. We value passion,
            commitment, and innovation in everything we do.
          </p>
          <div className="flex space-x-4">
            {[FaTwitter, FaDiscord, FaGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-yellow-400 rounded-full hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-200 transition"
                aria-label="social link"
              >
                <Icon className="text-gray-900 text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-200">
            {[
              { label: "Home", to: "/" },
              { label: "Shop", to: "/shop" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="hover:text-yellow-300 transition focus:outline-none focus:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">
            Get in Touch
          </h4>
          <p className="text-gray-200">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@shopful.com"
              className="hover:text-yellow-300 transition focus:outline-none focus:underline"
            >
              info@shopful.com
            </a>
          </p>
          <p className="text-gray-200">
            <strong>Support:</strong>{" "}
            <a
              href="mailto:support@shopful.com"
              className="hover:text-yellow-300 transition focus:outline-none focus:underline"
            >
              support@shopful.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-yellow-300">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-200">
          &copy; 2025 Shopful. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
