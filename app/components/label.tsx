type LabelProps={
    text:string;
    htmlFor:string;
}
export default function Label({text,htmlFor}:LabelProps){
    return <label htmlFor={htmlFor} className="text-sm font-semibold tracking-wide text-gray-700">
        {text}
    </label>
}