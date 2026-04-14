import { useContext, useState } from "react";
import { FriendContext } from "../Root/Root";


const TimeLine = () => {
    const { friendInteraction } = useContext(FriendContext);
    const [filterItems, setFilterItems] = useState(friendInteraction);
    const handleFilter = (value) => {
        if (value === 'default') {
            setFilterItems(friendInteraction)
        } else if (value === 'oldest') {
            const reversed = [...friendInteraction].reverse();
            setFilterItems(reversed)
        }
        else {
            const filterCards = friendInteraction.filter(meetup => meetup.icon === value);
            setFilterItems(filterCards)
        }
    }

    const handleSearch = (value) => {
        const searchFilter = friendInteraction.filter(item => item.name.toLowerCase().includes(value) || item.name.includes(value) || toCapitalize(item.name).includes(value) || toCapitalize(item.icon).includes(value) || item.icon.includes(value));
        if (searchFilter.length === 0) {
            setFilterItems([])
        } else {
            setFilterItems(searchFilter)
        }
    }

    const toCapitalize = (words) => {
        const capitalized = words
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        return capitalized;
    }
    return (
        <div className='timeline py-20 mx-auto max-w-277.5 w-[70%]'>
            <div className="timeline-header space-y-10">
                <div className="title flex justify-between items-center">
                    <h1 className='text-5xl font-bold'>Timeline</h1>
                    <input onChange={(d) => handleSearch(d.target.value)} type="search" placeholder="Enter Your Keyword Here" className="shadow-[0_0_2px_#000] h-fit py-2 px-3 rounded focus:outline-none" />
                </div>
                <div className="flex justify-between items-center">
                    <p className='text-[18px] secondary'>Filter Timeline</p>
                    <div className="sort flex gap-3 items-center">
                        <p className="text-2xl">Sort By:</p>
                        <select onChange={(e) => handleFilter(e.target.value)} name="" id="1" className="focus:outline-none py-2 px-3 shadow-[0_0_2px_#000]/50 rounded">
                            <option value="default">Default Value</option>
                            <option value="default">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="meetup">Meetup</option>
                            <option value="text">Text</option>
                            <option value="video">Video</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="timeline-card-container py-6 space-y-10">
                {
                    filterItems.length === 0
                        ? <h1 className="text-4xl text-center mt-10 font-bold leading-12">You Have No Interaction With Your Friends😫 <br /> Or <br />Your Search Keyword Does Not Match With The TimeLine Items</h1>
                        :
                        (
                            filterItems.map(frInteraction => {
                                const { name, dateInteraction, icon } = frInteraction;
                                return (
                                    <div className="timeline-card flex items-center gap-3">
                                        <p className='text-5xl'>{icon === "meetup" ? "🤝" : icon === "text" ? "💬" : "🎥"}</p>
                                        <div className="content">
                                            <h5 className="text-[20px] font-medium">{icon === "meetup" ? "Meetup" : icon === "text" ? "Text" : "Video"} <span className="text-[18px] font-normal secondary">With {name}</span></h5>
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