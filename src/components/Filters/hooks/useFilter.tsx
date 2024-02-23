import { ChangeEvent, ChangeEventHandler, useId } from "react";
import { useFilters } from "../../../hooks/useFilters";
import { Filter } from "../../../utils/interfaces/Filter.interface";

export function useFilter() {
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const { filters, setFilters } = useFilters();

  const handlePriceCounter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState: Filter) => ({
      ...prevState,
      price: parseInt(event.target.value, 10),
    }));
  };

  const handleCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState: Filter) => ({
      ...prevState,
      category: event.target.value as string,
    }));
  };
  const handleWord: ChangeEventHandler<HTMLInputElement> = (event) => {
    setFilters((prevState: Filter) => ({
      ...prevState,
      searchWord: event.target.value,
    }));
  };

  return {
    minPriceFilterId,
    categoryFilterId,
    filters,
    handleCategory,
    handlePriceCounter,
    handleWord,
  };
}
