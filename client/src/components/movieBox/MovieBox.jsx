/* eslint-disable react/prop-types */
import { AiOutlineCloseCircle } from "react-icons/ai";
import imageLoadingSvg from "/public/Eclipse-1s-200px.svg";
import { imageLoadingAction } from "../../features/imageLoading/ImageLoading";
import { useDispatch, useSelector } from "react-redux";
import { showMoreImageAction } from "../../features/films/filmsSlice";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { CiCircleMore } from "react-icons/ci";
// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
export default function MovieBox({
  id,
  title,
  country,
  posters,
  year,
  genres,
  images,
}) {
  const dispatch = useDispatch();
  const imageLoadingStore = useSelector((state) => state.imageLoading);
  const { showMoreImage } = useSelector((state) => state.bestFilms);
  const imageLoadingHandler = () => {
    dispatch(imageLoadingAction(true));
  };
  const showMoreImageHandler = () => {
    dispatch(showMoreImageAction({ id, show: true }));
  };
  const hideMoreImageHandler = () => {
    dispatch(showMoreImageAction({ id, show: false }));
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
      {images && (
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className={`mySwiper w-full h-[60%] z-[9999]  absolute top-10 right-0 left-0 bottom-0 ${
            showMoreImage.show && showMoreImage.id === id ? "visible" : "hidden"
          }`}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <img
                src={image}
                className=" w-full h-full rounded-3xl p-2"
                alt=""
                onLoad={imageLoadingHandler}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

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

      <span
        className={`flex items-center text-lg cursor-pointer after:content-[""] after:top-0 after:bottom-0 after:left-0 after:right-0 after:absolute after:bg-gray-800 after:bg-opacity-95 after:z-[999] ${
          showMoreImage.show && showMoreImage.id === id
            ? "after:block"
            : "after:hidden"
        }`}
        onClick={showMoreImageHandler}
      >
        <CiCircleMore className="text-primary me-2" />
        More Image
      </span>
      <span
        onClick={hideMoreImageHandler}
        className={`absolute top-2 right-2 z-[9999] text-primary text-2xl cursor-pointer ${
          showMoreImage.show && showMoreImage.id === id ? "block" : "hidden"
        }`}
      >
        <AiOutlineCloseCircle />
      </span>
    </div>
  );
}
