import { useState } from 'react'
import { FiHeart, FiMinus, FiPlus, FiShoppingBag, FiX } from 'react-icons/fi'

function ProductDetailModal({ product, onClose, onAdd, isWishlisted, onToggleWishlist }) {
  const [quantity, setQuantity] = useState(1)
  if (!product) return null
  const addProduct = () => { onAdd(product, quantity); onClose() }

  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <section className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-detail-title">
      <button className="modal-close" onClick={onClose} aria-label="Close product details"><FiX /></button>
      <div className="modal-image"><img src={product.image} alt={product.name} /></div>
      <div className="modal-copy"><span className="product-brand">Glowify / {product.category}</span><h2 id="product-detail-title">{product.name}</h2><div className="product-rating"><span>★</span> {product.rating} <small>({product.reviews} reviews)</small></div><p className="modal-description">{product.description} Made with thoughtful ingredients and a gentle finish, it is designed to fit beautifully into your everyday ritual.</p><div className="modal-price"><strong>₹{product.price.toLocaleString('en-IN')}</strong><del>₹{product.oldPrice.toLocaleString('en-IN')}</del></div><div className="modal-actions"><div className="quantity-control"><button onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity"><FiMinus /></button><span>{quantity}</span><button onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity"><FiPlus /></button></div><button className="primary-button modal-add" onClick={addProduct}><FiShoppingBag /> Add to cart</button></div><button className={`wishlist-action ${isWishlisted ? 'active' : ''}`} onClick={() => onToggleWishlist(product)}><FiHeart /> {isWishlisted ? 'Saved to wishlist' : 'Add to wishlist'}</button></div>
    </section>
  </div>
}

export default ProductDetailModal
