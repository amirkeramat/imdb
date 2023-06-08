import "./App.css";
import { useRoutes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import routs from "./routes/route.jsX";
function App() {
  let router = useRoutes(routs);

  return (
    <div>
      <Topbar />
      <div className="h-full min-h-[670px]">{router}</div>
      <Navbar />
    </div>
  );
}

export default App;
