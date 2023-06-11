import { FaSearch } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchBoxAction } from "../../features/searchBox/SearchBoxSlice";
export default function SearchBox() {
  const showSearchBar = useSelector((state) => state.showSearchbar.show);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const SearchSubmit = (data) => {
    navigate(`/searchMovie/${data.searchValue}`);
    dispatch(searchBoxAction());
    reset();
  };


  if(showSearchBar){
    window.document.body.style.overflow = 'hidden'
  }else{
        window.document.body.style.overflow = "auto";

  }



  return (
    <div
      className={`search-box   top-[50px] bottom-[50px] right-0 left-0 fixed z-[999999] after:content-[''] after:absolute after:h-screen after:top-0  after:left-0 after:right-0 after:bg-gray-950  ${
        showSearchBar ? "block" : "hidden"
      }`}
    >
      <div className="sticky flex justify-between items-center z-50 p-5">
        <h6 className="text-primary text-3xl">Search Film</h6>
        <AiOutlineCloseCircle
          onClick={() => dispatch(searchBoxAction())}
          className="text-3xl cursor-pointer text-primary"
        />
      </div>
      <div className="sticky z-50 p-5">
        <form
          onSubmit={handleSubmit(SearchSubmit)}
          className="relative flex flex-col space-y-4"
        >
          <h6 className="text-primary">Search Movie</h6>
          {/* <div className="flex">
            <select
              className="flex-1 mx-1 py-2 bg-gray-950 text-primary"
              name=""
              id=""
            >
              <option disabled value="-1">
                Search Method
              </option>
              <option  value="">
                By Film Name
              </option>
              <option   value="">
                By Genre
              </option>
            </select>
            <select
              className="flex-1 py-2 mx-1 bg-gray-950 text-primary"
              name=""
              id=""
            >
              <option className="" disabled value="-1">
                Search Method
              </option>
              <option  value="">
                By Film Name
              </option>
              <option value="">
                By Genre
              </option>
            </select>
          </div> */}

          <input
            className="w-full  py-2 outline-none border-0 text-gray-950 px-1 text-xl bg-primary"
            type="text"
            {...register("searchValue")}
            required
          />
          <button className=" absolute top-[5.5rem] right-0" type="submit">
            <FaSearch className=" text-gray-950 text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
}
