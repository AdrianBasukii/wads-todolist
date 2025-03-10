import Circles from "../circles"

export default function LSContainer({children}){
    return(
        <div className="pb-8 border-2 border-neutral-900 rounded-lg w-11/12 max-w-[400px]">
            <div className="w-full p-4 border-b-2 border-neutral-900 mb-8">
                <Circles/>
            </div>
            {children}
        </div>
    )
}