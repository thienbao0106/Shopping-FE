import { Link } from "react-router-dom";
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

  return (
    <main>
      <h1 className="font-bold lg:text-3xl text-lg mb-5">Flash Sales</h1>
      <ListComponent
        data={data}
        className="grid 2xl:grid-cols-6 xl:grid-cols-4 md:grid-cols-3 grid-cols-2"
        renderItem={(product: Product) => (
          <Link to={`/product/${product.id}`}>
            <SaleItemCard product={product} key={product.id} />
          </Link>
        )}
      />
    </main>
  );
};

export default ListItemOnSale;
