import { useParams } from "react-router-dom";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import useFetchDetailData from "../../hooks/useFetchDetailData";
import { Sale } from "../../types/sale";
import ListProductOnSale from "./components/ListProductOnSale";

const SaleSection = () => {
  const { id } = useParams();

  const { isError, isLoading, data } = useFetchDetailData<Sale>(
    "sales",
    "findSaleById",
    id || ""
  );
  if (isLoading) return <Loading message="Loading..." />;
  if (isError) return <Error message="Loading..." />;
  if (!data) return <div>Unknown data</div>;
  return (
    <div>
      <h1 className="font-bold text-3xl mb-2">{data.name}</h1>
      <ListProductOnSale products={data.products} />
    </div>
  );
};

export default SaleSection;
