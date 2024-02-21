export function SubHeader ({label, data}) {
    return <div className="flex p-4 font-bold text-xl pb-0">
        <div className = "px-1" >{label}</div>
        <div className = "px-1 ">{data}</div>
    </div>
}