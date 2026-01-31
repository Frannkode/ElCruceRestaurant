import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (item) => set((state) => {
        const currentCart = Array.isArray(state.cart) ? state.cart : [];
        const existingItem = currentCart.find(cartItem => cartItem.nombre === item.nombre);
        if (existingItem) {
          return {
            cart: currentCart.map(cartItem =>
              cartItem.nombre === item.nombre
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          };
        } else {
          return { cart: [...currentCart, { ...item, quantity: 1 }] };
        }
      }),
      removeItem: (nombre) => set((state) => ({
        cart: (Array.isArray(state.cart) ? state.cart : []).filter(item => item.nombre !== nombre)
      })),
      updateQuantity: (nombre, quantity) => set((state) => ({
        cart: (Array.isArray(state.cart) ? state.cart : [])
          .map(item =>
            item.nombre === nombre ? { ...item, quantity: Math.max(0, quantity) } : item
          )
          .filter(item => item.quantity > 0)
      })),
      clearCart: () => set({ cart: [] }),
      getTotal: () => {
        const cart = Array.isArray(get().cart) ? get().cart : [];
        return cart.reduce((total, item) => total + (item.precio * item.quantity), 0);
      },
      getItemCount: () => {
        const cart = Array.isArray(get().cart) ? get().cart : [];
        return cart.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage',
      // Ensure cart is always an array when hydrating from localStorage
      onRehydrateStorage: () => (state) => {
        if (state && !Array.isArray(state.cart)) {
          state.cart = [];
        }
      }
    }
  )
);

export default useCartStore;
