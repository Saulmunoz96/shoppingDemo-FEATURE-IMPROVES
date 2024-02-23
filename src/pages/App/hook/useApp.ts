import { useFilters } from "../../../hooks/useFilters";
import { Product } from "../../../utils/interfaces/Product";

export function useApp() {
  const { filterProducts } = useFilters();
  const filteredProducts: Product[] = filterProducts();

  return { filteredProducts };
}
