import BestFilms from "./pages/bestFilms/BestFilms";
import Home from "./pages/home/Home";
import SearchPage from "./pages/searchPage/SearchPage";
import Genres from "./pages/genres/Genres";
import MovieDetail from "./pages/movieDetail/MovieDetail";
import ErrorPage from './pages/errorPage/ErrorPage'
let routs = [
  { path: "/", element: <Home /> },
  { path: "250films/:pageNumber", element: <BestFilms /> },
  { path: "searchMovie/:name/:ID", element: <SearchPage /> },
  { path: "searchMovie/:name", element: <SearchPage /> },
  { path: "allGenres", element: <Genres /> },
  { path: "movieDetail/:movieName/:movieID", element: <MovieDetail /> },
  { path: "*", element: <ErrorPage /> },
];

export default routs;
