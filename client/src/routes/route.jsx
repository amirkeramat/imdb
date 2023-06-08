import BestFilms from "../components/bestFilms/BestFilms";
import BestTvs from "../components/bestTvs/BestTvs";
import ComingSoon from "../components/comingSoon/ComingSoon";
import InTheater from "../components/inTheater/inTheater";
import Home from "../components/home/Home";
import SearchPage from "../components/searchPage/SearchPage";
let routs = [
  { path: "/",element:<Home/> },
  { path: "250films/:pageNumber", element: <BestFilms /> },
  { path: "250tvs", element: <BestTvs /> },
  { path: "comingsoon", element: <ComingSoon /> },
  { path: "intheaters", element: <InTheater /> },
  { path: "searchMovie/:movieName", element: <SearchPage /> },
];

export default routs;
