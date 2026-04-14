import { useContext } from "react";
import { FriendContext } from "../Root/Root";
import { Link } from "react-router";

const Main = () => {
  const { friends, setCurrentFriend } =
    useContext(FriendContext);

  const handleFriend = (friend) => {
    setCurrentFriend(friend)
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">Your Friends</h1>
      <div className="friends-container grid grid-cols-4">
        {friends.map((friend) => {
          const { id, name, picture, tags, status } = friend;
          return (
            <Link to={`/frienddetails/${id}`}>
              <div onClick={() => handleFriend(friend)} className="card p-6" key={id}>
                <img
                  className="rounded-full mx-auto"
                  src={picture}
                  alt={name}
                />
                <div className="card-content text-center mt-3">
                  <h1 className="text-[20px] font-semibold ">{name}</h1>
                  <p className="secondary">62d ago</p>
                  <div className="tags flex justify-center gap-2 my-2 items-center">
                    {tags.map((item) => {
                      return (
                        <h1 className="bg-[#CBFADB] uppercase text-[#244D3F] font-medium text-[12px] rounded-full px-2 py-1.5">
                          {item}
                        </h1>
                      );
                    })}
                  </div>
                  <button
                    className={`capitalize ${
                      status === "ok" ? "bg-green-500" : "bg-red-500"
                    }  px-2 py-1.5 rounded-full text-white text-[12px]`}
                  >
                    {status}
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
