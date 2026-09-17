import { useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategorySection from './components/CategorySection'
import FilterSidebar from './components/FilterSidebar'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import ProductDetailModal from './components/ProductDetailModal'
import WishlistPanel from './components/WishlistPanel'
import CartPanel from './components/CartPanel'
import InfoSections from './components/InfoSections'
import { products } from './data/products'
import './index.css'

function App() {
  const [search, setSearch] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [price, setPrice] = useState(2000)
  const [rating, setRating] = useState(0)
  const [sort, setSort] = useState('featured')
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileFilters, setMobileFilters] = useState(false)

  const visibleProducts = useMemo(() => {
    const query = search.toLowerCase().trim()
    const filtered = products.filter((product) => {
      const matchesSearch = !query || [product.name, product.category, product.description].some((field) => field.toLowerCase().includes(query))
      const matchesCategory = !selectedCategories.length || selectedCategories.includes(product.category)
      return matchesSearch && matchesCategory && product.price <= price && product.rating >= rating
    })
    return [...filtered].sort((first, second) => {
      if (sort === 'low') return first.price - second.price
      if (sort === 'high') return second.price - first.price
      if (sort === 'rating') return second.rating - first.rating
      return first.id - second.id
    })
  }, [search, selectedCategories, price, rating, sort])

  const clearAll = () => { setSearch(''); setSelectedCategories([]); setPrice(2000); setRating(0); setSort('featured') }
  const viewAllProducts = () => { clearAll(); document.getElementById('shop').scrollIntoView({ behavior: 'smooth' }) }
  const selectCategory = (category) => setSelectedCategories((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category])
  const addToCart = (product, quantity = 1) => setCart((current) => {
    if (current.some((item) => item.id === product.id)) return current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item)
    return [...current, { ...product, quantity }]
  })
  const changeCartQuantity = (id, change) => setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item))
  const removeFromCart = (id) => setCart((current) => current.filter((item) => item.id !== id))
  const toggleWishlist = (product) => setWishlist((current) => current.includes(product.id) ? current.filter((id) => id !== product.id) : [...current, product.id])
  const wishlistProducts = products.filter((product) => wishlist.includes(product.id))

  return <div className="site-shell">
    <Navbar search={search} setSearch={setSearch} cartCount={cart.reduce((total, item) => total + item.quantity, 0)} wishlistCount={wishlist.length} onWishlistClick={() => setWishlistOpen(true)} onCartClick={() => setCartOpen(true)} />
    <main>
      <Hero />
      <CategorySection selectedCategories={selectedCategories} onCategorySelect={selectCategory} onViewAll={viewAllProducts} />
      <section className="shop-section" id="shop"><FilterSidebar selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} price={price} setPrice={setPrice} rating={rating} setRating={setRating} clearAll={clearAll} mobileOpen={mobileFilters} setMobileOpen={setMobileFilters} /><ProductGrid products={visibleProducts} sort={sort} setSort={setSort} onAdd={addToCart} setMobileFilters={setMobileFilters} onOpenProduct={setSelectedProduct} wishlist={wishlist} onToggleWishlist={toggleWishlist} /></section>
      <InfoSections />
    </main>
    <Footer />
    {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAdd={addToCart} isWishlisted={wishlist.includes(selectedProduct.id)} onToggleWishlist={toggleWishlist} />}
    {wishlistOpen && <WishlistPanel products={wishlistProducts} onClose={() => setWishlistOpen(false)} onRemove={(id) => setWishlist((current) => current.filter((item) => item !== id))} onOpenProduct={(product) => { setWishlistOpen(false); setSelectedProduct(product) }} />}
    {cartOpen && <CartPanel cart={cart} onClose={() => setCartOpen(false)} onChangeQuantity={changeCartQuantity} onRemove={removeFromCart} />}
  </div>
}

export default App
