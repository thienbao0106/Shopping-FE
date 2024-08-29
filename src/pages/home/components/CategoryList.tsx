import { useContext } from "react";
import useFetchCategories, {
  Category,
} from "../../../hooks/useFetchCategories";
import CategoryCard from "./CategoryCard";
import { ThemeContext, ThemeContextType } from "../../../contexts/ThemeContext";

const CategoryList = () => {
  const { theme }: ThemeContextType = useContext(ThemeContext);
  const { isError, isLoading, data } = useFetchCategories();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <main
      className={`${
        theme === "dark" ? "bg-blue-500" : "bg-white"
      } shadow px-4 py-2 rounded-lg lg:w-1/5 w-full`}
    >
      <h1 className="font-bold text-xl">Categories</h1>
      {data?.map((category: Category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </main>
  );
};

export default CategoryList;
