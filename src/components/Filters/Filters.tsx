import "./Filters.css";
import { useFilter } from "./hooks/useFilter";

export function Filters() {
  const {
    minPriceFilterId,
    categoryFilterId,
    filters,
    handleCategory,
    handlePriceCounter,
    handleWord,
  } = useFilter();

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          id={minPriceFilterId}
          type="range"
          step={20}
          min={0}
          max={1000}
          onChange={handlePriceCounter}
          value={filters.price}
          style={{
            width: "400px",
          }}
        />
        <span>$ {filters.price}</span>
      </div>
      <div>
        <label>Search</label>
        <input type="text" placeholder="search" onChange={handleWord} />
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          id={categoryFilterId}
          onChange={handleCategory}
          value={filters.category}
        >
          <option value="all">all</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Mobiles</option>
          <option value="keyboards">Keyboards</option>
        </select>
      </div>
    </section>
  );
}
