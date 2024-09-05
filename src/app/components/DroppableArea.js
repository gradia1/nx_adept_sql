// components/DroppableArea.js
import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import DraggableItem from './DraggableItem';

const DroppableArea = ({ items, onDrop, onItemClick }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ITEM,
    drop: (item) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        color:'blue',
        minHeight: '400px',
        padding: '8px',
        backgroundColor: isOver ? 'lightblue' : 'lightgrey',
        borderRadius: '4px',
        border: '1px solid #ddd',
      }}
    >
      {items.map((item) => (
        <DraggableItem
          key={item.id}
          id={item.id}
          field={item.field}
          text={item.text}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default DroppableArea;
