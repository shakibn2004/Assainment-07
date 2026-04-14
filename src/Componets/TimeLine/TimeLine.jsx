import { useContext } from "react";
import { FriendContext } from "../Root/Root";


const TimeLine = () => {
    const { friendInteraction } = useContext(FriendContext);
    return (
        <div className='timeline py-20 mx-auto max-w-277.5 w-[70%]'>
            <div className="timeline-header space-y-10">
                <h1 className='text-5xl font-bold'>Timeline</h1>
                <p className='text-[18px] secondary'>Filter timeline</p>
            </div>

            <div className="timeline-card-container py-6 space-y-10">
                {
                    friendInteraction.length === 0
                        ? <h1 className="text-4xl text-center mt-10 font-bold">No Interaction With Your Friend😫</h1>
                        :
                        (
                            friendInteraction.map(frInteraction => {
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