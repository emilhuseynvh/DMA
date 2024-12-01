import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({ color, bgcolor, children, border, send }) => {
    const navigate = useNavigate()
    
    const handleClick = () => {
        if (send !== undefined && send !== null) {
            navigate(send);
        }
    };

    return (
        <button 
            onClick={handleClick} 
            style={{ backgroundColor: bgcolor, color }} 
            className={`w-[256px] ${border && `border-[${border}] border`} select-none rounded-[8px] h-[50px] flex justify-center items-center gap-2`}
        >
            {children}
        </button>
    );
}

export default Button;
