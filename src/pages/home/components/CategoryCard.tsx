import { Link } from "react-router-dom";
import { Category } from "../../../hooks/useFetchCategories";
type CategoryCardProps = {
  category: Category;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="py-2">
      {category.image && (
        <img src={category.image} alt={`category-${category.name}`} />
      )}
      <label>
        <Link className="hover:font-semibold" to={`/category/${category.id}`}>
          {category.name}
        </Link>
      </label>
    </div>
  );
};

export default CategoryCard;
