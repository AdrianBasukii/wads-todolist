import {NavLink} from "react-router-dom"
import { FcGoogle } from "react-icons/fc";

export default function SignupContent(){
    return(
        <div className="flex flex-wrap justify-center gap-8 w-full">
            <h1 className="text-center font-bold text-3xl">Sign Up</h1>
            <form className="w-full flex flex-wrap justify-center gap-6" action="">
                <input placeholder="Name" className="w-64 border-2 border-neutral-900 rounded-md text-sm p-2" type="text" required/>
                <input placeholder="Email" className="w-64 border-2 border-neutral-900 rounded-md text-sm p-2" type="email" required/>
                <input placeholder="Password" className="w-64 border-2 border-neutral-900 rounded-md text-sm p-2" type="password" required/>
                <button className="bg-blue-600 py-2 w-64 rounded-md mt-6 hover:cursor-pointer" type="submit">Sign Up</button>
            </form>
            <p className="text-neutral-400 text-sm" >Already have an account? <NavLink to="/login" className="text-blue-400">Login</NavLink></p>

            <div className="flex items-center gap-2 w-64">
                <hr className="flex-1 border-neutral-800" />
                <span className="text-neutral-400 text-sm">Or</span>
                <hr className="flex-1 border-neutral-800" />
            </div>

            <button className="flex items-center justify-center gap-4 w-64 rounded-md border-2 border-neutral-900 py-3 text-neutral-400 hover:cursor-pointer"><FcGoogle size={25}/>Sign up with Google</button>
            
        </div>
    )
}