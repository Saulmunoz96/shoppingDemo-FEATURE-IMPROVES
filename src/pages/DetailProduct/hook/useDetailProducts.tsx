import { useContext } from "react";
import { useNavigatePages } from "../../../hooks/useNavigatePages";
import { FilterContext } from "../../../context/filtersContext";
import { useParams } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { products as initialProducts } from "../../../mocks/products.json";
import { Product } from "../../../utils/interfaces/Product";

export function useDetailProducts() {
  const { handleNavigation } = useNavigatePages();
  const { products } = useContext(FilterContext);
  const { id } = useParams();
  const { addToCart } = useCart();

  const itemShow: Product =
    products.find((item) => {
      console.log(item, "mytem,");
      console.log(id, "ID");
      console.log(item.idProduct, "item.idProduct");

      return item.idProduct === parseInt(id ?? "0", 10);
    }) || initialProducts[0];

  return { handleNavigation, itemShow, addToCart };
}
