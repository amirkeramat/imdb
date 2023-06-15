import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { FaArrowCircleDown, FaArrowUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  showMenuAction,
  showSubMenuAction,
} from "../../features/menu/MenuSlice";
import { FetchGenres } from "../../features/genres/GenresSlice";
export default function Topbar() {
  const dispatch = useDispatch();
  const { genresData } = useSelector((state) => state.genres);
  const { mainMenuShow, subMenuShow } = useSelector((state) => state.showMenu);

  useEffect(() => {
    dispatch(FetchGenres("https://moviesapi.ir/api/v1/genres"));
  }, []);

  const genresSubMenuHandler = () => {
    dispatch(showSubMenuAction());
  };

  return (
    <div className=' fixed top-0 left-0 right-0 bg-gray-950 h-[50px] text-gray-950  z-[9999999] px-4 sm:px-[100px]'>
      <div className='flex justify-between items-center h-full'>
        <h1 className='h1 text-gray-950 font-extrabold text-lg px-4 py-1 rounded-xl bg-primary'>
          IMDB
        </h1>
        {!mainMenuShow ? (
          <SlMenu
            className=' cursor-pointer'
            color='white'
            onClick={() => dispatch(showMenuAction())}
          />
        ) : (
          <FaArrowUp
            className=' cursor-pointer'
            color='white'
            onClick={() => dispatch(showMenuAction())}
          />
        )}
      </div>
      <div
        className={`bg-gray-800 text-primary overflow-hidden transition-all ease-in duration-500 ${
          mainMenuShow ? "max-h-[400px]" : "max-h-0 "
        }`}>
        <ul className='flex flex-col py-2 items-center'>
          <li className='p-2'>
            <NavLink to={"/250films/1"}>TOP250Films</NavLink>
          </li>
          <li className='p-2 flex items-center flex-col'>
            <div onClick={genresSubMenuHandler} className='flex items-center'>
              <FaArrowCircleDown className='me-2' />
              <h6>Genres</h6>
            </div>

            <div
              className={` overflow-y-hidden transition-all ease-in duration-500 ${
                subMenuShow ? "max-h-[350px]" : "max-h-0"
              }`}>
              <ul className='p-2 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2'>
                {genresData && (
                  <>
                    {genresData.slice(1, 10).map((genres) => (
                      <li
                        onClick={() => {
                          dispatch(showMenuAction());
                          dispatch(showSubMenuAction());
                        }}
                        className='py-[0.1rem]'
                        key={genres.id}>
                        <NavLink
                          to={`/searchMovie/${genres.name}/${genres.id}`}>
                          {genres.name}
                        </NavLink>
                      </li>
                    ))}
                    <li
                      onClick={() => {
                        dispatch(showMenuAction());
                        dispatch(showSubMenuAction());
                      }}>
                      <NavLink to={"/allGenres"}>More...</NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
