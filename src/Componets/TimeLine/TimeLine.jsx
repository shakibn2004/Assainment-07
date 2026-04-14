import { useContext, useState } from "react";
import { FriendContext } from "../Root/Root";
import { ChevronRight } from "lucide-react";


const TimeLine = () => {
    const { friendInteraction } = useContext(FriendContext);
    const [filterItems, setFilterItems] = useState(friendInteraction);
    const handleFilter = (value) => {
        if (value === 'default') {
            setFilterItems(friendInteraction)
        } else {
            const filterCards = friendInteraction.filter(call => call.icon === value);
            setFilterItems(filterCards)
        }
    }
    return (
        <div className='timeline py-20 mx-auto max-w-277.5 w-[70%]'>
            <div className="timeline-header space-y-10">
                <h1 className='text-5xl font-bold'>Timeline</h1>
                <div className="flex justify-between items-center">
                    <p className='text-[18px] secondary'>Filter Timeline</p>
                    <div className="sort flex gap-3 items-center">
                        <p className="text-2xl">Sort By:</p>
                        <select onChange={(e) => handleFilter(e.target.value)} name="" id="1" className="focus:outline-none py-2 px-3 shadow-[0_0_2px_#000]/50 rounded">
                            <option value="default">Default Value</option>
                            <option value="call">Call</option>
                            <option value="chat">Text</option>
                            <option value="video">Video</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="timeline-card-container py-6 space-y-10">
                {
                    filterItems.length === 0
                        ? <h1 className="text-4xl text-center mt-10 font-bold">No Interaction With Your Friend😫</h1>
                        :
                        (
                            filterItems.map(frInteraction => {
                                const { name, dateInteraction, icon } = frInteraction;
                                return (
                                    <div className="timeline-card flex items-center gap-3">
                                        <p className='text-5xl'>{icon === "call" ? "🤝" : icon === "chat" ? "💬" : "🎥"}</p>
                                        <div className="content">
                                            <h5 className="text-[20px] font-medium">{icon === "call" ? "Meetup" : icon === "chat" ? "Text" : "Video"} <span className="text-[18px] font-normal secondary">With {name}</span></h5>
                                            <p className="secondary">{dateInteraction}</p>
                                        </div>
                                    </div>
                                )
                            })
                        )
                }
            </div>
        </div>
    );
};

export default TimeLine;