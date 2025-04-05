'use client';

export default function ProductsPage() {
  const categories = [
    'Beauty', 'Fragrances', 'Furniture',
    'Groceries', 'Home Decoration', 'Kitchen Accessories',
    'Laptops', 'Mens Shirts', 'Mens Shoes',
    'Mens Watches', 'Mobile Accessories', 'Motorcycle',
    'Skin Care', 'Smartphones', 'Sports Accessories',
    'Sunglasses', 'Tablets', 'Tops',
  ];

  return (
    <div className="w-full px-6 py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-6 flex items-center justify-center gap-3">
          🛍️ Products We Offer
        </h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-10">
          Discover our diverse range of products in every category to suit your daily needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="block w-full p-5 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-1">
                {category}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                View products in the <strong>&quot;{category}&quot;</strong> category.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
