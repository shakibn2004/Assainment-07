import { Outlet, useLoaderData, useNavigation } from "react-router";
import Header from "../Home/Header";
import { createContext, useState } from "react";
import Footer from "../Home/Footer";
import Loader from "./Loader";

export const FriendContext = createContext("");

const Root = () => {
  const friends = useLoaderData();
  const [currentFrieend, setCurrentFriend] = useState({});
  const [friendInteraction, setFriendInteraction] = useState([])

  const navigation = useNavigation()
  return (
    <div className="min-h-screen flex flex-col">
      <FriendContext.Provider
        value={{ friends, currentFrieend, setCurrentFriend, friendInteraction, setFriendInteraction }}
      >
        <Header />
        <main className="grow">
          {navigation.state === "loading"&& <Loader />}
          <Outlet />
        </main>
        <Footer />
      </FriendContext.Provider>
    </div>
  );
};

export default Root;
