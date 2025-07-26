import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';
import Subtotal from './Subtotal';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cartItems } = useCart();

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left Side - Cart Items */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Your Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <div className="bg-white p-4 rounded shadow">
              <p>Your cart is empty.</p>
              <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">
                Continue Shopping
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                quantity={item.quantity}
              />
            ))
          )}
        </div>

        {/* Right Side - Subtotal */}
        <div className="lg:w-1/3">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
