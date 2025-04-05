'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // ✅ Import Next.js Image
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1689615579/catalog/1680994206333120512/mxpphssqkswp3nd08dhy.jpg"
            alt="Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            E-commerce
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg 
                         bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white 
                         dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
              >
                Services
              </Link>
            </li>
            <li className="relative">
              <Link
                href="/Cart"
                className="flex items-center gap-1 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 
                md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
              >
                <ShoppingCart className="w-4 h-4" />
                Cart
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white px-1.5 py-0.5 rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
