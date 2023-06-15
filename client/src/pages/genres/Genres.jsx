import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchGenres } from "../../features/genres/GenresSlice";
import { NavLink } from "react-router-dom";
export default function Genres() {
  const dispatch = useDispatch();
  const { genresData } = useSelector((state) => state.genres);
  useEffect(() => {
    dispatch(FetchGenres("https://moviesapi.ir/api/v1/genres"));
  }, []);
  return (
    <>
      {genresData && (
        <div className="flex flex-col justify-center items-center pt-[100px] px-1 sm:px-[100px] w-full">
          <h1 className='text-primary text-2xl pb-[50px]'>Genres</h1>
          <div className='grid grid-cols-2 gap-1  sm:grid-cols-3 lg:grid-cols-4 justify-center items-center w-full text-primary text-lg'>
            {genresData.map((genre) => (
              <NavLink
                to={`/searchMovie/${genre.name}/${genre.id}`}
                className='w-[100px] sm:w-[200px] flex items-center justify-center bg-gray-700 rounded-xl px-0 sm:px-4 py-2 '
                key={genre.id}>
                {genre.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
