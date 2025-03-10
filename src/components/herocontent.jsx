import { NavLink } from "react-router-dom"
import ImageContainer from "./imagecontainer"

export default function HeroContent(){
    return(
        <div className="w-full md:h-[800px] lg:h-[600px] grid grid-rows-2 lg:grid-cols-2 lg:gap-8 px-8 pt-64 md:pt-0">
            <div className="flex flex-wrap flex-col text-center items-center md:text-left md:items-start justify-center gap-8 lg:row-span-full w-full md:px-16">
                <h1 className="text-5xl md:text-6xl font-bold">Welcome to My To-Do App!</h1>
                <p className="text-2xl md:text-3xl text-neutral-500">Stay organized and boost your productivity.</p>
                <NavLink to="/todolist" className="bg-blue-600 py-2 px-4 rounded-sm">Get Started</NavLink>
            </div>
            <div className="flex items-center justify-center lg:row-span-full w-full">
                <ImageContainer />
            </div>
        </div>
    )
}