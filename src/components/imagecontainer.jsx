import Circles from "./circles"

export default function ImageContainer(){
    return(
        <div className="border-2 border-neutral-900 rounded-xl w-full md:w-160 flex flex-wrap gap-6">
            
            <div className="flex justify-between items-center border-b-2 border-neutral-900 p-4 w-full">
                <Circles />
                <h1 className="text-neutral-400 text-sm">To-Do App Image</h1>
            </div>
            <div className="mx-auto w-15/16 h-84 bg-[url(src/assets/landing_image.png)] bg-center rounded-md"></div>
        </div>
    )
}