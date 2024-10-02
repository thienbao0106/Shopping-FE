/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { Sale } from "../types/sale";

const fetchSales = async (signal: any) => {
  const result = await fetch(`${import.meta.env.VITE_LOCAL_URL}/sales`, {
    signal,
  });
  return await result.json();
};
const useFetchSales = () => {
  const { isError, isLoading, data } = useQuery<Sale[]>({
    queryFn: async (context) => {
      const result = await fetchSales(context.signal);
      return result.data;
    },
    queryKey: ["fetchAllSales"],
  });
  return { isError, isLoading, data };
};
export default useFetchSales;
