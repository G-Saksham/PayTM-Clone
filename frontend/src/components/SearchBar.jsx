export function SearchBar ({placeholder, onChange}) {
    return <div className="px-4 my-4">
        <input onChange = {onChange} className="border-4 w-full p-2 px-4 rounded-full" type="text" placeholder={placeholder} ></input>
    </div>
}