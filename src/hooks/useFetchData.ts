import { useQuery } from "@tanstack/react-query";
import { ApiPage } from "../types/api";

const pageEndpoint = (page?: ApiPage) => {
  return page
    ? `?${page.numPage && `page=${page.numPage}`}&pageSize=${page.pageSize}`
    : "";
};

const fetchData = async (
  signal: AbortSignal,
  endpoint: string,
  page?: ApiPage
) => {
  const data = await fetch(
    `${import.meta.env.VITE_LOCAL_URL}/${endpoint}${pageEndpoint(page)}`,
    {
      signal,
    }
  );

  return await data.json();
};

function useFetchData<T>(endpoint: string, queryKey: string, page?: ApiPage) {
  const { isError, isLoading, data } = useQuery<T>({
    queryFn: async (context) => {
      const result = await fetchData(context.signal, endpoint, page);
      if (page) return result.data.content;
      return result.data;
    },
    queryKey: [queryKey],
  });

  return { isError, isLoading, data };
}

export default useFetchData;
