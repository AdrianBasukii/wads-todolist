import {useEffect, useState} from 'react';
import './styles.css';

function CreateListItem({onAdd}){
  return(
    <div className="flex gap-10">
      <input id="textInput" className="w-xl h-10 border-b py-8 px-2 focus:border-blue-500 focus:ring-0 outline-none transition-all" type="text" placeholder='Input here'></input>
      <button className="text-3xl hover:cursor-pointer" onClick={onAdd}>+</button>
    </div>
  );
}

function ToDoList({itemList, onDelete}){
  return (
    <>
      <div className="mt-8 h-full">
        {itemList.length === 0 ? (
          <div>
          </div>
        ) : (
          itemList.map((item, index) => (
              <div className="flex justify-between items-center mb-10" key={index}>
                <label className="checkbox-container">
                  <input type="checkbox"></input>
                  <span className="checkmark"></span>
                </label>
                <h3>{item}</h3>
                <button className="bg-red-900 p-2 rounded-sm text-sm hover:cursor-pointer" onClick={() => onDelete(index)}>Delete</button>
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
  <div className="bg-neutral-950 text-white w-full min-h-screen flex justify-center items-center">
    <div className="max-w-7xl m-auto overflow-y-auto">
      <CreateListItem onAdd={handleAdd}/>
      <ToDoList itemList={items} onDelete={handleDelete}/>
    </div>
  </div>
  ); 
}