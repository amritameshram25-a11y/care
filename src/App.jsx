import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WishlistPanel from './components/WishlistPanel'
import CartPanel from './components/CartPanel'
import { products } from './data/products'
import './index.css'
import './commerce.css'
import { useStore } from './context/StoreContext'
import { AccountPage, CartPage, CheckoutPage, OrderSuccessPage, OrdersPage, ProductPage, ShopPage, WishlistPage } from './pages/CommercePages'
import { AboutPage, CategoriesPage, ContactPage, HomePage } from './pages/SectionPages'

function App() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const { cart, wishlist, wishlistProducts, changeQuantity: changeCartQuantity, removeFromCart, toggleWishlist } = useStore()
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  return <div className="site-shell">
    <Navbar search={search} setSearch={setSearch} cartCount={cart.reduce((total, item) => total + item.quantity, 0)} wishlistCount={wishlist.length} onWishlistClick={() => setWishlistOpen(true)} onCartClick={() => setCartOpen(true)} />
    <main>
      <Routes>
        <Route path="/" element={<HomePage search={search} setSearch={setSearch} />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage search={search} />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/login" element={<AccountPage mode="login" />} />
        <Route path="/signup" element={<AccountPage mode="signup" />} />
        <Route path="/profile" element={<AccountPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
    {wishlistOpen && <WishlistPanel products={wishlistProducts} onClose={() => setWishlistOpen(false)} onRemove={(id) => { const product = products.find(item => item.id === id); if (product) toggleWishlist(product) }} onOpenProduct={(product) => { setWishlistOpen(false); navigate(`/product/${product.id}`) }} />}
    {cartOpen && <CartPanel cart={cart} onClose={() => setCartOpen(false)} onChangeQuantity={changeCartQuantity} onRemove={removeFromCart} />}
  </div>
}

function NotFound() { const navigate = useNavigate(); return <main className="commerce-page empty-state"><h1>Page not found</h1><button className="primary-button" onClick={() => navigate('/')}>Back home</button></main> }

export default App
