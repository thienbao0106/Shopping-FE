import Error from "../../../../components/Error";
import ListComponent from "../../../../components/ListComponent";
import Loading from "../../../../components/Loading";
import useFetchData from "../../../../hooks/useFetchData";
import { ApiPage } from "../../../../types/api";
import { Product } from "../../../../types/product";
import SaleItemCard from "./SaleItemCard";

const ListItemOnSale = () => {
  const page: ApiPage = {
    pageSize: 2,
    numPage: 0,
  };

  const { data, isLoading, isError } = useFetchData<Product[]>(
    "products",
    "getAllProducts",
    page
  );
  if (isLoading) return <Loading message="Loading..." />;
  if (isError) return <Error message="Loading..." />;
  if (!data) return <div>Unknown data</div>;
  console.log(data);
  return (
    <main>
      <h1 className="font-bold lg:text-3xl text-lg mb-5">Flash Sales</h1>
      <ListComponent
        data={data}
        className="flex 2xl:flex-row flex-col 2xl:gap-x-3 gap-y-2"
        renderItem={(product: Product) => (
          <SaleItemCard product={product} key={product.id} />
        )}
      />
    </main>
  );
};

export default ListItemOnSale;
