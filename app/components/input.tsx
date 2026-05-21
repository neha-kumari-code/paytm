type InputProps={
    type:string;
    placeholder?:string;
    id:string;
    onChangeHandler:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    value:string
}
export default function Input({type,placeholder,id,onChangeHandler,value}:InputProps){
    return <input type={type} id={id} className="border border-gray-300 rounded-sm outline-none px-1 py-1 text-base focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200" 
    placeholder={placeholder} onChange={onChangeHandler} value={value}
    />
}
