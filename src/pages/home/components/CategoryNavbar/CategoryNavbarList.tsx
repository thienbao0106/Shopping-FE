import { useContext } from "react";
import useFetchCategories from "../../../../hooks/useFetchCategories";
import CategoryCard from "./CategoryNavbarCard";
import {
  ThemeContext,
  ThemeContextType,
} from "../../../../contexts/ThemeContext";
import { Category } from "../../../../types/category";
import ListComponent from "../../../../components/ListComponent";
import Loading from "../../../../components/Loading";
import Error from "../../../../components/Error";

const CategoryList = () => {
  const isNavbar = true;
  const { theme }: ThemeContextType = useContext(ThemeContext);
  const { isError, isLoading, data } = useFetchCategories(isNavbar);
  if (isLoading) return <Loading message="Loading..." />;
  if (isError) return <Error message="Loading..." />;
  if (!data || data?.length === 0) return <div>Don't have any data</div>;
  return (
    <section
      className={`${
        theme === "dark" ? "bg-blue-500" : "bg-white"
      } shadow px-4 py-2 rounded-lg 2xl:w-1/5 w-full`}
    >
      <h1 className="font-bold text-xl">Categories</h1>
      <ListComponent
        data={data}
        renderItem={(category: Category) => (
          <CategoryCard key={category.id} category={category} />
        )}
      />
    </section>
  );
};

export default CategoryList;
