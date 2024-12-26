import CategoryList from "./components/CategoryNavbar/CategoryNavbarList";
import ListRecommended from "./components/Recommended/ListRecommended";
import ListItemOnSale from "./components/FlashSales/ListItemOnSale";
import ListSale from "./components/SalesList/ListSale";

const Home = () => {
  document.title = "Home";
  return (
    <main className="w-full flex 2xl:flex-row flex-col lg:gap-x-3 gap-y-3">
      <CategoryList />
      <div className="2xl:w-4/5 w-full space-y-3">
        <section className="bg-white rounded-lg shadow px-4 pt-2 pb-5">
          <ListItemOnSale />
        </section>
        <section className="bg-white rounded-lg shadow px-4 pt-2 pb-5">
          <ListSale />
        </section>
        <section className="bg-white rounded-lg shadow px-4 pt-2 pb-5">
          <ListRecommended />
        </section>
      </div>
    </main>
  );
};

export default Home;
