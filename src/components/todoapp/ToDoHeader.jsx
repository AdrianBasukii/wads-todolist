import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import SettingsPopup from "./SettingsPopup";
import { useState, useEffect, useRef } from "react";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import PlaceholderPFP from "../../assets/default_avatar.png"


export default function ToDoHeader({username, logout}) {
    const [user] = useAuthState(auth)

    const [settingsPopupStatus, setSettingsPopupStatus] = useState("hidden")

    function handleSettingsPopup(){
        if(settingsPopupStatus === "hidden"){
            setSettingsPopupStatus("block")
        }

        else{
            setSettingsPopupStatus("hidden")
        }
    }

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

    return(
        <>
        <div className="w-full h-32 flex items-center justify-between border-b border-neutral-800">
            <h1 className="text-2xl md:text-4xl font-bold">Hello, {user?.displayName || username}!</h1>
            <div className="flex items-center gap-4">
                <SettingsPopup username={user?.displayName || username} profPic={user?.photoURL || PlaceholderPFP} popupStatus={settingsPopupStatus} handlePopup={handleSettingsPopup}/>
                <div className="relative" ref={menuRef}>
                    <button onClick={toggleMenu} className="w-12 h-12 p-1 border-2 border-transparent hover:border-neutral-800 hover:cursor-pointer rounded-full transition-all">
                        <img className="w-full h-full rounded-full" src={user?.photoURL || PlaceholderPFP}  alt="profile picture" />
                    </button>

                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-36 bg-neutral-900 text-white rounded-md shadow-md border-2 border-neutral-800 overflow-hidden z-50">
                            <button className="flex items-center gap-2 w-full text-left p-4 border-b border-neutral-800 hover:bg-neutral-700 hover:cursor-pointer" onClick={handleSettingsPopup}><IoSettingsOutline size={20}/> Settings</button>
                            <button className="flex items-center gap-2 w-full text-left p-4 border-b border-neutral-800 hover:bg-neutral-700 hover:cursor-pointer" onClick={logout}><MdLogout size={20}/> Sign Out</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
        
    )
}