import { createContext, useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

const CartContext = createContext();

const CART_STORAGE_KEY = "cart";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, qtyToAdd = 1) => {
    console.log("Producto agregado al carrito:", product, qtyToAdd);
    setCartItems((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: qtyToAdd }];
      }
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.title} agregado al carrito`,
      showConfirmButton: false,
      timer: 1500,
      /*Evita que SweetAlert2 cambie height/overflow en <html> y <body>*/
      heightAuto: false,
      /*opcional: evita añadir padding al body cuando oculta el scrollbar */
      scrollbarPadding: false,
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
