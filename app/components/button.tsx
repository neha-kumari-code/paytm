type ButtonProps={
    text:string;
    onClickHandler:()=>void
    isSmall?:boolean
}
export default function Button({text,onClickHandler,isSmall}:ButtonProps){
    return <button
    onClick={onClickHandler}
    className={`
    ${isSmall?"w-100":"w-full"}
    bg-gray-500
    text-white
    py-2
    rounded-sm
    font-semibold
    shadow-md
    hover:bg-gray-800
    hover:shadow-lg
    active:scale-95
    transition-all
    duration-200
    cursor-pointer
  `}>
        {text}
    </button>
}