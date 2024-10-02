import { Link } from "react-router-dom";
import { Sale } from "../../../../types/sale";

type SaleCardProps = {
  sale: Sale;
};

const SaleCard = ({ sale }: SaleCardProps) => {
  console.log(sale);
  return (
    <div>
      <Link to={`/sale/${sale.id}`}>{sale.name}</Link>
    </div>
  );
};

export default SaleCard;
