import { FiHeart, FiX } from 'react-icons/fi'

function WishlistPanel({ products, onClose, onRemove, onOpenProduct }) {
  const fallbackImage = 'https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=700&q=85'
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}><aside className="wishlist-panel" role="dialog" aria-modal="true" aria-labelledby="wishlist-title"><div className="panel-heading"><h2 id="wishlist-title">Your wishlist <span>({products.length})</span></h2><button className="modal-close" onClick={onClose} aria-label="Close wishlist"><FiX /></button></div>{products.length ? <div className="wishlist-list">{products.map((product) => <div className="wishlist-item" key={product.id}><button className="wishlist-thumb" onClick={() => onOpenProduct(product)}><img src={product.image} alt={product.name} onError={(event) => { if (event.currentTarget.src !== fallbackImage) event.currentTarget.src = fallbackImage }} /></button><div><span className="product-brand">Glowify</span><h3>{product.name}</h3><strong>₹{product.price.toLocaleString('en-IN')}</strong></div><button className="remove-wishlist" onClick={() => onRemove(product.id)} aria-label={`Remove ${product.name} from wishlist`}><FiHeart /></button></div>)}</div> : <div className="empty-wishlist"><FiHeart /><h3>Your wishlist is waiting</h3><p>Save products here while you find your perfect ritual.</p></div>}</aside></div>
}

export default WishlistPanel
