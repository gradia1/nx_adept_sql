// pages/index.js
import React from 'react';
//import DraggableList from './dragndrop'
import DraggableList from './listItems';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Page</h1>
      <DraggableList />
    </div>
  );
};

export default HomePage;
