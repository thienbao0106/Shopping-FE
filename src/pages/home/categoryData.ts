import { IconType } from "react-icons";
import { FaBook } from "react-icons/fa";

export type CategoryIcon = {
  icon: IconType;
  name: string;
};

export const categoriesIconData: CategoryIcon[] = [
  {
    name: "Book",
    icon: FaBook,
  },
];
