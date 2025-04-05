'use client';

export default function AboutPage() {
  return (
    <div className="w-full px-4 py-12 bg-white dark:bg-gray-900">
      <div className="w-full border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-2">
          🛍️ About Us
        </h1>

        <p className="text-gray-700 dark:text-gray-300 mb-8 text-center text-lg">
          Welcome to our E-Commerce platform where you’ll find a wide variety of high-quality products curated just for you. We are committed to providing the best shopping experience with top-notch service and secure checkout.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 w-full">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">👗 Women Clothing</h3>
            <p className="text-gray-600 dark:text-gray-300">Trendy outfits, traditional wear, casuals, and more — perfect for every occasion.</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">🧒 Kids Wear</h3>
            <p className="text-gray-600 dark:text-gray-300">Adorable and comfortable clothing for infants, toddlers, and growing kids.</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">💄 Makeup & Beauty</h3>
            <p className="text-gray-600 dark:text-gray-300">Premium cosmetics and skincare products for every skin type and tone.</p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">🛒 Groceries</h3>
            <p className="text-gray-600 dark:text-gray-300">Daily essentials, organic produce, snacks, and household supplies — delivered to your doorstep.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-700 dark:text-gray-300 text-base">
            We are proud to serve our customers with high-quality products and a seamless online shopping experience.
            Thank you for choosing us!
          </p>
        </div>
      </div>
    </div>
  );
}
