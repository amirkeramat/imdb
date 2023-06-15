import { useEffect } from "react";
import LoadingSvg from "/public/Eclipse-1s-200px2.svg";
import { useSelector, useDispatch } from "react-redux";
import { FetchSearch } from "../../features/search/SearchSlice";
import { NavLink, useParams } from "react-router-dom";
import MovieBox from "../../components/movieBox/MovieBox";
useParams;
export default function SearchPage() {
  const dispatch = useDispatch();
  const { name, ID } = useParams();
  const searchResult = useSelector((state) => state.searchResult);
  useEffect(() => {
    if (!ID) {
      dispatch(
        FetchSearch(`https://moviesapi.ir/api/v1/movies?q=${name}&page={page}`)
      );
    } else {
      dispatch(
        FetchSearch(
          `https://moviesapi.ir/api/v1/genres/${ID}/movies?page={page}`
        )
      );
    }
  }, [name,ID]);
  return (
    <div className='relative min-h-[100vh] px-0 sm:px-[100px] pt-[100px] pb-[50px]'>
      <h1 className=' text-primary text-3xl text-center '>{name} Movies</h1>
      <div className='grid grid-cols sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-y-2 gap-x-0 sm:gap-x-2 py-[50px] gap-2'>
        {searchResult.loading && (
          <div className='flex justify-center bg-opacity-50 items-center fixed top-[50px] left-0 right-0 bottom-[85px] after:content-[""] after:absolute after:top-0 after:h-screen after:bottom-0 after:left-0 after:right-0 bg-gray-950 after:bg-opacity-50 z-[999]'>
            <img src={LoadingSvg} alt='' />
          </div>
        )}
        {!searchResult.loading && searchResult.filmsData.length > 0 && (
          <>
            {searchResult.filmsData.map((film) => (
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
          </>
        )}
      </div>
      {!searchResult.loading && !searchResult.filmsData.length && (
        <div className=' text-primary flex flex-col justify-center items-center text-4xl'>
          Nothings Found
          <button className='bg-primary text-gray-950 px-4 py-2 rounded-xl mt-5 flex justify-center items-center'>
            <NavLink to={"/"}>Go Home</NavLink>
          </button>
        </div>
      )}
    </div>
  );
}
