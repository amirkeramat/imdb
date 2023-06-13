import BestFilms from "../pages/bestFilms/BestFilms";
import Home from "../pages/home/Home";
import Login from "../pages/login/login";
import Register from "../pages/register/Register";
import SearchPage from "../pages/searchPage/SearchPage";
import Genres from "../pages/genres/Genres";
import MovieDetail from "../pages/movieDetail/MovieDetail";
let routs = [
  { path: "/", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "250films/:pageNumber", element: <BestFilms /> },
  { path: "searchMovie/:name/:ID", element: <SearchPage /> },
  { path: "searchMovie/:name", element: <SearchPage /> },
  { path: "allGenres", element: <Genres /> },
  { path: "movieDetail/:movieName/:movieID", element: <MovieDetail /> },
];

export default routs;
