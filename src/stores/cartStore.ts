import { CartStoreActionsType, CartStoreStateType } from '@/type'
import { set } from 'zod/v4/mini'
import { create } from 'zustand'

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (product) => set((state) => ({ cart: state.cart.filter((p) => p.id !== product.id) })),
    clearCart: () => set(() => ({ cart: [] })),
}))


export default useCartStore;