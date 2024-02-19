import { Heading } from "./Heading"
import { SubHeading } from "./SunHeading"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { BottomWarning } from "./BottomWarning"

export default function SignIn () {
    return (<div className="bg-slate-50 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="grid justify-center rounded-lg shadow-xl bg-white p-4 h-max"> 
            <Heading label = {"Sign In"}/>
            <SubHeading label = {"Enter your credentials to access your account"} />
            <InputBox type = {"email"} placeholder = {"johndoe@gmail.com"} label = {"Email"} />
            <InputBox type = {"password"} placeholder = {"********"} label = {"Password"} />
            <Button onClick={() => {alert("button clicked")}} label={"Sign In"}/>
            <BottomWarning label={"Don't have an account?"} underline={"Sign Up"}/>
        </div>
        </div>
    </div>)
}