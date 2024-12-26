import { Product } from "../../../../types/product";
import errorImage from "/error.png";

type SaleItemCardProps = {
  product: Product;
};
const SaleItemCard = ({ product }: SaleItemCardProps) => {
  return (
    <div>
      <img src={product.images[0] ?? errorImage} />
      <h1>{product.name}</h1>
    </div>
  );
};

export default SaleItemCard;
