import { Link } from "react-router-dom";
import { Category } from "../../../../hooks/useFetchCategories";
import { categoriesIconData, CategoryIcon } from "../../categoryData";
import { IconType } from "react-icons";

type CategoryCardProps = {
  category: Category;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  const Icon: IconType | undefined = categoriesIconData.find(
    (categoryItem: CategoryIcon) => categoryItem.name === category.name
  )?.icon;
  return (
    <div className="py-2">
      {category.image && (
        <img src={category.image} alt={`category-${category.name}`} />
      )}
      <label className="">
        <Link
          className="hover:font-semibold flex flex-row items-center gap-x-2"
          to={`/category/${category.id}`}
        >
          {Icon && <Icon size={30} />}
          {category.name}
        </Link>
      </label>
    </div>
  );
};

export default CategoryCard;
