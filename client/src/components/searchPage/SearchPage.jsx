import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { FetchSearch } from "../../features/search/SearchSlice";
import { useParams } from "react-router-dom";
import MovieBox from "../movieBox/MovieBox";
useParams;
export default function SearchPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const searchResult = useSelector((state) => state.searchResult);
  useEffect(() => {
    dispatch(
      FetchSearch(
        `https://moviesapi.ir/api/v1/movies?q=${params.movieName}&page={page}`
      )
    );
  }, [params.movieName]);
  return (
    <div className='relative min-h-[100vh]'>
      <div className='grid grid-cols md:grid-cols-5 py-[75px] gap-2'>
        {searchResult.loading && <div className=' text-primary'>loading</div>}
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
              />
            ))}
          </>
        )}
        {!searchResult.loading && !searchResult.filmsData.length && (
          <div className=' text-primary'>no data</div>
        )}
      </div>
    </div>
  );
}
