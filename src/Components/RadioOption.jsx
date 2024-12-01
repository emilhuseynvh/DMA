import React, { useEffect, useState } from 'react'
import RadioOptionElement from './RadioOptionElement'

const RadioOption = ({ answer, setAnswer, list, text, evaluate }) => {
    
    return (
        <div className={`${!evaluate && 'my-36'} mx-auto w-[1016px]`}>
            <h2 className='font-bold text-[48px] text-[#003C67] font-[Helvetica] leading-[62.5px]'>{text}</h2>
            <div>
                {list.map((item, i) => (
                    <div key={i} onClick={() => answer === i ? setAnswer(null) : setAnswer(i)}>
                        <RadioOptionElement result={answer === i ? true : false}  item={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RadioOption