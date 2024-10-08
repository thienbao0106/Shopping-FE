import { Product } from "../types/product";
import errorImage from "/error.png";
import { convertCurrency } from "../utils/currency";
import moment from "moment";
type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product.sale);
  const newPrice = product.sale
    ? (product.price * product.sale.percentage) / 100
    : 0;
  const isDue = product.sale
    ? moment(product.sale.dueDate).diff(new Date()) > 0
      ? true
      : false
    : false;
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img src={product.images[0] || errorImage} alt={product.name} />
      </figure>
      <div className="lg:card-body p-2 lg:space-y-0 space-y-2">
        <h2 className="card-title truncate ">{product.name}</h2>
        <p className="">
          {product.sale && isDue && (
            <span className="mr-2 font-bold text-red-500">
              {convertCurrency(newPrice)}
            </span>
          )}

          <span
            className={`font-semibold ${
              product.sale && isDue && `line-through`
            }`}
          >
            {convertCurrency(product.price)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
