"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem, Product } from "@/lib/types";

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  count: number;
  subtotal: number;
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("kinetic-cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        window.localStorage.removeItem("kinetic-cart");
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem("kinetic-cart", JSON.stringify(items));
  }, [items, hydrated]);

  function addItem(product: Product) {
    setItems((current) => {
      const found = current.find((item) => item.product.id === product.id);
      if (found) {
        return current.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...current, { product, quantity: 1 }];
    });
    setIsOpen(true);
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.product.id !== id));
  }

  function setQuantity(id: string, quantity: number) {
    if (quantity <= 0) return removeItem(id);
    setItems((current) =>
      current.map((item) => (item.product.id === id ? { ...item, quantity } : item)),
    );
  }

  const value = useMemo<CartContextValue>(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    return {
      items,
      isOpen,
      count,
      subtotal,
      addItem,
      removeItem,
      setQuantity,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
      clearCart: () => setItems([]),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
