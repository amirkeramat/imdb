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
        <>
          <div className="grid grid-cols-2 gap-2 px-1  sm:grid-cols-3 lg:grid-cols-4 justify-center w-full text-primary text-xl">
            {genresData.map((genre) => (
              <NavLink
                to={`/searchMovie/${genre.name}/${genre.id}`}
                className="w-[200px] flex items-center justify-center bg-gray-700 rounded-xl px-4 py-2"
                key={genre.id}
              >
                {genre.name}
              </NavLink>
            ))}
          </div>
        </>
      )}
    </>
  );
}
