import { Link } from "react-router-dom";
import { Sale } from "../../../../types/sale";
import errorImage from "/error.png";

type SaleCardProps = {
  sale: Sale;
};

const SaleCard = ({ sale }: SaleCardProps) => {
  return (
    <div>
      <Link to={`/sale/${sale.id}`}>
        {sale.images ? (
          <div
            className="rounded-md w-full bg-center bg-no-repeat  h-[300px]"
            style={{ backgroundImage: `url("${sale.images[0]?.url}")` }}
          />
        ) : (
          <img
            className="rounded-md w-full  h-[300px]"
            src={errorImage}
            alt={`errorImage`}
          />
        )}
      </Link>
    </div>
  );
};

export default SaleCard;
