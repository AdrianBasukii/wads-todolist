export default function PopupContainer({children}) {
    return(
        <div className="w-screen h-screen bg-black/75 flex items-center justify-center z-50 fixed top-0 left-0">
            {children}
        </div>
    )
}