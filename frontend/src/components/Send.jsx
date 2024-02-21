import { Heading } from "./Heading"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { FriendName } from "./FriendName"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

export default function Send () {
    const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
    const to = localStorage.getItem('to');
    let amount;
    let timer;
    const navigate = useNavigate();

    return (<div className="bg-slate-50 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="grid justify-center rounded-lg shadow-xl bg-white p-4 h-max"> 
            <Heading label = {"Send Money"}/>
            <FriendName data={firstName + " " + lastName} logo={firstName[0]+lastName[0]} />
            <InputBox type = {"number"} placeholder = {"Enter amount"} label = {"Amount (in Rs)"} onChange={(e) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    amount = e.target.value || 0;
                },1000)
            }} />
            <Button custom={" bg-green-500 px-12"} label={"Initiate Transfer"} onClick={async () => {
                const toUser = {
                    to: to,
                    amount: amount,
                };
                const auth = localStorage.getItem('auth')
                try{
                    const apiCall = await axios.post('http://localhost:3000/api/v1/account/transfer',
                    toUser, {
                    headers: {
                        'authorization': auth,
                        'Content-Type': 'application/json',
                    }})
                    alert(apiCall.data.msg);
                    navigate('/dashboard');
                }
                catch(error) {
                    alert(error.response.data.msg);
                } 
            }} />
        </div>
        </div>
    </div>)
}