import React from 'react';
import { Star } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Optional: for adding to cart

const Product = ({ id, title, price, image, rating }) => {
  const { addToCart } = useCart(); // Optional context API hook

  const handleAddToCart = () => {
    const product = { id, title, price, image, rating };
    addToCart(product); // Add to cart function from context
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-lg transi
