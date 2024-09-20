import { useParams } from "react-router-dom";

const Category = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Category;
