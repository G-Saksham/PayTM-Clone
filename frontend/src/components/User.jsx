import { Button } from "./Button"

export function User ({logo, data, onClick}) {
    return <div className="flex justify-between pl-4 border-b p-2 pr-0">
        <div className="flex justify-center p-1 pt-5">
            <div className="flex flex-rows-1 justify-center border-2 p-2 h-10 w-10 rounded-full text-white bg-gray-400 font-bold hover:bg-black">{logo}</div>
            <div className="font-bold p-2 px-2 text-lg">{data}</div>
        </div>
        <div className="">
            <Button onClick={onClick} custom='px-8 m-0' label = "Send Money" />
        </div>
    </div>
}