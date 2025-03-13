import { FiMoreVertical } from "react-icons/fi";
import ViewPopup from "./ViewPopup";
import EditPopup from "./EditPopup";
import { useState, useRef, useEffect } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase"

export default function ToDoItem({title, description, completed, id}) {

    const [viewPopupStatus, setViewPopupStatus] = useState("hidden")
    const [editPopupStatus, setEditPopupStatus] = useState("hidden")

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)

    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("click", handleClickOutside);
        }

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuOpen]);
    

    function handleViewPopup(){
        if(viewPopupStatus === "hidden"){
            setViewPopupStatus("block")
        }

        else{
            setViewPopupStatus("hidden")
        }
    }

    function handleEditPopup(){
        if(editPopupStatus === "hidden"){
            setEditPopupStatus("block")
        }

        else{
            setEditPopupStatus("hidden")
        }
    }

    const handleCompletion = async() => {
        const todoDocRef = doc(db, 'tasks', id)
        try{
            if(!completed){
                await updateDoc(todoDocRef, {
                    completed:true
                })
            }
            else{
                await updateDoc(todoDocRef, {
                    completed:false
                })
            }
        }
        catch(err){
            alert(err)
        }
    }

    const handleDeletion = async() => {
        const todoDocRef = doc(db, 'tasks', id)
        try{
            await deleteDoc(todoDocRef)
        }
        catch(err){
            alert(err)
        }
    }

    return(
        <>
            <div className="w-full h-18 flex justify-between items-center px-4 border-2 border-neutral-800 rounded-md">
                <div className="flex gap-4 items-center">
                    <div class="inline-flex items-center">
                        <label class="flex items-center cursor-pointer relative">
                            <input onChange={handleCompletion} checked={completed} type="checkbox" class="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border-2 border-neutral-700 checked:bg-green-600 checked:border-green-600" id="check" />
                            <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                            </span>
                        </label>
                    </div> 

                    <h1>{title}</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button className="hover:cursor-pointer bg-blue-600 rounded-sm h-6 px-2 text-sm" onClick={handleViewPopup}>View</button>
                    <div className="relative" ref={menuRef}>
                        <button onClick={toggleMenu} className="p-2 border-2 border-transparent hover:border-neutral-800 hover:cursor-pointer rounded-md">
                            <FiMoreVertical size={20} />
                        </button>

                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-24 bg-neutral-900 text-white rounded-md shadow-md border-2 border-neutral-800 overflow-hidden z-50">
                                <button onClick={handleEditPopup} className="block w-full text-left px-4 py-2 border-b border-neutral-800 hover:bg-neutral-700">Edit</button>
                                <button onClick={handleDeletion} className="block w-full text-left px-4 py-2 hover:bg-neutral-700">Delete</button>
                            </div>
                        )}
                    </div>
                </div>

                
            </div>
            <ViewPopup description={description} title={title} popupStatus={viewPopupStatus} handleViewPopup={handleViewPopup}/>
            <EditPopup description={description} title={title} id={id} popupStatus={editPopupStatus} handleViewPopup={handleEditPopup}/>
        </>
    )
}