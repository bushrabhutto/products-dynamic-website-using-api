'use client';
import { createContext, useContext, useReducer, useMemo } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];

    case 'CLEAR_CART':
      return []; // This resets cartItems to an empty array

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const totalItems = useMemo(() => cartItems.length, [cartItems]);
  const totalPrice = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.price, 0),
    [cartItems]
  );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
