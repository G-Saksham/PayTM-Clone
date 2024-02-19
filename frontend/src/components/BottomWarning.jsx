export function BottomWarning ({label , underline}) {
    return <div className="flex justify-center py-2 text-sm">
        {label}
        <div className="underline hover:text-blue-500 cursor-pointer pl-1">{underline}</div>
    </div>
}