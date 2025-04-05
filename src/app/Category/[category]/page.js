'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Import Next.js Image component
import { useCart } from '@/context/CartContext';

const CategoryProducts = () => {
  const params = useParams();
  const category = decodeURIComponent(params.category); 
  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError('Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 capitalize text-blue-700">
        Products in "{category}"
      </h1>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`/Products/${product.id}`}>
              <div className="cursor-pointer">
                <div className="relative w-full h-48">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    className="rounded-t-lg object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                  <p className="mb-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="mb-4 font-semibold text-gray-800 dark:text-gray-200">
                    ${product.price}
                  </p>
                </div>
              </div>
            </Link>

            <div className="px-5 pb-5">
              <button
                onClick={() => addToCart(product)}
                className="w-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 rounded-lg px-4 py-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
