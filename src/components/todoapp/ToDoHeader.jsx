import { CiLogout } from "react-icons/ci";


export default function ToDoHeader({username, logout}) {
    return(
        <div className="w-full h-32 flex items-center justify-between border-b border-neutral-800">
            <h1 className="text-3xl md:text-5xl font-bold">Hello, {username}!</h1>
            <div className="flex items-center">
                <button className="flex items-center gap-4 border border-neutral-800 rounded-md px-4 h-10 hover:cursor-pointer" onClick={logout}>Logout <CiLogout size={20}/></button>
            </div>
        </div>
    )
}