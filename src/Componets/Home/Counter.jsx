import React, { useContext } from 'react';
import { FriendContext } from '../Root/Root';

const Counter = () => {
    const {friends, friendInteraction} = useContext(FriendContext);

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <div className="card text-center grid gap-2 p-8">
                <h2 className='primary font-semibold text-3xl'>{friends.length}</h2>
                <p className='secondary'>Total Friend</p>
            </div>
            <div className="card text-center grid gap-2 p-8">
                <h2 className='primary font-semibold text-3xl'>3</h2>
                <p className='secondary'>On Track</p>
            </div>
            <div className="card text-center grid gap-2 p-8">
                <h2 className='primary font-semibold text-3xl'>6</h2>
                <p className='secondary'>Need Attention</p>
            </div>
            <div className="card text-center grid gap-2 p-8">
                <h2 className='primary font-semibold text-3xl'>{friendInteraction.length}</h2>
                <p className='secondary'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default Counter;