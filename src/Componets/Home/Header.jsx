import { ChartLine, Clock3, House } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [toggle, setToggle] = useState(localStorage.getItem("status"));
  return (
    <div className="sticky top-0 bg-white z-10">
      <header>
        <nav className="max-w-360 w-[90%] justify-between mx-auto flex py-4">
          <div className="nav-start">
            <Link>
              <h1 className="text-2xl">
                <span className="font-extrabold">Keen</span>
                <span className="text-[#1F2937] font-semibold">Keeper</span>
              </h1>
            </Link>
          </div>

          <ul className="nav-end flex">
            <Link to={'/'}>
              <li onClick={() => {setToggle("home"); localStorage.setItem('status', 'home')}} className={`px-4 py-3 flex gap-1 ${toggle === "home" ? "btn" : ""}`}>
                <House />
                Home
              </li>
            </Link>
            <Link to={'/timeline'}>
              <li onClick={() => {setToggle("timeline"); localStorage.setItem('status', 'timeline')}} className={`px-4 py-3 flex gap-1 ${toggle === "timeline" ? "btn" : ""}`}>
                <Clock3 />
                TimeLine
              </li>
            </Link>
            <Link to={'/stats'}>
              <li onClick={() => {setToggle("stats"); localStorage.setItem('status', 'stats')}} className={`px-4 py-3 flex gap-1 ${toggle === "stats" ? "btn" : ""}`}>
                <ChartLine />
                Stats
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
