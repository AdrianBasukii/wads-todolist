import AddPopup from "./AddPopup"
import { useState } from "react"

export default function ToDoButtons({filterHandler}) {

    const [addPopupStatus, setAddPopupStatus] = useState("hidden")

    function handleAddPopup(){
        if(addPopupStatus === "hidden"){
            setAddPopupStatus("block")
        }

        else{
            setAddPopupStatus("hidden")
        }
    }

    return(
        <>
            <div className="w-full flex gap-4 justify-end mb-6">
                <select onChange={(e) => filterHandler(e.target.value)} className="h-10 px-2 border border-neutral-800 focus:border-neutral-800 rounded-md hover:cursor-pointer">
                    <option className="bg-neutral-950" value="all">All</option>
                    <option className="bg-neutral-950" value="completed">Completed</option>
                    <option className="bg-neutral-950" value="incomplete">Incomplete</option>
                </select>
                <button onClick={handleAddPopup} className="border border-neutral-800 rounded-md px-4 h-10 hover:cursor-pointer">Add Item</button>
            </div>
            <AddPopup popupStatus={addPopupStatus} handleAddPopup={handleAddPopup}/>
        </>
    )
}