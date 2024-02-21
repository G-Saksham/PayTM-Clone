import { Heading } from "./Heading"
import { SubHeading } from "./SunHeading"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { BottomWarning } from "./BottomWarning"
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { firstNameAtom, lastNameAtom, emailAtom, passwordAtom } from "../store/atoms/UserData"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export default function SignUp () {
    const [firstName, setFirstName] = useRecoilState(firstNameAtom);
    const [lastName, setLastName] = useRecoilState(lastNameAtom);
    const [email, setEmail]= useRecoilState(emailAtom);
    const [password, setPassword] = useRecoilState(passwordAtom);
    const navigate = useNavigate();

    return (<div className="bg-slate-50 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="grid justify-center rounded-lg shadow-xl bg-white p-4 h-max"> 
            <Heading label = {"Sign up"}/>
            <SubHeading label = {"Enter your information to create an account"} />
            <InputBox type = {"text"} placeholder = {"John"} label = {"First Name"} onChange={(e) => {
                clearTimeout();
                setTimeout(() => {
                    setFirstName(e.target.value);
                },500)
                }} />
            <InputBox type = {"text"} placeholder = {"Doe"} label = {"Last Name"} onChange={(e) => {
                clearTimeout();
                setTimeout(() => {
                    setLastName(e.target.value);
                },500)
                }} />
            <InputBox type = {"email"} placeholder = {"johndoe@gmail.com"} label = {"Email"} onChange={(e) => {
                clearTimeout();
                setTimeout(() => {
                    setEmail(e.target.value);
                },1000)
                }} />
            <InputBox type = {"password"} placeholder = {"********"} label = {"Password"} onChange={(e) => {
                clearTimeout();
                setTimeout(() => {
                    setPassword(e.target.value);
                },500)
                }} />
            <Button onClick={async () => {
                const postData = {
                    firstName: firstName,
                    lastName: lastName,
                    username: email,
                    password: password,
                }
                try{
                    const fetchCall = await axios.post("http://localhost:3000/api/v1/user/signup", 
                        postData, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
                    localStorage.setItem("auth", `Bearer ${fetchCall.data.token}`)
                    navigate('/signin');
                }
                catch(error) {
                    alert(error.response.data.msg);
                }
            }} label={"Sign Up"}/>
            <BottomWarning label={"Already have an account?"} underline={"Sign In"} onClick={() => {navigate('/signin')}}/>
        </div>
        </div>
    </div>)
}