// components/DraggableItem.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const DraggableItem = ({ id,field ,text, type }) => {
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.ITEM,
        item: { id, field , text, type },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                padding: '8px',
                margin: '4px',
                backgroundColor: 'lightgray',
                borderRadius: '4px',
                cursor:'pointer'
            }}
        >
            {field}
        </div>
    );
};

export default DraggableItem;
