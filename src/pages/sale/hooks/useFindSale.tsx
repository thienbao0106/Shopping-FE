/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery } from "@tanstack/react-query";
import { Sale } from "../../../types/sale";

const fetchSaleById = async (signal: any, saleId: string) => {
  const data = await fetch(
    `${import.meta.env.VITE_LOCAL_URL}/sales/${saleId}`,
    {
      signal,
    }
  );

  return await data.json();
};

const useFindSale = (saleId: string) => {
  console.log(saleId);
  const { isError, isLoading, data } = useQuery<Sale>({
    queryFn: async (context) => {
      const result = await fetchSaleById(context.signal, saleId);
      return result.data;
    },
    queryKey: ["findSaleById"],
  });

  return { isError, isLoading, data };
};

export default useFindSale;
