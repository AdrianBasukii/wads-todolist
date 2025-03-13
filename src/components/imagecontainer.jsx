import Circles from "./circles"

export default function ImageContainer(){
    return(
        <div className="w-full flex flex-wrap">
            
            <div className="flex justify-between items-center rounded-tl-xl rounded-tr-xl border-2 border-neutral-900 p-4 w-full">
                <Circles />
                <h1 className="text-neutral-400 text-sm">To-Do App Image</h1>
            </div>
            <img className="w-full rounded-bl-xl rounded-br-xl border-b-2 border-r-2 border-l-2 border-neutral-900" src="src/assets/landing_image.png" alt="to-do app image" />
        </div>
    )
}