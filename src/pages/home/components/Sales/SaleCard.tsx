import { Product } from "../../../../types/product";

type SaleCardProps = {
  product: Product;
};
const SaleCard = ({ product }: SaleCardProps) => {
  return <div>{product.name}</div>;
};

export default SaleCard;
