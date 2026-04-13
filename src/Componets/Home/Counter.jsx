import React from 'react';

const Counter = () => {
    return (
        <div className='grid grid-cols-4 gap-2'>
            <div className="card text-center grid gap-2 p-8">
                <h2 className='primary font-semibold text-3xl'>10</h2>
                <p className='secondary'>Total Friend</p>
            </div>
            <div className="card text-center grid gap-2 p-8">
                <h2 className='primary font-semibold text-3xl'>10</h2>
                <p className='secondary'>On Track</p>
            </div>
            <div className="card text-center grid gap-2 p-8">
                <h2 className='primary font-semibold text-3xl'>10</h2>
                <p className='secondary'>Need Attention</p>
            </div>
            <div className="card text-center grid gap-2 p-8">
                <h2 className='primary font-semibold text-3xl'>10</h2>
                <p className='secondary'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default Counter;