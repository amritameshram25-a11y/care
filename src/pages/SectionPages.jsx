import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CategorySection from '../components/CategorySection'
import FilterSidebar from '../components/FilterSidebar'
import Hero from '../components/Hero'
import InfoSections from '../components/InfoSections'
import ProductGrid from '../components/ProductGrid'
import { products } from '../data/products'
import { useStore } from '../context/StoreContext'

export function HomePage({ search, setSearch }) {
  const navigate = useNavigate()
  const { wishlist, addToCart, toggleWishlist } = useStore()
  const [selectedCategories, setSelectedCategories] = useState([])
  const [price, setPrice] = useState(2000)
  const [rating, setRating] = useState(0)
  const [sort, setSort] = useState('featured')
  const [mobileFilters, setMobileFilters] = useState(false)
  const visibleProducts = useMemo(() => {
    const query = search.toLowerCase().trim()
    return products.filter(product => (!query || [product.name, product.category, product.description, product.tags].join(' ').toLowerCase().includes(query)) && (!selectedCategories.length || selectedCategories.includes(product.category)) && product.price <= price && product.rating >= rating).sort((first, second) => sort === 'low' ? first.price - second.price : sort === 'high' ? second.price - first.price : sort === 'rating' ? second.rating - first.rating : first.id - second.id)
  }, [search, selectedCategories, price, rating, sort])
  const clearAll = () => { setSearch(''); setSelectedCategories([]); setPrice(2000); setRating(0); setSort('featured') }
  const selectCategory = category => setSelectedCategories(current => current.includes(category) ? current.filter(item => item !== category) : [...current, category])
  return <><Hero /><CategorySection selectedCategories={selectedCategories} onCategorySelect={selectCategory} onViewAll={() => navigate('/shop')} /><section className="shop-section" id="shop"><FilterSidebar selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} price={price} setPrice={setPrice} rating={rating} setRating={setRating} clearAll={clearAll} mobileOpen={mobileFilters} setMobileOpen={setMobileFilters} /><ProductGrid products={visibleProducts} sort={sort} setSort={setSort} onAdd={addToCart} setMobileFilters={setMobileFilters} onOpenProduct={product => navigate(`/product/${product.id}`)} wishlist={wishlist} onToggleWishlist={toggleWishlist} /></section><InfoSections /></>
}

export function CategoriesPage() {
  const navigate = useNavigate()
  return <main className="section-page"><CategorySection selectedCategories={[]} onCategorySelect={(category) => navigate(`/shop?category=${encodeURIComponent(category)}`)} onViewAll={() => navigate('/shop')} /></main>
}

export function AboutPage() {
  return <main className="section-page"><InfoSections section="about" /></main>
}

export function ContactPage() {
  return <main className="section-page"><InfoSections section="contact" /></main>
}
