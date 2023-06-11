import BestFilms from "../pages/bestFilms/BestFilms";
import BestTvs from "../pages/bestTvs/BestTvs";
import ComingSoon from "../pages/comingSoon/ComingSoon";
import InTheater from "../pages/inTheater/InTheater";
import Home from "../pages/home/Home";
import SearchPage from "../pages/searchPage/SearchPage";
import Genres from "../pages/genres/Genres";
let routs = [
  { path: "/", element: <Home /> },
  { path: "250films/:pageNumber", element: <BestFilms /> },
  { path: "250tvs", element: <BestTvs /> },
  { path: "comingsoon", element: <ComingSoon /> },
  { path: "intheaters", element: <InTheater /> },
  { path: "searchMovie/:name/:ID", element: <SearchPage /> },
  { path: "allGenres", element: <Genres /> },
];

export default routs;
