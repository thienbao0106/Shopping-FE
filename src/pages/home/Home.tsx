import CategoryList from "./components/CategoryList";

const Home = () => {
  return (
    <main className="w-full flex lg:flex-row flex-col lg:gap-x-3 gap-y-3">
      <CategoryList />
      <div className="lg:w-4/5 w-full ">
        <div className="bg-white rounded-lg shadow px-4 py-2 ">
          <h1 className="font-bold text-xl">Test</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
