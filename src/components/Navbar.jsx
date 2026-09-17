import { useState } from 'react'
import { FiHeart, FiMenu, FiSearch, FiShoppingBag, FiUser, FiX } from 'react-icons/fi'

function Logo() {
  return <a className="logo" href="#top" aria-label="Glowify home"><span className="logo-mark">✦</span> Glowify</a>
}

function Navbar({ search, setSearch, cartCount, wishlistCount, onCartClick, onWishlistClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false)
  return <header className="navbar" id="top">
    <div className="nav-inner">
      <Logo />
      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        {['Home', 'Shop', 'Categories', 'About', 'Contact'].map((item) => <a key={item} href={item === 'Shop' ? '#shop' : item === 'Categories' ? '#categories' : item === 'About' ? '#about' : item === 'Contact' ? '#contact' : '#top'} onClick={() => setMenuOpen(false)}>{item}</a>)}
      </nav>
      <div className="nav-actions">
        <label className={`search-box ${mobileSearchOpen ? 'mobile-search-open' : ''}`}><button type="button" className="search-trigger" onClick={() => setMobileSearchOpen(true)} aria-label="Open search"><FiSearch /></button><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search skincare products..." aria-label="Search skincare products" />{search && <button type="button" className="search-clear" onClick={() => setSearch('')} aria-label="Clear search"><FiX /></button>}</label>
        <button className="icon-button desktop-only" aria-label="Account"><FiUser /></button>
        <button className="icon-button wishlist-button desktop-only" onClick={onWishlistClick} aria-label="Wishlist"><FiHeart />{wishlistCount > 0 && <span className="cart-count">{wishlistCount}</span>}</button>
        <button className="icon-button cart-button" onClick={onCartClick} aria-label="Shopping cart"><FiShoppingBag />{cartCount > 0 && <span className="cart-count">{cartCount}</span>}</button>
        <button className="icon-button menu-button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">{menuOpen ? <FiX /> : <FiMenu />}</button>
      </div>
    </div>
  </header>
}

export { Logo }
export default Navbar
