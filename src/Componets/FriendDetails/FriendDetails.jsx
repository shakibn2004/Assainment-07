import { useContext } from "react";
import { FriendContext } from "../Root/Root";
import {
  Archive,
  Bell,
  History,
  MessageSquareMore,
  PhoneCall,
  Trash,
  Video,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router";


const FriendDetails = () => {
  const { currentFrieend, setFriendInteraction, friendInteraction } = useContext(FriendContext);
  const handleFrInteraction = ({ name, icon }) => {
    toast.success(name + " added to your timeline", { position: "top-center" })
    const date = new Date();
    let dateFormat = `${date.toLocaleString("en-US", { month: "long" })} ${date.getDate()}, ${date.getFullYear()} `
    let clickInteraction = { name: name, icon: icon, dateInteraction: dateFormat }
    setFriendInteraction([...friendInteraction, clickInteraction])
  }

  const {
    id,
    name,
    picture,
    status,
    bio,
    email,
    days_since_contact,
    goal,
    next_due_date,
    tags,
  } = currentFrieend;

  return (
    <div>
      {
        typeof (name) === "undefined" ? (
          <div className="flex flex-col justify-center w-fit mx-auto gap-4 mt-30">
            <h1 className="text-3xl text-center">Ohh! You refesh the page, <br /> Please go back and try again</h1>
            <button className="btn w-fit mx-auto"><Link to={'/'}>Go Back</Link></button>
          </div>
        ) : (
          <div key={id} className="friend-details flex max-w-277.5 w-[70%] mx-auto justify-between py-15 gap-6">
            <ToastContainer />
            <div className="friend space-y-1 flex flex-col items-center">
              <img className="rounded-full w-20" src={picture} alt={name} />
              <h1 className="font-semibold text-[20px]">{name}</h1>
              <div className="status grid place-items-center">
                <p
                  className={`capitalize w-fit text-white rounded-full px-2 py-1.5 text-[14px] text-center ${status === "ok" ? "bg-green-500" : "bg-red-500"
                    }`}
                >
                  {status}
                </p>
                <div className="tags flex gap-2">
                  {tags.map((item) => {
                    return (
                      <p className="bg-green-400/40 mt-3 uppercase rounded-full px-2 py-1 text-center text-[#244D3F] text-[14px]">
                        {item}
                      </p>
                    )
                  })}
                </div>
              </div>
              <p className="mt-2 secondary">{bio}</p>
              <p className="secondary text-[14px]">Preferred: {email}</p>
              <div className="fnBtn flex flex-col gap-3 items-center mt-6 w-full">
                <button className="flex gap-2 py-3 shadow-[0px_0px_2px_#000]/40 rounded w-full justify-center">
                  <Bell />
                  Snooze 2 weeks
                </button>
                <button className="flex gap-2 py-3 shadow-[0px_0px_2px_#000]/40 rounded w-full justify-center">
                  <Archive />
                  Archive
                </button>
                <button className="flex gap-2 py-3 shadow-[0px_0px_2px_#000]/40 rounded w-full justify-center text-red-600">
                  <Trash />
                  Delete
                </button>
              </div>
            </div>

            <div className="friend-contact">
              <div className="goal grid grid-cols-3 gap-6">
                <div className="goal-card space-y-1 py-8 px-4 text-center rounded shadow-[0px_0px_2px_#000]/30">
                  <h1 className="text-3xl font-semibold primary">
                    {days_since_contact}
                  </h1>
                  <p className="secondary text-[14px]">Days Since Contact</p>
                </div>
                <div className="goal-card space-y-1 py-8 px-4 text-center rounded shadow-[0px_0px_2px_#000]/30">
                  <h1 className="text-3xl font-semibold primary">{goal}</h1>
                  <p className="secondary text-[14px]">Goal(Days)</p>
                </div>
                <div className="goal-card space-y-1 py-8 px-4 text-center rounded shadow-[0px_0px_2px_#000]/30">
                  <h1 className="text-3xl font-semibold primary">{next_due_date}</h1>
                  <p className="secondary text-[14px]">Next Due Date</p>
                </div>
              </div>

              <div className="relationship space-y-2 py-6">
                <div className="top flex justify-between">
                  <h1 className="text-[20px] font-medium primary ">Relationship</h1>
                  <p>Edit</p>
                </div>
                <h4 className="secondary">
                  Connect Every <span className="font-bold text-black">{goal}</span>{" "}
                  Days
                </h4>
              </div>

              <div className="check-in space-y-3 py-6">
                <h1 className="text-[20px] font-medium primary">Quick Check-In</h1>
                <div className="bottom grid grid-cols-3 place-items-center">
                  <div onClick={() => { handleFrInteraction({ name: name, icon: "call" }) }} className="icon py-4 px-3 space-y-2">
                    <PhoneCall />
                    <p>Call</p>
                  </div>
                  <div onClick={() => { handleFrInteraction({ name: name, icon: "chat" }) }} className="icon py-4 px-3 space-y-2">
                    <MessageSquareMore />
                    <p>Text</p>
                  </div>
                  <div onClick={() => { handleFrInteraction({ name: name, icon: "video" }) }} className="icon py-4 px-3 space-y-2">
                    <Video />
                    <p>Video</p>
                  </div>
                </div>
              </div>

              <div className="recent py-4 px-3 space-y-4">
                <div className="title flex justify-between items-center">
                  <h1 className="text-[20px] font-medium primary">
                    Recent Interactions
                  </h1>
                  <h1 className="flex gap-1 items-center">
                    <History size={14} />
                    Full History
                  </h1>
                </div>
                <div className="card-container p-2 space-y-6">
                  <div className="title-card flex justify-between items-center">
                    <div className="left flex gap-2 items-center">
                      <MessageSquareMore />
                      <div className="content">
                        <h5 className="text-[18px]">Text</h5>
                        <p className="secondary">Asked for career advice</p>
                      </div>
                    </div>

                    <div className="right">
                      <p className="secondary">Jan 28, 2026</p>
                    </div>
                  </div>
                  <div className="title-card flex justify-between items-center">
                    <div className="left flex gap-2 items-center">
                      <MessageSquareMore />
                      <div className="content">
                        <h5 className="text-[18px]">Text</h5>
                        <p className="secondary">Asked for career advice</p>
                      </div>
                    </div>

                    <div className="right">
                      <p className="secondary">Jan 28, 2026</p>
                    </div>
                  </div>
                  <div className="title-card flex justify-between items-center">
                    <div className="left flex gap-2 items-center">
                      <MessageSquareMore />
                      <div className="content">
                        <h5 className="text-[18px]">Text</h5>
                        <p className="secondary">Asked for career advice</p>
                      </div>
                    </div>

                    <div className="right">
                      <p className="secondary">Jan 28, 2026</p>
                    </div>
                  </div>
                  <div className="title-card flex justify-between items-center">
                    <div className="left flex gap-2 items-center">
                      <MessageSquareMore />
                      <div className="content">
                        <h5 className="text-[18px]">Text</h5>
                        <p className="secondary">Asked for career advice</p>
                      </div>
                    </div>

                    <div className="right">
                      <p className="secondary">Jan 28, 2026</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default FriendDetails;
