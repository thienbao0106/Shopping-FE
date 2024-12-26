import { useParams } from "react-router-dom";
import useFetchDetailData from "../../hooks/useFetchDetailData";
import { Product } from "../../types/product";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { ProductInfoSection } from "./ProductInfoSection";

const ProductSection = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchDetailData<Product>(
    "products",
    "findProductById",
    id || ""
  );
  if (isLoading) return <Loading message="Loading..." />;
  if (isError) return <Error message="Loading..." />;
  if (!data) return <div>Unknown data</div>;

  return (
    <main>
      <ProductInfoSection product={data} />
    </main>
  );
};

export default ProductSection;
