import React from 'react';
import { useCart } from '../context/CartContext'; // Assuming you use Context

const Subtotal = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full sm:w-80">
      <h2 className="text-lg font-semibold mb-2">Subtotal ({totalItems} items):</h2>
      <p className="text-xl font-bold mb-4">₹{totalPrice}</p>

      <label className="inline-flex items-center mb-4">
        <input type="checkbox" className="mr-2" />
        This order contains a gift
      </label>

      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
