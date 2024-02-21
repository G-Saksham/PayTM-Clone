export function BottomWarning ({label , underline, onClick}) {
    return <div className="flex justify-center py-2 text-sm">
        {label}
        <div onClick={onClick} className="underline hover:text-blue-500 cursor-pointer pl-1">{underline}</div>
    </div>
}