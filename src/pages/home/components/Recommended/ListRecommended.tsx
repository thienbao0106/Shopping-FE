import Loading from "../../../../components/Loading";
import Error from "../../../../components/Error";

import useFetchProducts from "../../../../hooks/useFetchProducts";
import ProductCard from "../../../../components/ProductCard";
import ListComponent from "../../../../components/ListComponent";
import { Product } from "../../../../types/product";

const ListRecommended = () => {
  const pageSize = 4,
    numberOfPage = 0;
  const { data, isLoading, isError } = useFetchProducts(
    pageSize,
    "recommendations",
    numberOfPage
  );
  if (isLoading) return <Loading message="Loading..." />;
  if (isError) return <Error message="Loading..." />;
  if (!data) return <div>Unknown data</div>;
  console.log(data);
  return (
    <main className="">
      <h1 className="font-bold lg:text-3xl text-lg mb-5">Recommended</h1>

      <ListComponent
        data={data}
        renderItem={(product: Product) => (
          <ProductCard product={product} key={product.id} />
        )}
        className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5 w-full mt-2"
      />
    </main>
  );
};

export default ListRecommended;
