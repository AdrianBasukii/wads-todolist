import PopupContainer from "./PopupContainer"
import { IoClose } from "react-icons/io5";

export default function ViewPopup({popupStatus, handleViewPopup, title, description}) {
    return(
        <div className={popupStatus}>
            <PopupContainer>
                <div className="w-15/16 max-w-[600px] bg-neutral-900 rounded-md">
                    <div className="w-full border-b border-neutral-800 p-4 flex justify-between">
                        <h1 className="text-2xl">{title}</h1>
                        <button className="cursor-pointer" onClick={handleViewPopup}><IoClose size={25}/></button>
                    </div>
                    <div>
                        {description
                        ?<p className="p-4">{description}</p>
                        :<p className="text-neutral-600 p-4">No description added</p>}                  
                    </div>
                </div>
            </PopupContainer>
        </div>
    )
}