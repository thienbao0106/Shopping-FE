import { Product } from "../../../../types/product";

type SaleItemCardProps = {
  product: Product;
};
const SaleItemCard = ({ product }: SaleItemCardProps) => {
  return (
    <div>
      <img src={product.images[0]} />
      <h1>{product.name}</h1>
    </div>
  );
};

export default SaleItemCard;
