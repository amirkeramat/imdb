import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FetchSearch } from "../../features/search/SearchSlice";
import { useParams } from "react-router-dom";
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
    <div className="relative min-h-[100vh]">
      <h1 className=" text-primary text-3xl text-center ">{name}  Movies</h1>
      <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 gap-y-2 gap-x-0 sm:gap-x-2 py-[50px] gap-2">
        {searchResult.loading && <div className=" text-primary">loading</div>}
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
        {!searchResult.loading && !searchResult.filmsData.length && (
          <div className=" text-primary">no data</div>
        )}
      </div>
    </div>
  );
}
