import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
export default function Topbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" sticky top-0 left-0 right-0 bg-gray-950 h-[50px] text-gray-950 p-4 z-50">
      <div className="flex justify-between items-center">
        <h1 className="h1 text-primary">Imdb</h1>
        <SlMenu color="white" onClick={() => setShowMenu((prv) => !prv)} />
      </div>
      <div
        className={`bg-gray-950 text-primary overflow-hidden transition-all ease-linear opacity-0 duration-700 h-0 ${
          showMenu && "opacity-100 h-auto"
        }`}
      >
        <ul className="flex flex-col items-center">
          <li className="p-2">
            <NavLink to={'/250films'}>TOP250Films</NavLink>
          </li>
          <li className="p-2">
            <NavLink to={'/250tvs'}>TOP250Tvs</NavLink>
          </li>
          <li className="p-2">
            <NavLink to={'/comingsoon'}>COMINGSOON</NavLink>
          </li>
          <li className="p-2">
            <NavLink to={'/intheaters'}>INTHEATERS</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
