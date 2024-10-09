import { Sale } from "../../../../types/sale";
import Error from "../../../../components/Error";
// import ListComponent from "../../../../components/ListComponent";
import Loading from "../../../../components/Loading";
import SaleCard from "./SaleCard";
import useFetchData from "../../../../hooks/useFetchData";
import SwiperListComponent from "../../../../components/SwiperListComponent";
import useDimension from "../../../../hooks/useDimension";

const ListSale = () => {
  const { width } = useDimension();
  const { data, isError, isLoading } = useFetchData<Sale[]>(
    "sales",
    "getAllSales"
  );
  if (isLoading) return <Loading message="Loading..." />;
  if (isError) return <Error message="Loading..." />;
  if (!data) return <div>Unknown data</div>;
  console.log(data);
  return (
    <>
      <h1 className="font-bold lg:text-3xl text-lg mb-5">List Sales</h1>
      <main>
        <SwiperListComponent
          spaceBetween={10}
          renderItem={(sale: Sale) => <SaleCard sale={sale} key={sale.id} />}
          slidesPerView={width < 1028 ? 1 : 2}
          data={data}
        />
      </main>
    </>
  );
};

export default ListSale;
