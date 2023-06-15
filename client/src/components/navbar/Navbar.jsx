import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaHeart, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { searchBoxAction } from "../../features/searchBox/SearchBoxSlice";
export default function Navbar() {
  const dispatch = useDispatch();
  const showSearchBoxHandler = () => {
    dispatch(searchBoxAction());
  };
  return (
    <div className=" fixed -bottom-[1px] left-0 right-0 bg-gray-950 h-[50px] text-gray-950 z-[999999] px-0 sm:px-[100px]">
      <ul className="flex items-center">
        <li className="menu-item bg-primary w-[98%] h-[50px] flex justify-center items-center  shadow-2xl shadow-gray-900">
          <NavLink to={"/"}>
            <FaHome />
          </NavLink>
        </li>
        <li
          onClick={showSearchBoxHandler}
          className="menu-item bg-primary w-[98%] h-[50px] flex justify-center items-center  shadow-2xl shadow-gray-900"
        >
          <button>
            <FaSearch />
          </button>
        </li>
        <li className="menu-item bg-primary w-[98%] h-[50px] flex justify-center items-center  shadow-2xl shadow-gray-900">
          <NavLink to={"/250films/1"}>
            <FaHeart />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
