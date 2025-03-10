import { NavLink } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-neutral-950 border-b border-neutral-900">
            <div className="max-w-[1500px] flex justify-between items-center p-8 md:px-16 md:py-12 mx-auto">
                <div>
                    <h1 className="text-xl md:text-3xl font-bold select-none">Adrian Basuki</h1>
                </div>
                <ul className="gap-8 hidden md:flex">
                    <li>
                        <NavLink to="/login" className="flex justify-center w-[100px] border-neutral-600 border py-2 px-5 rounded-sm">Log In</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" className="flex justify-center w-[100px] bg-blue-600 py-2 px-4 rounded-sm border border-blue-600">Sign Up</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}