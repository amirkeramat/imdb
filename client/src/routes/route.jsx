import BestFilms from "../components/bestFilms/BestFilms";
import BestTvs from "../components/bestTvs/BestTvs";
import ComingSoon from "../components/comingSoon/ComingSoon";
import InTheater from "../components/inTheater/inTheater";
let routs = [
  { path: "/" },
  { path: "250films", element: <BestFilms /> },
  { path: "250tvs", element: <BestTvs /> },
  { path: "comingsoon", element: <ComingSoon /> },
  { path: "intheaters", element: <InTheater /> },
];

export default routs;
