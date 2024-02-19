import { Heading } from "./Heading"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { FriendName } from "./FriendName"

export default function Send () {
    return (<div className="bg-slate-50 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="grid justify-center rounded-lg shadow-xl bg-white p-4 h-max"> 
            <Heading label = {"Send Money"}/>
            <FriendName data={"Friend's Name"} logo={"A"} />
            <InputBox type = {"number"} placeholder = {"Enter amount"} label = {"Amount (in Rs)"} />
            <Button custom={" bg-green-500 px-12"} onClick={() => {alert("button clicked")}} label={"Initiate Transfer"}/>
        </div>
        </div>
    </div>)
}