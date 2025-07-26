import React from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Optional cart context

const CartItem = ({ id, title, price, image, rating, quantity }) => {
  const { removeFromCart, updateQuantity } = useCart(); // from context

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-lg p-4 shadow-sm mb-4">
      {/* Product Image */}
      <img
        src={image}
        alt={title}
        className="w-32 h-32 object-contain mb
