import PopupContainer from "./PopupContainer"
import { IoClose } from "react-icons/io5";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase"
import { useState } from "react";

export default function EditPopup({popupStatus, handleViewPopup, title, description, id}) {

    const [newTitle, setNewTitle] = useState(title)
    const [newDesc, setNewDesc] = useState(description)


    const handleUpdate = async() => {
        const todoDocRef = doc(db, 'tasks', id)
        try{
            await updateDoc(todoDocRef,{
                title: newTitle,
                description: newDesc
            })

            handleViewPopup()
        }
        catch(err){
            alert(err)
        }
    }

    return(
        <div className={popupStatus}>
            <PopupContainer>
                <div className="w-15/16 max-w-[600px] bg-neutral-900 rounded-md">
                    <div className="w-full border-b border-neutral-800 p-4 flex justify-between">
                        <h1>Edit Item</h1>
                        <button className="cursor-pointer" onClick={handleViewPopup}><IoClose size={25}/></button>
                    </div>
                    <div className="w-full flex flex-wrap justify-center gap-4 p-4">
                        <input className="text-xl w-full rounded py-1 px-2 border border-neutral-800" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} placeholder="Insert Title"/>
                        <textarea className="resize-none w-full h-32 p-2 rounded border border-neutral-800" onChange={(e) => setNewDesc(e.target.value)} value={newDesc} placeholder="Write a description..."></textarea>
                        <button onClick={handleUpdate} className="bg-blue-600 py-2 mt-8 w-64 rounded-md mx-auto hover:cursor-pointer">Save</button>
                    </div>
                </div>
            </PopupContainer>
        </div>
    )
}