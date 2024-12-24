import React from 'react'

const RadioOptionElement = ({ item, result }) => {
  return (
    <div className='w-full bg-[#F8F8F8] my-2 flex items-center h-[60px] rounded-[50px] px-6 cursor-pointer'>
        <div className={`w-6 h-6 ${ result ? 'border-[5px] border-[#6F8193]' : 'border-[3px]'} bg-white rounded-[50%]`}></div>
        <p className='ml-[10px] text-[#6A7580] select-none'>{item}</p>
    </div>
  )
}

export default RadioOptionElement