import React, { useState } from 'react';

const UserDateAndTime = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time)

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time)
    }
    setInterval(updateTime, 1000)
    return (

        <div className='textStyle text-3xl'>
            <h1>{currentTime}</h1>
        </div>
    );
};

export default UserDateAndTime;