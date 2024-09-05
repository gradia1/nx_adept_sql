// pages/index.js
'use client'
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
//import DraggableItem from './components/DraggableItem';
import DroppableArea from './components/DroppableArea';
//import { ItemTypes } from './components/ItemTypes';

const Home = () => {
  const [list1, setList1] = useState([
    { id: '1',field:'Brand' ,  text: 'PM_BRAND_SALE "Brand"', type: 'list1' },
    { id: '2',field:'Model' , text: 'PM_MODEL_SALE "Model"', type: 'list1' },
    { id: '3',field:'YearForm' , text: 'PM_CAR_AGE "YearFrom"', type: 'list1' },
    { id: '4',field:'YearTo' , text: 'PM_CAR_AGE_TO "YearTo"', type: 'list1' },
    { id: '5',field:'OwnDamageForm' , text: 'min(PM_OD) "OwnDamageFrom"', type: 'list1' },
    { id: '6',field:'OwnDamageTo' , text: 'max(PM_OD) "OwnDamageTo"', type: 'list1' },
    { id: '7',field:'NetPremium' , text: 'TRUNC(MFEC_TOTAL_PRMM,0)-ceil((TRUNC(MFEC_TOTAL_PRMM,0)-TRUNC(round((TRUNC(MFFC_TOTAL_PRMM,0)*0.07)/1.07,2))*0.004/1.004) + TRUNC(round((TRUNC(MFFC_TOTAL_PRMM,0) * 0.07)/1.07,2)),2) "NetPremium"', type: 'list1' },
    { id: '8',field:'ToTalPremium' , text: 'celi((TRUNC(MFFC_TOTAL_PRMM,0)*0.07)/1.07,2),2) "TotalPremium"', type: 'list1' },
    { id: '9',field:'Duty' , text: 'ceil(TRUNC(MFFC_TOTAL_PRMM,0)-TRUNC(MFFC_TOTAL_PRMM,0)*0.07)/1.07,2),2))*0.004/1.004 "Duty"', type: 'list1' },
    { id: '10',field:'Vat' , text: 'TRUNC(round((TRUNC(MFFC_TOTAL_PRMM,0)*0.007)/1.07,2),2) "Vat"', type: 'list1' },
  ]);

  const [list2, setList2] = useState([

  ]);

  function getSQL(){
    var sql = "SELECT "
    for(var i=0;i<list2.length;i++){
      sql += list2[i].text + ","
    }
    sql = sql.substring(0,sql.length - 1)
    alert(sql)


  }

  const handleDrop = (item) => {
    if (item.type === 'list1') {
      // Remove from list1
      setList1((prevList) => prevList.filter((i) => i.id !== item.id));
      {console.log(list1)}
      // Add to list2
      setList2((prevList) => [...prevList, { ...item, field:item.field , text:item.text , type:'list2' }]);
      {console.log(list2)}
    } else {
      // Remove from list2
      setList2((prevList) => prevList.filter((i) => i.id !== item.id));
      // Add to list1
      setList1((prevList) => [...prevList, { ...item,field:item.field, text: item.text, type: 'list1' }]);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div >
        <div>Avaliable Fields</div>
        <DroppableArea items={list1} onDrop={handleDrop} />
        </div>
        <div style={{position:'absolute',top:'100px',left:'40%'}} >You Can Move Left to Right or Right to Left</div>
        <div>
          <div>Show And Sequence Fields</div>
        <DroppableArea items={list2} onDrop={handleDrop} />
        </div>
      </div>
      <button onClick={getSQL}>Create SQL Command</button>

    </DndProvider>
  );
};

export default Home;
