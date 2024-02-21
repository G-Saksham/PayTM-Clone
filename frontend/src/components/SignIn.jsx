import { Heading } from "./Heading"
import { SubHeading } from "./SunHeading"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { BottomWarning } from "./BottomWarning"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import {emailAtom, passwordAtom} from '../store/atoms/UserData'
import axios from 'axios'

export default function SignIn () {
    const [email, setEmail] = useRecoilState(emailAtom);
    const [password, setPassword] = useRecoilState(passwordAtom)
    const navigate = useNavigate();
    
    let timer;

    return (<div className="bg-slate-50 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="grid justify-center rounded-lg shadow-xl bg-white p-4 h-max"> 
            <Heading label = {"Sign In"}/>
            <SubHeading label = {"Enter your credentials to access your account"} />
            <InputBox type = {"email"} placeholder = {"johndoe@gmail.com"} label = {"Email"} onChange={(e) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    setEmail(e.target.value);
                },1000)
                }} />
            <InputBox type = {"password"} placeholder = {"********"} label = {"Password"} onChange={(e) => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    setPassword(e.target.value);
                },800)
                }} />
            <Button onClick={async () => {
                const getData = {
                    username: email,
                    password: password,
                }
                try{
                    const fetchCall = await axios.post("http://localhost:3000/api/v1/user/signin", 
                        getData, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                    );
                    localStorage.setItem("auth", `Bearer ${fetchCall.data.token}`)
                    navigate('/dashboard');
                }
                catch(error) {
                    alert(error.response.data.msg);
                }
            }} label={"Sign In"}/>
            <BottomWarning label={"Don't have an account?"} underline={"Sign Up"} onClick={() => {navigate('/signup')}}/>
        </div>
        </div>
    </div>)
}