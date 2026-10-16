import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '../data/products'

const StoreContext = createContext(null)
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback } }

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => read('cart', []))
  const [wishlist, setWishlist] = useState(() => read('wishlist', []))
  const [user, setUser] = useState(() => read('user', null))
  const [orders, setOrders] = useState(() => read('orders', []))
  useEffect(() => localStorage.setItem('cart', JSON.stringify(cart)), [cart])
  useEffect(() => localStorage.setItem('wishlist', JSON.stringify(wishlist)), [wishlist])
  useEffect(() => user ? localStorage.setItem('user', JSON.stringify(user)) : localStorage.removeItem('user'), [user])
  useEffect(() => localStorage.setItem('orders', JSON.stringify(orders)), [orders])
  const addToCart = (product, quantity = 1) => setCart(current => { const existing = current.find(item => item.id === product.id); return existing ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item) : [...current, { ...product, quantity }] })
  const changeQuantity = (id, change) => setCart(current => current.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item))
  const removeFromCart = id => setCart(current => current.filter(item => item.id !== id))
  const toggleWishlist = product => setWishlist(current => current.includes(product.id) ? current.filter(id => id !== product.id) : [...current, product.id])
  const wishlistProducts = products.filter(product => wishlist.includes(product.id))
  const totals = useMemo(() => { const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); const discount = cart.reduce((sum, item) => sum + (item.oldPrice - item.price) * item.quantity, 0); const delivery = subtotal === 0 || subtotal >= 999 ? 0 : 79; return { subtotal, discount, delivery, total: subtotal + delivery } }, [cart])
  const placeOrder = details => { const order = { id: `GF${Date.now().toString().slice(-8)}`, date: new Date().toISOString(), status: 'Order Placed', products: cart, totals, details }; setOrders(current => [order, ...current]); setCart([]); return order }
  return <StoreContext.Provider value={{ cart, wishlist, wishlistProducts, user, orders, totals, addToCart, changeQuantity, removeFromCart, toggleWishlist, setUser, placeOrder }}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
