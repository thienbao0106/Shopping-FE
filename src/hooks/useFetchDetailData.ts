import { useQuery } from "@tanstack/react-query";
const fetchData = async (
  signal: AbortSignal,
  endpoint: string,
  dataId: string
) => {
  const data = await fetch(
    `${import.meta.env.VITE_LOCAL_URL}/${endpoint}/${dataId}`,
    {
      signal,
    }
  );

  return await data.json();
};

function useFetchDetailData<T>(
  endpoint: string,
  queryKey: string,
  dataId: string
) {
  const { isError, isLoading, data } = useQuery<T>({
    queryFn: async (context) => {
      const result = await fetchData(context.signal, endpoint, dataId);
      return result.data;
    },
    queryKey: [queryKey],
  });

  return { isError, isLoading, data };
}

export default useFetchDetailData;
