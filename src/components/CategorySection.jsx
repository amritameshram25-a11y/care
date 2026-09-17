import { categoryImages, categories } from '../data/products'

function CategorySection({ selectedCategories, onCategorySelect, onViewAll }) {
  return <section className="categories-section" id="categories">
    <div className="section-heading"><p className="eyebrow">Find your ritual</p><h2>Shop by category</h2><button className="view-all-link" onClick={onViewAll}>View all <span>↗</span></button></div>
    <div className="category-row">{categories.map((category) => <button className={`category-item ${selectedCategories.includes(category) ? 'selected' : ''}`} key={category} onClick={() => onCategorySelect(category)}><span className="category-image"><img src={categoryImages[category]} alt="" onError={(event) => { event.currentTarget.src = categoryImages.Cleansers }} /></span><span>{category}</span></button>)}</div>
  </section>
}

export default CategorySection
