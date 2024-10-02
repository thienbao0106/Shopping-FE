import { Sale } from "../../../../types/sale";
import Error from "../../../../components/Error";
import ListComponent from "../../../../components/ListComponent";
import Loading from "../../../../components/Loading";
import useFetchSales from "../../../../hooks/useFetchSales";
import SaleCard from "./SaleCard";

const ListSale = () => {
  const { data, isError, isLoading } = useFetchSales();
  if (isLoading) return <Loading message="Loading..." />;
  if (isError) return <Error message="Loading..." />;
  if (!data) return <div>Unknown data</div>;
  console.log(data);
  return (
    <>
      <h1 className="font-bold lg:text-3xl text-lg mb-5">List Sales</h1>
      <main>
        <ListComponent
          data={data}
          renderItem={(sale: Sale) => <SaleCard sale={sale} key={sale.id} />}
          className="grid grid-cols-5"
        />
      </main>
    </>
  );
};

export default ListSale;
