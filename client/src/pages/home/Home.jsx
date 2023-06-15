// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LoadingSvg from "/public/Eclipse-1s-200px2.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

import { FetchFilms } from "../../features/films/filmsSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import MovieBox from "../../components/movieBox/MovieBox";
export default function Home() {
  useEffect(() => {
    dispatch(FetchFilms("https://moviesapi.ir/api/v1/movies?page={page}"));
  }, []);
  const dispatch = useDispatch();
  const { filmsData, loading } = useSelector((state) => state.bestFilms);
  return (
    <div className='flex justify-center flex-col items-center'>
      {!filmsData.length && loading && (
        <div className='flex justify-center bg-opacity-50 items-center fixed top-[50px] left-0 right-0 bottom-[85px] after:content-[""] after:absolute after:top-0 after:h-screen after:bottom-0 after:left-0 after:right-0 bg-gray-950 after:bg-opacity-50 z-[999]'>
          <img src={LoadingSvg} alt='' />
        </div>
      )}

      <h1 className='text-2xl text-primary'>Top 10 Movies</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className='mySwiper w-full sm:w-[50%]'>
        {filmsData.length && !filmsData.loading && (
          <>
            {filmsData.slice(0, 10).map((film) => (
              // <SwiperSlide key={film.id}>
              //   <img src={film.poster} />
              // </SwiperSlide>
              <SwiperSlide key={film.id}>
                <MovieBox
                  id={film.id}
                  year={film.year}
                  genres={film.genres}
                  title={film.title}
                  posters={film.poster}
                  country={film.country}
                  images={film.images}
                />
              </SwiperSlide>
            ))}
          </>
        )}
      </Swiper>
    </div>
  );
}
