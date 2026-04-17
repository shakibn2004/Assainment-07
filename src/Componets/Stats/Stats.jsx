
import { Cell, Legend, Pie, PieChart } from 'recharts';
import { FriendContext } from '../Root/Root';
import { useContext } from 'react';



const COLORS = ["#7C3AED", "#1F4D3D", "#34A853"];


const Stats = () => {
    const { friendInteraction } = useContext(FriendContext);
    const callData = friendInteraction.filter(call => call.icon === "meetup");
    const chatData = friendInteraction.filter(chat => chat.icon === "text");
    const videoData = friendInteraction.filter(video => video.icon === "video");
    const data = [
        { name: "Text", value: chatData.length },
        { name: "Call", value: callData.length },
        { name: "Video", value: videoData.length },
    ];

    return (
        <div className='py-20 max-w-277.5 w-[90%] md:w-[70%] mx-auto space-y-6'>
            <h1 className='text-4xl font-bold'>Friendship Analytics</h1>
            {
                friendInteraction.length === 0
                    ? <h1 className='text-2xl font-semibold text-center mt-30'>Add something to your timeline to show Rechart</h1>
                    :
                    (
                        <div className='py-8 px-2 md:p-8'>
                            <p className='text-[20px] font-medium secondary'>By Interaction Type</p>
                            <div className='mx-auto w-fit'>
                                <PieChart width={300} height={300}>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={70}
                                        outerRadius={100}
                                        paddingAngle={3}
                                        cornerRadius={10}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={index} fill={COLORS[index]} />
                                        ))}
                                    </Pie>

                                    <Legend />
                                </PieChart>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default Stats;