export default function AuthLayout({children}:Readonly<{children:React.ReactNode}>){
    return <div className="w-full h-screen bg-gray-200 flex items-center justify-center">
        {children}
    </div>
}