// components/DraggableItem.js
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const DraggableItem = ({ id, index, text, moveItem }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.ITEM,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div
      ref={drag}
      style={{ opacity, padding: '8px', margin: '4px', backgroundColor: 'lightgrey', borderRadius: '4px' }}
    >
      {text}
    </div>
  );
};

export default DraggableItem;
