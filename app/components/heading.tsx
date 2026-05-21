type HeadingProps={
    text:string
}
export default function Heading({text}:HeadingProps){
    return <h1 className="text-xl text-gray-900 font-bold tracking-tight">
        {text}
    </h1>
}