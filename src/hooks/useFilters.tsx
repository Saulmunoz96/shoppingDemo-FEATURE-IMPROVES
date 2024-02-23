import { useContext, useEffect } from "react";
import { FilterContext } from "../context/filtersContext";
import { Product } from "../utils/interfaces/Product";

export function useFilters() {
  const { filters, setFilters, products } = useContext(FilterContext);

  useEffect(() => {}, [filters.category, filters.searchWord]);

  const filterProducts = () => {
    return products.filter((product: Product) => {
      return product.price >= filters.price;
    });
  };

  return { filters, setFilters, filterProducts };
}
