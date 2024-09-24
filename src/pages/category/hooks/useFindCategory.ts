/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery } from "@tanstack/react-query";
import { Category } from "../../../types/category";

const fetchCategoryById = async (signal: any, categoryId: string) => {
  const data = await fetch(
    `${import.meta.env.VITE_LOCAL_URL}/categories/${categoryId}`,
    {
      signal,
    }
  );

  return await data.json();
};

const useFindCategory = (categoryId: string) => {
  const { isError, isLoading, data } = useQuery<Category>({
    queryFn: async (context) => {
      const result = await fetchCategoryById(context.signal, categoryId);
      return result.data;
    },
    queryKey: ["findCategoryById"],
  });

  return { isError, isLoading, data };
};

export default useFindCategory;
