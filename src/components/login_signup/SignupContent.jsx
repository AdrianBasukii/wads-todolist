import {NavLink, useNavigate} from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
  } from "../../firebase/firebase.js";

export default function SignupContent(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [user, loading, error] = useAuthState(auth)

    const signup = () => {
        if(!name) alert("Please enter name")
        registerWithEmailAndPassword(name, email, password)
    }

    const navigate = useNavigate()

    useEffect(() => {
        if(loading) return;
        if(user) navigate("/todolist") 
    },[user, loading])

    return(
        <div className="flex flex-wrap justify-center gap-8 w-full">
            <h1 className="text-center font-bold text-3xl">Sign Up</h1>
            <div className="w-full flex flex-wrap justify-center gap-6" action="">
                <input onChange={(e) => setName(e.target.value)} autocomplete="off" placeholder="Name" className="w-64 border-2 border-neutral-900 rounded-md text-sm p-2" type="text" required/>
                <input onChange={(e) => setEmail(e.target.value)} autocomplete="off" placeholder="Email" className="w-64 border-2 border-neutral-900 rounded-md text-sm p-2" type="email" required/>
                <input onChange={(e) => setPassword(e.target.value)} autocomplete="off" placeholder="Password" className="w-64 border-2 border-neutral-900 rounded-md text-sm p-2" type="password" required/>
                <button onClick={signup} className="bg-blue-600 py-2 w-64 rounded-md mt-6 hover:cursor-pointer">Register</button>
            </div>
            <p className="text-neutral-400 text-sm" >Already have an account? <NavLink to="/login" className="text-blue-400">Login</NavLink></p>

            <div className="flex items-center gap-2 w-64">
                <hr className="flex-1 border-neutral-800" />
                <span className="text-neutral-400 text-sm">Or</span>
                <hr className="flex-1 border-neutral-800" />
            </div>

            <button onClick={signInWithGoogle} className="flex items-center justify-center gap-4 w-64 rounded-md border-2 border-neutral-900 py-3 text-neutral-400 text-sm hover:cursor-pointer"><FcGoogle size={20}/>Sign in with Google</button>
            
        </div>
    )
}