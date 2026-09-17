import { useState } from 'react'
import { FiArrowUpRight, FiHeart, FiShoppingBag } from 'react-icons/fi'

function ProductCard({ product, onAdd, onOpen, isWishlisted, onToggleWishlist }) {
  const [added, setAdded] = useState(false)
  const handleAdd = () => { onAdd(product); setAdded(true); window.setTimeout(() => setAdded(false), 1200) }
  return <article className="product-card">
    <div className="product-image-wrap" onClick={() => onOpen(product)}><img src={product.image} alt={product.name} onError={(event) => { event.currentTarget.src = 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=85' }} />{product.badge && <span className="product-badge">{product.badge}</span>}<button className={`quick-view ${isWishlisted ? 'wishlisted' : ''}`} onClick={(event) => { event.stopPropagation(); onToggleWishlist(product) }} aria-label={`${isWishlisted ? 'Remove' : 'Add'} ${product.name} ${isWishlisted ? 'from' : 'to'} wishlist`}>{isWishlisted ? <FiHeart fill="currentColor" /> : <FiArrowUpRight />}</button></div>
    <div className="product-info"><span className="product-brand">Glowify</span><h3 onClick={() => onOpen(product)}>{product.name}</h3><p>{product.description}</p><div className="product-rating"><span>★</span> {product.rating} <small>({product.reviews})</small></div><div className="product-footer"><div><strong>₹{product.price.toLocaleString('en-IN')}</strong><del>₹{product.oldPrice.toLocaleString('en-IN')}</del></div><button className={`add-button ${added ? 'added' : ''}`} onClick={handleAdd}>{added ? 'Added' : <><FiShoppingBag /> Add to cart</>}</button></div></div>
  </article>
}

export default ProductCard
