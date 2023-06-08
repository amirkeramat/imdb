import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchFilms } from "../../features/films/filmsSlice";
import MovieBox from "../movieBox/MovieBox";
export default function BestFilms() {
  const [page, setPage] = useState(1);
  const filmsStore = useSelector((state) => state.bestFilms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchFilms(`https://moviesapi.ir/api/v1/movies?page=${page}`));
  }, [page]);
  return (
    <div className=" relative">
      <h1 className=" text-primary text-3xl text-center ">250 Films</h1>

      {filmsStore.loading && <div className=" text-primary">loading</div>}
      {!filmsStore.loading && filmsStore.filmsData.length && (
        <>
          <div className="p-4 grid grid-cols-2 gap-2 h-full min-h-[670px] max-h-full">
            {filmsStore.filmsData.map((film) => (
              <MovieBox
                key={film.id}
                id={film.id}
                year={film.year}
                genres={film.genres}
                title={film.title}
                posters={film.poster}
              />
            ))}
          </div>
          <div className="flex justify-evenly fixed bottom-[50px] left-0 right-0 z-40 items-center bg-primary ">
            <button
              className="w-full bg-primary bg-opacity-75 text-gray-950 p-2 shadow-xl shadow-gray-950"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setPage((prv) => prv - 1);
              }}
            >
              Prevues
            </button>
            <h6 className="bg-gray-950 text-primary flex items-center rounded-full justify-center w-[40px] h-[20px]">{page}</h6>
            <button
              className="w-full bg-primary bg-opacity-75 text-gray-950 p-2 shadow-xl shadow-gray-950"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setPage((prv) => prv + 1);
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
