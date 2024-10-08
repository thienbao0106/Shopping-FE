import { Link } from "react-router-dom";
import { Sale } from "../../../../types/sale";

type SaleCardProps = {
  sale: Sale;
};

const SaleCard = ({ sale }: SaleCardProps) => {
  console.log(sale.images && sale.images.length);
  return (
    <div>
      <Link to={`/sale/${sale.id}`}>
        {sale.images && sale.images.length > 0 && (
          <img
            className="rounded-md"
            src={sale.images[0]?.url}
            alt={`${sale.id}-image`}
          />
        )}
      </Link>
    </div>
  );
};

export default SaleCard;
