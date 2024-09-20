import { useContext } from "react";
import useFetchCategories, {
  Category,
} from "../../../../hooks/useFetchCategories";
import CategoryCard from "./CategoryCard";
import {
  ThemeContext,
  ThemeContextType,
} from "../../../../contexts/ThemeContext";
import ListComponent from "../../../../components/ListComponent";

const CategoryList = () => {
  const { theme }: ThemeContextType = useContext(ThemeContext);
  const { isError, isLoading, data } = useFetchCategories();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data || data?.length === 0) return <div>Don't have any data</div>;
  return (
    <section
      className={`${
        theme === "dark" ? "bg-blue-500" : "bg-white"
      } shadow px-4 py-2 rounded-lg lg:w-1/5 w-full`}
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
