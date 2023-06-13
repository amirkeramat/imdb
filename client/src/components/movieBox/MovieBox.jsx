/* eslint-disable react/prop-types */
import imageLoadingSvg from "/public/Eclipse-1s-200px.svg";
import { imageLoadingAction } from "../../features/imageLoading/ImageLoading";
import { useDispatch, useSelector } from "react-redux";
import { CiCircleMore } from "react-icons/ci";
import { NavLink } from "react-router-dom";
export default function MovieBox({
  id,
  title,
  country,
  posters,
  year,
  genres,
}) {
  const dispatch = useDispatch();
  const imageLoadingStore = useSelector((state) => state.imageLoading);
  const imageLoadingHandler = () => {
    dispatch(imageLoadingAction(true));
  };
  return (
    <div className=" relative flex flex-col justify-evenly p-4 w-[full] h-[600px] bg-slate-900 rounded-xl space-y-2 text-sm md:text-base text-start">
      <span className=" bg-primary text-gray-950 text-xl flex justify-center items-center rounded-2xl">
        Rank:
        <h6>{id}</h6>
      </span>
      <img
        onLoad={imageLoadingHandler}
        className=" relative w-[full] h-[60%] rounded-3xl"
        src={posters}
        alt=""
      />

      {!imageLoadingStore.show && (
        <img src={imageLoadingSvg} onLoad={imageLoadingHandler} />
      )}
      <span className="flex ">
        <h6 className="text-primary text-justify">Name:</h6>
        {title}
      </span>
      <span className="flex ">
        <h6 className="text-primary">Year:</h6>
        {year}
      </span>
      <span className="flex ">
        <h6 className="text-primary">Country:</h6>
        {country}
      </span>
      {genres && (
        <span className="flex">
          <h6 className="text-primary">genres:</h6>
          {genres.map((genre, index) => (
            <h6 key={index}>{genre},</h6>
          ))}
        </span>
      )}

      <span className={`flex items-center text-lg cursor-pointer`}>
        <CiCircleMore className="text-primary me-2" />

        <NavLink to={`/movieDetail/${title}/${id}`}>More Info</NavLink>
      </span>
    </div>
  );
}
