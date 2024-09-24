import { Product } from "../types/product";
import errorImage from "../../public/error.png";
type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product.images[0]);
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img src={product.images[0] || errorImage} alt={product.name} />
      </figure>
      <div className="lg:card-body p-2 lg:space-y-0 space-y-2">
        <h2 className="card-title truncate ">{product.name}</h2>
        <p className="font-semibold">{product.price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;
