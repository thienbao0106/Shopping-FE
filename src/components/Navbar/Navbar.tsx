import { Link } from "react-router-dom";
import useDimension from "../../hooks/useDimension";

import { CiSearch } from "react-icons/ci";
import CartDropDown from "./CartDropDown";
import ProfileDropDown from "./ProfileDropDown";
import SearchInput from "./SearchInput";
// import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { width } = useDimension();
  console.log(width);
  return (
    <div className=" navbar pb-4 bg-base-100 lg:gap-x-8 gap-x-2 border border-b-1 border-x-0 border-t-0 border-b-slate-300 lg:px-40 px-0">
      <div className="flex-none">
        <Link to="/" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>

      <div className="flex-1 md:w-[80%] w-[30%]">
        {width >= 768 ? (
          <SearchInput />
        ) : (
          <Link to="/">
            <CiSearch size={30} />
          </Link>
        )}
      </div>
      <div className="flex-none lg:gap-x-2">
        {/* <ThemeToggle /> */}
        <CartDropDown />
        <ProfileDropDown />
      </div>
    </div>
  );
};

export default Navbar;
