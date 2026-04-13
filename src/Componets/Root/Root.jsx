import { Link, Outlet, useLoaderData } from "react-router";
import Header from "../Home/Header";
import { createContext } from "react";


export const FriendContext = createContext("");


const Root = () => {
    const data = useLoaderData();
  return (
    <div>
      <FriendContext.Provider value={data}>
        <Header />
        <Outlet />
      </FriendContext.Provider>
    </div>
  );
};

export default Root;
