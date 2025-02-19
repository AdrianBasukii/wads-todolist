import {useEffect, useState} from 'react';
import './styles.css';

function CreateListItem({onAdd}){
  return(
    <div className="listItemForm">
      <input id="textInput" className="textInput" type="text"></input>
      <button className="addButton" onClick={onAdd}>+</button>
    </div>
  );
}

function ToDoList({itemList, onDelete}){
  return (
    <>
      <div className="toDoList">
      {itemList.length === 0 ? (
        <div className="toDoItem">
          <h2>To Do List Empty!</h2>
        </div>
      ) : (
        itemList.map((item, index) => (
            <div className="toDoItem" key={index}>
              <label className="checkbox-container">
                <input type="checkbox"></input>
                <span className="checkmark"></span>
              </label>
              <h3>{item}</h3>
              <button onClick={() => onDelete(index)}>Delete</button>
            </div>
        ))
      )}
      </div>
    </>
  );
}

export default function MainPage(){
  const [items, setItems] = new useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(items))
  }, [items])

  function handleAdd(){
    const textInput = document.getElementById("textInput");
    if(textInput.value != ""){
      setItems(prevItems => [...prevItems, textInput.value]);
    }
  }

  function handleDelete(index){
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  }

  return(
  <>
    <CreateListItem onAdd={handleAdd}/>
    <ToDoList itemList={items} onDelete={handleDelete}/>
  </>
  ); 
}