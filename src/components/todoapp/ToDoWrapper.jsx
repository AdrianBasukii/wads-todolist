export default function ToDoWrapper({children}){
    return(
        <div className="w-15/16 h-full max-w-[1000px] mx-auto flex flex-col gap-8">
            {children}
        </div>
    )
}