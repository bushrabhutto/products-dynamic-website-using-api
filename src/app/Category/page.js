'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products/categories');
        if (!res.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await res.json();
        setCategories(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Network Error');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Categories are here</h1>
      <p className="text-blue-900 mb-10">
        This is the category page where all details of categories of products are listed.
      </p>

   
      {loading && (
        <div className="flex justify-center items-center py-10">
          <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <span className="ml-3 text-blue-700 font-medium">Loading categories...</span>
        </div>
      )}

 
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <strong className="font-semibold">Error: </strong> {error}
        </div>
      )}

     
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link href={`/Category/${encodeURIComponent(category.name)}`} key={index}>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:bg-blue-50 transition">
                <h5 className="text-lg font-semibold capitalize text-blue-700">
                  {category.name}
                </h5>
                <p className="text-sm text-blue-900">
                  View products in the &quot;{category.name}&quot; category.
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
