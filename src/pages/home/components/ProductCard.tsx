import { Product } from "../../../types/product";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure>
        <img src={product.images[0]} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title truncate">{product.name}</h2>
        <p className="line-clamp-1">{product.description}</p>
        <div className="lg:card-actions  justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
