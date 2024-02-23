import { createContext, useEffect, useState } from "react";
import { Filter } from "../utils/interfaces/Filter.interface";
import { products as initialProducts } from "../mocks/products.json";
import { Product } from "../utils/interfaces/Product";
import { REACT_APP_MS_URL } from "../env";

interface FiltersContext {
  filters: Filter;
  setFilters: (prevState: React.SetStateAction<Filter>) => void;
  products: Product[];
}

export const FilterContext = createContext<FiltersContext>({
  filters: {
    category: "all",
    price: 0,
    searchWord: "",
  },
  setFilters: () => {},
  products: initialProducts,
});

export function FiltersProvider({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  const [filters, setFilters] = useState<Filter>({
    category: "all" as string,
    price: 0,
    searchWord: "",
  });

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(`${REACT_APP_MS_URL}/ms-store-products/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => await res.json())
      .then((res) => {
        const productsArray = res.products;
        console.log(productsArray, "arrerr");

        setProductList(productsArray);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  }, []);

  useEffect(() => {
    const url = `${REACT_APP_MS_URL}/ms-store-products/products`;
    const params = new URLSearchParams({
      description: filters.searchWord,
      category: filters.category === "all" ? "" : filters.category,
      //aggregate: false,
    });

    fetch(`${url}?${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => await res.json())
      .then((res) => {
        const productsArray = res.products;
        console.log(productsArray, "arrerr");

        setProductList(productsArray);
      })
      .catch((error) => {
        console.error("Error al enviar la solicitud:", error);
      });
  }, [filters.category, filters.searchWord]);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        products: productList,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
