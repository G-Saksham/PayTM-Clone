export function InputBox({label, placeholder, type}) {
    return <div>
        <div className = "text-sm font-medium text-left py-2">
            {label}
        </div>
        <div>
            <input className = "w-full px-2 py-1 border rounded-md font-light border-slate-200" type={type} placeholder={placeholder}/>
        </div>
    </div>
}