import { useState } from "react";
import { Product } from "../../types/product";
import { convertCurrency } from "../../utils/currency";
import errorImage from "/error.png";
import { AmountSelect } from "./AmontSelect";
import ShippingType from "./ShippingType";

type ProductInfoSectionProps = {
  product: Product;
};

export const ProductInfoSection = ({ product }: ProductInfoSectionProps) => {
  document.title = product.name;
  const [amount, setAmount] = useState(1);
  const [shippingType, setShippingType] = useState("ordinary");
  const shippingFee = shippingType === "ordinary" ? 2000 : 4000;
  const increment = () => {
    setAmount((cur: number) => cur + 1);
  };

  const decrement = () => {
    setAmount((cur: number) => cur - 1);
  };

  return (
    <section className="w-full flex lg:flex-row flex-col lg:px-0 px-2">
      <img src={product.images[0] || errorImage} />
      <div className="space-y-2 w-full">
        <h1 className="font-extrabold text-3xl">{product.name}</h1>
        <h2 className="font-bold text-xl">{convertCurrency(product.price)}</h2>
        <p>{product.description}</p>
        <div className="text-lg">
          Quantity:{" "}
          <span
            className={`font-bold text-lg ${
              product.quantity > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.quantity}
          </span>
        </div>
        <div className="flex flex-row gap-x-2 w-full">
          <AmountSelect
            totalQuantity={product.quantity}
            amount={amount}
            decrement={decrement}
            increment={increment}
          />
          <div className=" py-2 px-4 font-bold text-3xl">
            {convertCurrency(product.price * amount + shippingFee)}
          </div>
        </div>
        <div>
          <ShippingType
            shippingType={shippingType}
            setShippingType={setShippingType}
          />
        </div>
        <button className="w-1/2 py-3 uppercase bg-orange-600 hover:bg-orange-400 rounded-lg text-white font-bold">
          Add To Cart
        </button>
      </div>
    </section>
  );
};
