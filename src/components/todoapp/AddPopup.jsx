import PopupContainer from "./PopupContainer"
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { db, auth } from "../../firebase/firebase";
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export default function AddPopup({popupStatus, handleAddPopup}) {
    const[title, setTitle] = useState("")
    const[description, setDesc] = useState("")

    const handleAdd = async () => {

        if( title === "") {
            alert("Please write a title.")
            return;
        }
        try{
            await addDoc(collection(db, 'tasks'), {
                uid: auth.currentUser.uid,
                title: title,
                description: description,
                completed: false,
                timestamp: Timestamp.now()
            })

            handleAddPopup()
            setTitle("")
            setDesc("")

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
                        <input className="text-2xl rounded py-1 px-2 border border-neutral-800" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Insert Title"/>
                        <button className="cursor-pointer" onClick={handleAddPopup}><IoClose size={25}/></button>
                    </div>
                    <div className="w-full flex flex-wrap justify-center gap-4 p-4">
                        <textarea className="resize-none w-full h-32 p-2 rounded border border-neutral-800" value={description} onChange={(e) => setDesc(e.target.value)} placeholder="Write a description..."></textarea>
                        <button className="bg-blue-600 py-2 w-64 rounded-md mx-auto hover:cursor-pointer" onClick={handleAdd}>Create</button>
                    </div>
                </div>
            </PopupContainer>
        </div>
    )
}