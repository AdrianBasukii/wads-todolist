export default function FlexContainer({children}){
    return(
        <div className="w-full h-full flex items-center justify-center">
            {children}
        </div>
    )
}