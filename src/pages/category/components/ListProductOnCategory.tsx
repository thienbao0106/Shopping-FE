import ProductCard from "../../../components/ProductCard";
import { Product } from "../../../types/product";
import ListComponent from "../../../components/ListComponent";

type ListProductOnCategoryProps = {
  products: Product[];
};

const ListProductOnCategory = ({ products }: ListProductOnCategoryProps) => {
  return (
    <div>
      <ListComponent
        data={products}
        renderItem={(product: Product) => (
          <ProductCard product={product} key={product.id} />
        )}
        className="grid 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2"
      />
    </div>
  );
};

export default ListProductOnCategory;
