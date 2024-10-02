export const convertCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-EN", {
    currency: "USD",
    style: "currency",
  }).format(amount);
};
