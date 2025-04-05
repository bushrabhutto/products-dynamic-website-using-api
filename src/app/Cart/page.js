'use client';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

const CartPage = () => {
  const { cartItems, totalItems, totalPrice, clearCart } = useCart();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 mb-4">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          {cartItems.map((item, index) => (
            <div key={index} className="bg-gray-800 text-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.description.slice(0, 80)}...</p>
                  <p className="text-blue-400 font-bold mt-1">${item.price}</p>
                </div>
              </div>

              {/* Optional remove individual item (if needed) */}
              {/* <button className="text-sm text-red-400 hover:underline">Remove</button> */}
            </div>
          ))}

          {/* Cart Summary */}
          <div className="bg-gray-700 text-white p-4 rounded-md mb-4">
            <h4 className="font-bold text-lg mb-2">Cart Summary</h4>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="/products">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                ➕ Add More Products
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              🗑️ Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
