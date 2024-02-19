export function Header ({label, data, logo}) {
    return <div className="flex justify-between p-2 pb-0 border-b-2">
        <div className="font-bold text-3xl p-2">{label}</div>
        <div className={"flex justify-center p-2"}>
            <div className="p-2 px-2 text-lg">{data}</div>
            <div className="flex flex-row justify-center border-1 p-2 h-10 w-10 rounded-full text-white bg-gray-400 font-bold text-lg">{logo}</div>
        </div>
    </div>
}