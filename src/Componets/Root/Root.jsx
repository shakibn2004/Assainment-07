import { Link, Outlet, useLoaderData } from "react-router";
import Header from "../Home/Header";
import { createContext, useState } from "react";
import Footer from "../Home/Footer";

export const FriendContext = createContext("");

const Root = () => {
  const friends = useLoaderData();
  const [currentFrieend, setCurrentFriend] = useState({});
  const [friendInteraction, setFriendInteraction] = useState([])
  return (
    <div className="min-h-screen flex flex-col">
      <FriendContext.Provider
        value={{ friends, currentFrieend, setCurrentFriend, friendInteraction, setFriendInteraction }}
      >
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </FriendContext.Provider>
    </div>
  );
};

export default Root;
