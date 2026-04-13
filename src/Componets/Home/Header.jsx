import { ChartLine, Clock3, House } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
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
            <li className="px-4 py-3 flex gap-1 btn">
              <House />
              Home
            </li>
            <li className="px-4 py-3 flex gap-1 ">
              <Clock3 />
              TimeLine
            </li>
            <li className="px-4 py-3 flex gap-1 ">
              <ChartLine />
              Stats
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
