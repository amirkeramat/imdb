import "./App.css";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import routs from "./routes/route.jsX";
function App() {
  let router = useRoutes(routs);

  return (
    <>
      <Topbar />
      <div className="sticky h-full min-h-[600px]" >{router}</div>
      <Navbar />
    </>
  );
}

export default App;
