import React from 'react';
import { useDrop } from 'react-dnd';

const ItemType = {
    CARD: 'card',
};

const DropZone = ({ children, onDrop, title, number, currentItems, check }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemType.CARD,
        drop: (item) => {
            if (canDrop) {
                onDrop(item.index);
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <div
            ref={drop}
            className={`rounded-lg py-5 px-3 mt-4 ${currentItems.length < 3 ? 'h-[366px]' : 'h-auto'}
                        ${check && currentItems.length < 4 ? 'bg-[#FF3AA4]' : currentItems.length === 4 ? 'bg-green-500' : 'bg-[#7C81FF]'} 
                        ${isOver ? 'border-2 border-dashed border-white' : ''} `}>
            <div className='flex items-center gap-1'>
                <div className='w-3/12'>
                    <span className='text-white bg-[#003C67] w-11 h-11  rounded-full flex justify-center items-center font-bold text-xl'>{number}</span>
                </div>
                <p className='text-[#003C67] font-bold w-9/12'>{title}</p>
            </div>
            <div className='mt-2'>
                {children}
            </div>
        </div>
    );
};

export default DropZone;
