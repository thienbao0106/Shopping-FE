type ShippingTypeProps = {
  setShippingType: any;
  shippingType: string;
};

const ShippingType = ({ setShippingType, shippingType }: ShippingTypeProps) => {
  console.log(shippingType);
  return (
    <section className="w-full flex flex-row gap-x-2">
      <button
        onClick={() => {
          setShippingType("ordinary");
        }}
        disabled={shippingType === "ordinary"}
        className="disabled:bg-red-700 disabled:cursor-default bg-orange-600 hover:bg-orange-400  hover:cursor-pointer p-4 rounded-lg font-bold text-white text-lg"
      >
        Ordinary Shipping
      </button>
      <button
        onClick={() => {
          setShippingType("2-hour");
        }}
        disabled={shippingType === "2-hour"}
        className="disabled:bg-red-700 disabled:cursor-default bg-orange-600 hover:bg-orange-400 hover:cursor-pointer p-4 rounded-lg font-bold text-white text-lg"
      >
        2-hour Shipping
      </button>
    </section>
  );
};

export default ShippingType;
