/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { Category } from "../types/category";

const fetchCategories = async (signal: any) => {
  const data = await fetch(`${import.meta.env.VITE_LOCAL_URL}/categories`, {
    signal,
  });

  return await data.json();
};

const useFetchCategories = (isNavbar: boolean) => {
  const { isError, isLoading, data } = useQuery<Category[]>({
    queryFn: async (context) => {
      const result = await fetchCategories(context.signal);
      return result.data.map((data: any) => {
        if (isNavbar) delete data.products;
        return data;
      });
    },
    queryKey: ["categories"],
  });

  return { isError, isLoading, data };
};

export default useFetchCategories;
