import { ChartLine, Clock3, House, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const Header = () => {
  const [toggle, setToggle] = useState();
  const [menu, setMenu] = useState(false);
  return (
    <div className="sticky top-0 bg-white z-10">
      <header>
        <nav className="max-w-360 w-[90%] justify-between items-center mx-auto flex py-4">
          <div className="nav-start">
            <Link>
              <h1 className="text-2xl">
                <span className="font-extrabold">Keen</span>
                <span className="text-[#1F2937] font-semibold">Keeper</span>
              </h1>
            </Link>
          </div>

          <div onClick={() => setMenu(true)} className="sm:hidden">
            <Menu size={30} />
          </div>

          <ul className="nav-end hidden sm:flex">
            <Link to={'/'}>
              <li onClick={() => { setToggle("home"); localStorage.setItem('status', 'home') }} className={`px-4 py-3 flex gap-1 ${toggle === "home" ? "btn" : ""}`}>
                <House />
                Home
              </li>
            </Link>
            <Link to={'/timeline'}>
              <li onClick={() => { setToggle("timeline"); localStorage.setItem('status', 'timeline') }} className={`px-4 py-3 flex gap-1 ${toggle === "timeline" ? "btn" : ""}`}>
                <Clock3 />
                TimeLine
              </li>
            </Link>
            <Link to={'/stats'}>
              <li onClick={() => { setToggle("stats"); localStorage.setItem('status', 'stats') }} className={`px-4 py-3 flex gap-1 ${toggle === "stats" ? "btn" : ""}`}>
                <ChartLine />
                Stats
              </li>
            </Link>
          </ul>
        </nav>
        <div className={`${menu? 'block' : "hidden"}`}>
          <div className={`flex md:hidden shadow-[0_0_2px_#000]/40 ${menu ? "translate-x-0" : "translate-x-full"} transition-all duration-300 flex-col gap-10 max-w-100 w-[90%] bg-white absolute h-screen right-0 top-0`}>

            <h1 onClick={() => setMenu(false)} className="self-end w-fit mr-7 mt-4"><X size={30} strokeWidth={3} /></h1>
            <ul className="flex flex-col gap-5 w-[70%] ml-5">
              <Link to={'/'}>
                <li onClick={() => { setToggle("home"); localStorage.setItem('status', 'home'); setMenu(false) }} className={`px-4 py-3 flex gap-2 text-3xl font-semibold items-center ${toggle === "home" ? "btn" : ""}`}>
                  <House size={30} />
                  Home
                </li>
              </Link>
              <Link to={'/timeline'}>
                <li onClick={() => { setToggle("timeline"); localStorage.setItem('status', 'timeline'); setMenu(false) }} className={`px-4 py-3 flex gap-2 text-3xl font-semibold items-center ${toggle === "timeline" ? "btn" : ""}`}>
                  <Clock3 size={30} />
                  TimeLine
                </li>
              </Link>
              <Link to={'/stats'}>
                <li onClick={() => { setToggle("stats"); localStorage.setItem('status', 'stats'); setMenu(false) }} className={`px-4 py-3 flex gap-2 text-3xl font-semibold items-center ${toggle === "stats" ? "btn" : ""}`}>
                  <ChartLine size={30} />
                  Stats
                </li>
              </Link>
            </ul>
            <p className="ml-5 mt-auto mb-5">© 2026 KeenKeeper. All rights reserved.</p>
          </div>
        </div>

      </header>
    </div>
  );
};

export default Header;
