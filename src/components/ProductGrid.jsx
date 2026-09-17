import { FiSliders } from 'react-icons/fi'
import ProductCard from './ProductCard'

function ProductGrid({ products, sort, setSort, onAdd, setMobileFilters, onOpenProduct, wishlist, onToggleWishlist }) {
  return <div className="shop-content"><div className="shop-toolbar"><div><p className="eyebrow">Your daily ritual</p><h2>All products <span>({products.length})</span></h2></div><div className="toolbar-actions"><button className="mobile-filter-button" onClick={() => setMobileFilters(true)}><FiSliders /> Filters</button><label className="sort-control">Sort by: <select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured</option><option value="low">Price: Low to High</option><option value="high">Price: High to Low</option><option value="rating">Rating</option></select></label></div></div>{products.length ? <div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} onOpen={onOpenProduct} isWishlisted={wishlist.includes(product.id)} onToggleWishlist={onToggleWishlist} />)}</div> : <div className="empty-state"><span>✦</span><h3>No products found</h3><p>Try a softer search or clear your filters.</p></div>}</div>
}

export default ProductGrid
