import { IconType } from "react-icons";

export type CategoryIcon = {
  icon: IconType;
  name: string;
};

export type Category = {
  id: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
};
