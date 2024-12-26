type AmountSelectProps = {
  amount: number;
  totalQuantity: number;
  increment: any;
  decrement: any;
};

export const AmountSelect = ({
  increment,
  decrement,
  amount,
  totalQuantity,
}: AmountSelectProps) => {
  return (
    <div className="flex flex-row font-bold text-2xl ">
      <button
        onClick={increment}
        disabled={amount === totalQuantity}
        className="disabled:bg-gray-600 py-2 px-4 text-white bg-orange-600 hover:bg-orange-400 rounded-l-lg"
      >
        +
      </button>
      <input
        value={amount}
        type="number"
        className="font-bold py-2 px-4 text-lg"
      />
      <button
        onClick={decrement}
        disabled={amount === 1}
        className="disabled:bg-gray-600 py-2 px-4 text-white bg-orange-600 hover:bg-orange-400 rounded-r-lg"
      >
        -
      </button>
    </div>
  );
};
