import "./App.css";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import routs from "./route";
import SearchBox from "./components/searchBox/SearchBox";

function App() {
  let router = useRoutes(routs);

  return (
    <div>
      <Topbar />
      <SearchBox />
      <div className='py-[100px] px-0 md:px-20'>{router}</div>
      <Navbar />
    </div>
  );
}

export default App;
