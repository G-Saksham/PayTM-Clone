export function Button ({label, onClick, custom}) {
    return <button onClick={onClick} className={"text-white text-lg bg-blue-500 p-2 mx-16 mt-4 m-1 rounded-full hover:bg-black " + `${custom}`}>
        {label}
    </button>
}

// export function Button({label, onClick}) {
//     return <button onClick={onClick} type="button" class=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
// }