import React from 'react'

const ProgressBar = ({ i, color }) => {
    const barStyle = (isActive) => ({
        width: '7rem',
        height: '0.5rem',
        borderRadius: '9999px',
        backgroundColor: isActive ? '#1DDD76' : color,
    });
    return (
        <div className='w-full flex justify-center'>
            <div className='max-w-[544px] flex items-center gap-6 justify-center'>
                {Array.from({ length: 4 }).map((_, index) => (
                <div  key={index} style={barStyle(i > index ? true : false)}></div>
                ))}
                
            </div>
        </div>
    )
}

export default ProgressBar
