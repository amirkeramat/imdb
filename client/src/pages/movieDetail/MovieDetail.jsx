import { useDispatch, useSelector } from "react-redux";
import { FetchFilmDetail } from "../../features/filmDetail/FilmDetailSlice";
import {  useParams } from "react-router-dom";
import { useEffect } from "react";
import LoadingSvg from "/public/Eclipse-1s-200px2.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./MovieDetail.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function MovieDetail() {
  const { movieID } = useParams();
  const dispatch = useDispatch();
  const { filmsData, loading } = useSelector((state) => state.singleFilmData);
  useEffect(() => {
    dispatch(FetchFilmDetail(`https://moviesapi.ir/api/v1/movies/${movieID}`));
  }, []);
  return (
    <>
      {loading && (
        <div className='flex justify-center bg-opacity-50 items-center fixed top-[50px] left-0 right-0 bottom-[85px] after:content-[""] after:absolute after:top-0 after:h-screen after:bottom-0 after:left-0 after:right-0 bg-gray-950 after:bg-opacity-50 z-[999]'>
          <img src={LoadingSvg} alt='' />
        </div>
      )}
      <div className='movie-detail flex flex-col w-full px-1 bg-gray-900 bg-opacity-50 pt-[100px] sm:px-[100px] '>
        {filmsData.length !== 0 && !loading && (
          <>
            <h1 className='text-primary text-4xl text-center my-4'>
              Film Sheet
            </h1>
            <div className='flex flex-col p-4'>
              <div className='flex flex-col-reverse sm:flex-row justify-center items-start'>
                <div className='flex-[4] px-4'>
                  <div className='grid grid-cols-2 text-lg gap-2 sm:gap-4'>
                    <span className='flex text-justify'>
                      <h6 className='text-primary'>Rating:</h6>
                      {filmsData.imdb_rating}
                    </span>
                    <span className='flex text-justify'>
                      {" "}
                      <h6 className='text-primary'>metascore:</h6>
                      {filmsData.metascore}
                    </span>
                    <span className='flex text-justify'>
                      <h6 className='text-primary'>Votes:</h6>

                      {filmsData.imdb_votes}
                    </span>
                    <span className='flex text-justify'>
                      {" "}
                      <h6 className='text-primary'>released:</h6>
                      <p className=' whitespace-nowrap'>{filmsData.released}</p>
                    </span>
                    <span className='flex text-justify'>
                      {" "}
                      <h6 className='text-primary'>year:</h6>
                      {filmsData.year}
                    </span>

                    <span className='flex text-justify'>
                      {" "}
                      <h6 className='text-primary'>runtime:</h6>
                      {filmsData.runtime}
                    </span>
                    <span className='flex text-justify mt-5  col-span-2'>
                      {" "}
                      <h6 className='text-primary whitespace-nowrap'>Best Actors:</h6>
                      {filmsData.actors}
                    </span>
                    <span className='flex text-justify mt-5  col-span-2'>
                      {" "}
                      <h6 className='text-primary'>Genres:</h6>
                      
                      { filmsData.genres && filmsData.genres.map((genre, index) => {
                        return <p key={index}>{genre}-</p>;
                      })}
                    </span>

                    <span className='flex text-justify mt-5 col-span-2'>
                      {" "}
                      <h6 className='text-primary '>Awards:</h6>
                      {filmsData.awards}
                    </span>
                    <span className='flex text-justify mt-5 col-span-2'>
                      {" "}
                      <h6 className='text-primary'>writers:</h6>
                      {filmsData.writer}
                    </span>

                    <span className='flex text-justify mt-5 col-span-2'>
                      {" "}
                      <h6 className='text-primary'>director:</h6>
                      {filmsData.director}
                    </span>
                  </div>
                </div>
                <span className='border-4 border-primary flex-1'>
                  <img src={filmsData.poster} className="w-full" alt='' />
                </span>
              </div>
              <span className='p-4'>
                <h6 className='text-primary text-2xl'>Plot:</h6>
                <p className='text-xl'>{filmsData.plot}</p>
              </span>

              {filmsData.images ? (
                <div className='flex justify-center  w-full'>
                  <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className='mySwiper'>
                    {filmsData.images.map((image, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <img src={image} alt='' />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              ) : (
                <div>LOADING</div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
