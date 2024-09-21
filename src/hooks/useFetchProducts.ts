/* eslint-disable @typescript-eslint/no-explicit-any */
import { Product } from "./../types/product";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async (signal: any, pageSize: number, page?: number) => {
  const data = await fetch(
    `${import.meta.env.VITE_LOCAL_URL}/products?${
      page && `page=${page}`
    }&pageSize=${pageSize}`,
    {
      signal,
    }
  );

  return await data.json();
};

const useFetchProducts = (pageSize: number, page?: number) => {
  const { isError, isLoading, data } = useQuery<Product[]>({
    queryFn: async (context) => {
      const result = await fetchProducts(context.signal, pageSize, page);
      return result.data.content;
    },
    queryKey: ["products"],
  });

  return { isError, isLoading, data };
};

export default useFetchProducts;
