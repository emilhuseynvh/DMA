import React from 'react';
import { useDrag } from 'react-dnd';

const ItemType = {
    CARD: 'card',
};

const DraggableCard = ({ item, index }) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemType.CARD,
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            className='bg-white rounded-lg py-2.5 px-5 mt-4'
            style={{
                opacity: isDragging ? 0.7 : 1,
                cursor: 'move',
            }}
        >
            <p className='text-[#0257BF]'>{item.text}</p>
        </div>
    );
};


export default DraggableCard;
