import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchFilms } from "../../features/films/filmsSlice";
import LoadingSvg from "/public/Eclipse-1s-200px2.svg";
import { Link, useParams } from "react-router-dom";
import MovieBox from "../../components/movieBox/MovieBox";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function BestFilms() {
  const { pageNumber } = useParams();
  const filmsStore = useSelector((state) => state.bestFilms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      FetchFilms(`https://moviesapi.ir/api/v1/movies?page=${pageNumber}`)
    );
  }, [pageNumber]);
  return (
    <div className=' relative'>
      <h1 className=' text-primary text-3xl text-center '>250 Films</h1>

      {!filmsStore.loading ||
        (filmsStore.filmsData.length && (
          <div className='flex justify-center bg-opacity-50 items-center fixed top-[50px] left-0 right-0 bottom-[85px] after:content-[""] after:absolute after:top-0 after:h-screen after:bottom-0 after:left-0 after:right-0 bg-gray-950 after:bg-opacity-50 z-[999]'>
            <img src={LoadingSvg} alt='' />
          </div>
        ))}
      {!filmsStore.loading && filmsStore.filmsData.length && (
        <>
          <div className='p-4 grid grid-cols sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-y-2 gap-x-0 sm:gap-x-2'>
            {filmsStore.filmsData.map((film) => (
              <MovieBox
                key={film.id}
                id={film.id}
                year={film.year}
                genres={film.genres}
                title={film.title}
                posters={film.poster}
                country={film.country}
                images={film.images}
              />
            ))}
          </div>
          <div className='flex justify-evenly fixed bottom-[50px] left-0 right-0 z-[999999] items-center bg-primary '>
            <Link
              className='w-full bg-primary bg-opacity-75 text-gray-950 p-2 shadow-xl shadow-gray-950 flex justify-start items-center'
              to={`/250films/${pageNumber <= 1 ? 1 : Number(pageNumber) - 1}`}>
              <FaArrowLeft />
              Prevues
            </Link>
            <h6 className='bg-gray-950 text-primary flex items-center rounded-full justify-center w-[40px] h-[20px]'>
              {pageNumber}
            </h6>
            <Link
              className='w-full bg-primary bg-opacity-75 text-gray-950 p-2 shadow-xl shadow-gray-950 flex items-center justify-end pe-4'
              to={`/250films/${pageNumber >= 25 ? 1 : Number(pageNumber) + 1}`}>
              Next
              <FaArrowRight />
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
