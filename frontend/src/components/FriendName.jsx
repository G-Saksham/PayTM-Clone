export function FriendName ({data, logo}) {
    return <div className="flex justify-start p-1 py-2">
        <div className="flex flex-row justify-center border-1 p-1 h-8 w-8 rounded-full text-white bg-green-500 font-bold text-md">{logo}</div>
        <div className="text-lg font-bold p-1">{data}</div>
    </div>
}