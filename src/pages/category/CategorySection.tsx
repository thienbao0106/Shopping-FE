import { useParams } from "react-router-dom";

import Loading from "../../components/Loading";
import Error from "../../components/Error";
import ListProductOnCategory from "./components/ListProductOnCategory";
import useFetchDetailData from "../../hooks/useFetchDetailData";
import { Category } from "../../types/category";

const CategorySection = () => {
  const { id } = useParams();

  const { data, isError, isLoading } = useFetchDetailData<Category>(
    "categories",
    "findCategoryById",
    id || ""
  );
  if (isLoading) return <Loading message="Loading..." />;
  if (isError) return <Error message="Loading..." />;
  if (!data) return <div>Unknown data</div>;

  return (
    <main>
      <h1 className="font-bold text-3xl mb-2">{data.name}</h1>
      <main>
        <ListProductOnCategory products={data.products} />
      </main>
    </main>
  );
};

export default CategorySection;
