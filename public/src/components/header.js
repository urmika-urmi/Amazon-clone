import React from 'react';
import { ShoppingCart, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#131921] text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className="w-24 object-contain"
        />
      </Link>

      {/* Search Bar */}
      <div className="flex-grow mx-4 hidden sm:flex">
        <input
          type="text"
          placeholder="Search"
          className="p-2 w-full rounded-l-md focus:outline-none text-black"
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-r-md">
          <Search size={20} color="#000" />
        </button>
      </div>

      {/* Right Menu */}
