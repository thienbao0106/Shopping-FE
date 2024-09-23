import Error from "../../../../components/Error";
import ListComponent from "../../../../components/ListComponent";
import Loading from "../../../../components/Loading";
import useFetchProducts from "../../../../hooks/useFetchProducts";
import { Product } from "../../../../types/product";
import SaleCard from "./SaleCard";

const ListItemOnSale = () => {
  const salePageSize = 2,
    numberOfPage = 0;
  const { data, isLoading, isError } = useFetchProducts(
    salePageSize,
    "sales",
    numberOfPage
  );
  if (isLoading) return <Loading message="Loading..." />;
  if (isError) return <Error message="Loading..." />;
  if (!data) return <div>Unknown data</div>;
  console.log(data.length);
  return (
    <main>
      <h1 className="font-bold lg:text-3xl text-lg mb-5">Flash Sales</h1>
      <ListComponent
        data={data}
        className="flex 2xl:flex-row flex-col 2xl:gap-x-3 gap-y-2"
        renderItem={(product: Product) => (
          <SaleCard product={product} key={product.id} />
        )}
      />
    </main>
  );
};

export default ListItemOnSale;
