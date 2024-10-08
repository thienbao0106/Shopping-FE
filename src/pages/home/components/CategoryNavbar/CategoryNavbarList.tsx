import { useContext } from "react";
import CategoryCard from "./CategoryNavbarCard";
import {
  ThemeContext,
  ThemeContextType,
} from "../../../../contexts/ThemeContext";
import { Category } from "../../../../types/category";
import ListComponent from "../../../../components/ListComponent";
import Loading from "../../../../components/Loading";
import Error from "../../../../components/Error";
import useFetchData from "../../../../hooks/useFetchData";

const CategoryList = () => {
  const { theme }: ThemeContextType = useContext(ThemeContext);
  const { isError, isLoading, data } = useFetchData<Category[]>(
    "categories",
    "getAllCategories"
  );
  if (isLoading) return <Loading message="Loading..." />;
  if (isError) return <Error message="Loading..." />;
  if (!data || data?.length === 0) return <div>Don't have any data</div>;

  return (
    <section
      className={`${
        theme === "dark" ? "bg-blue-500" : "bg-white"
      } shadow px-4 py-2 rounded-lg 2xl:w-1/5 w-full`}
    >
      <h1 className="font-bold lg:text-3xl text-lg mb-1">Categories</h1>

      <ListComponent
        data={data}
        renderItem={(category: Category) => (
          <CategoryCard key={category.id} category={category} />
        )}
        className="flex 2xl:flex-col flex-row 2xl:gap-y-2 gap-x-8"
      />
    </section>
  );
};

export default CategoryList;
