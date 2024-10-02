import { useParams } from "react-router-dom";
import useFindSale from "./hooks/useFindSale";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Sale = () => {
  const { id } = useParams();

  const { isError, isLoading, data } = useFindSale(id || "");
  if (isLoading) return <Loading message="Loading..." />;
  if (isError) return <Error message="Loading..." />;
  if (!data) return <div>Unknown data</div>;
  return <div>{data.name}</div>;
};

export default Sale;
