import { FiArrowUpRight, FiCheck } from 'react-icons/fi'

function Hero() {
  return <section className="hero-section">
    <div className="hero-copy">
      <p className="eyebrow">Natural skincare</p>
      <h1>Skincare that<br /><em>Feels Like You</em></h1>
      <p className="hero-description">Discover clean, effective and authentic skincare for your natural glow.</p>
      <a className="primary-button" href="#shop">Shop now <FiArrowUpRight /></a>
      <div className="benefits">{['Cruelty free', 'Dermatologist tested', 'Natural ingredients'].map((benefit) => <span key={benefit}><FiCheck /> {benefit}</span>)}</div>
    </div>
    <div className="hero-art">
      <div className="hero-circle"><img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1100&q=88" alt="Woman applying Glowify skincare" /></div>
      <div className="hero-note">Good<br />Skin<br /><span>Brighter</span><br />You</div>
      <div className="hero-sparkle">✦</div>
    </div>
  </section>
}

export default Hero
