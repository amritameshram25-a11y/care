import { FiChevronDown, FiSliders } from 'react-icons/fi'
import { categories } from '../data/products'

function FilterSidebar({ selectedCategories, setSelectedCategories, price, setPrice, rating, setRating, clearAll, mobileOpen, setMobileOpen }) {
  const toggleCategory = (category) => setSelectedCategories((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category])
  return <aside className={`filters ${mobileOpen ? 'mobile-open' : ''}`}>
    <div className="filter-title"><div><FiSliders /><h3>Filters</h3></div><button onClick={clearAll}>Clear all</button><button className="filter-close" onClick={() => setMobileOpen(false)} aria-label="Close filters">×</button></div>
    <div className="filter-group"><button className="filter-label">Category <FiChevronDown /></button><div className="check-list">{categories.map((category) => <label key={category}><input type="checkbox" checked={selectedCategories.includes(category)} onChange={() => toggleCategory(category)} /><span>{category}</span></label>)}</div></div>
    <div className="filter-group"><div className="filter-label"><span>Price range</span></div><div className="price-values"><span>₹{price}</span><span>₹2000</span></div><input className="range-input" type="range" min="0" max="2000" step="50" value={price} onChange={(event) => setPrice(Number(event.target.value))} /></div>
    <div className="filter-group"><div className="filter-label"><span>Rating</span></div><div className="rating-list">{[5, 4, 3, 2].map((value) => <label key={value}><input type="radio" name="rating" checked={rating === value} onChange={() => setRating(value)} /><span className="stars">{'★'.repeat(value)}<span className="muted-stars">{'★'.repeat(5 - value)}</span> & up</span></label>)}</div></div>
  </aside>
}

export default FilterSidebar
