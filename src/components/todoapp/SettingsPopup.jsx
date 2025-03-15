import PopupContainer from "./PopupContainer"
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { db, auth } from "../../firebase/firebase";
import { updateProfile, updatePassword } from "firebase/auth";

export default function SettingsPopup({username, profPic, popupStatus, handlePopup}) {
    const [profileImage, setProfileImage] = useState(profPic);
    const [name, setName] = useState(username);
    const [newPass, setNewPass] = useState("")
    const [newPassConf, setNewPassConf] = useState("")
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setProfileImage(e.target.result);
            reader.readAsDataURL(file);
        }
    }

    const handleUpdateProf = async () => {
        try {
            if (!auth.currentUser) throw new Error("No user logged in");
      
            await updateProfile(auth.currentUser, {
                displayName: name,
            });

            if(newPass != "" && newPassConf != "" && newPass === newPassConf){
                await updatePassword(auth.currentUser, newPass);
            }
            else if(newPass != newPassConf){
                alert("Password Mismatch")
            }
            else if(newPass === "" || newPassConf === "" ){
                alert("Empty Field")
            }
            else{
                alert("Profile updated successfully!");
            }
            
        } catch (err) {
          console.error("Error updating name:", err);
          alert(err.message);
        }
      };

    function handleSave() {
        handlePopup()
        handleUpdateProf()
    }

    return(
        <div className={popupStatus}>
            <PopupContainer>
                <div className="w-15/16 max-w-[600px] bg-neutral-900 rounded-md">
                    <div className="w-full border-b border-neutral-800 p-4 flex justify-between">
                        <h1>Account Settings</h1>
                        <button className="cursor-pointer" onClick={handlePopup}><IoClose size={25}/></button>
                    </div>
                    <div className="w-full flex flex-wrap justify-center gap-4 p-4">
                        <div className="flex items-center justify-center w-full border-b border-neutral-800 py-8 mb-8">
                            <div className="relative group">
                                <img 
                                    src={profileImage} 
                                    alt="Profile" 
                                    className="w-24 h-24 rounded-full object-cover border-2 border-neutral-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    <label className="cursor-pointer p-2 rounded-full bg-neutral-800 hover:bg-blue-600">
                                        <MdModeEdit />
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            className="hidden" 
                                            onChange={handleImageChange}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-3/4 justify-start">
                            <label className="text-neutral-600" htmlFor="name">Name</label>
                            <input className="w-full text-md rounded py-2 px-2 border border-neutral-800 mt-2 mb-4" onChange={(e) => setName(e.target.value)} id="name" value={name} type="text" />
                            <label className="text-neutral-600" htmlFor="pass">New Password</label>
                            <input className="w-full text-md rounded py-2 px-2 border border-neutral-800 mt-2 mb-4" onChange={(e) => setNewPass(e.target.value)} id="pass" type="password" />
                            <label className="text-neutral-600" htmlFor="confpass">Confirm New Password</label>
                            <input className="w-full text-md rounded py-2 px-2 border border-neutral-800 mt-2 mb-4" onChange={(e) => setNewPassConf(e.target.value)} id="confpass" type="password" />
                        </div>
                        <div className="w-full flex items-center mb-4">
                            <button onClick={handleSave} className="bg-blue-600 py-2 mt-8 w-64 rounded-md mx-auto hover:cursor-pointer">Save</button>
                        </div>
                    </div>
                </div>
            </PopupContainer>
        </div>
    )
}