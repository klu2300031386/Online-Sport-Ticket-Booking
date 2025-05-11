// MinimalHeader.js
import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styling/MinimalHeader.css"; // Ensure this path is correct

function MinimalHeader() {
  return (
    <div className="minimal-header flex items-center justify-between px-4 py-2 bg-white shadow-md">
      <Link to="/" className="flex items-center space-x-2 text-gray-800 hover:text-blue-500">
        <FaHome />
        <span>Home</span>
      </Link>
    </div>
  );
}

export default MinimalHeader;
