import CategoryList from "./components/CategoryNavbar/CategoryNavbarList";
import ListRecommended from "./components/Recommended/ListRecommended";
import ListItemOnSale from "./components/Sales/ListItemOnSale";

const Home = () => {
  return (
    <main className="w-full flex 2xl:flex-row flex-col lg:gap-x-3 gap-y-3">
      <CategoryList />
      <div className="2xl:w-4/5 w-full space-y-3">
        <div className="bg-white rounded-lg shadow px-4 pt-2 pb-5">
          <ListRecommended />
        </div>
        <div className="bg-white rounded-lg shadow px-4 pt-2 pb-5">
          <ListItemOnSale />
        </div>
      </div>
    </main>
  );
};

export default Home;
