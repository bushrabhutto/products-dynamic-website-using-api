'use client';

import React, { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';

const ProductDetails = ({ params }) => {
  const { id } = params; // ✅ Directly access id without use()
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError('Network error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-blue-600 font-semibold">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-600 bg-red-100 border border-red-300 p-6 rounded-lg text-center max-w-md">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">{product.title}</h1>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />

        <div className="space-y-4">
          <p className="text-gray-700 text-lg">{product.description}</p>
          <p className="text-xl font-semibold text-gray-900">Price: ${product.price}</p>
          <p className="text-md font-medium text-gray-700">Rating: ⭐ {product.rating}</p>
          <p className="text-md font-medium text-gray-700">Brand: {product.brand}</p>
          <p className="text-md font-medium text-gray-700">Category: {product.category}</p>

          <button
            onClick={() => addToCart(product)}
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
