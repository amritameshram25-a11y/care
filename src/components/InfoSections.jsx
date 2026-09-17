import { useState } from 'react'
import { FiArrowUpRight, FiCheck, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

function InfoSections() {
  const [sent, setSent] = useState(false)
  const submitContact = (event) => { event.preventDefault(); setSent(true); event.currentTarget.reset() }
  return <section className="info-sections"><div className="about-section" id="about"><div><p className="eyebrow">Our point of view</p><h2>Good skin starts with<br /><em>feeling like yourself.</em></h2></div><div className="about-copy"><p>Glowify makes simple, considered skincare for real routines and real days. Every formula is made to feel effective, gentle and easy to come back to.</p><div className="about-points"><span><FiCheck /> Thoughtful formulas</span><span><FiCheck /> Never tested on animals</span></div><a href="#shop">Explore our ritual <FiArrowUpRight /></a></div></div><div className="contact-section" id="contact"><div className="contact-copy"><p className="eyebrow">We are here to help</p><h2>Let's talk <em>glow.</em></h2><p>Have a question about a product, your routine or an order? Send us a note and our care team will get back to you.</p><div className="contact-details"><span><FiMail /> hello@glowify.in</span><span><FiPhone /> +91 98765 43210</span><span><FiMapPin /> New Delhi, India</span></div></div><form className="contact-form" onSubmit={submitContact}>{sent && <div className="form-success"><FiCheck /> Thanks, we will be in touch soon.</div>}<label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" required type="email" placeholder="you@example.com" /></label><label>Message<textarea name="message" required rows="3" placeholder="How can we help?" /></label><button className="primary-button" type="submit">Send message <FiArrowUpRight /></button></form></div></section>
}

export default InfoSections
