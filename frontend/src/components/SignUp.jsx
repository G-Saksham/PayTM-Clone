import { Heading } from "./Heading"
import { SubHeading } from "./SunHeading"
import { InputBox } from "./InputBox"
import { Button } from "./Button"
import { BottomWarning } from "./BottomWarning"

export default function SignUp () {
    return (<div className="bg-slate-50 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
        <div className="grid justify-center rounded-lg shadow-xl bg-white p-4 h-max"> 
            <Heading label = {"Sign up"}/>
            <SubHeading label = {"Enter your information to create an account"} />
            <InputBox type = {"text"} placeholder = {"John"} label = {"First Name"} />
            <InputBox type = {"text"} placeholder = {"Doe"} label = {"Last Name"} />
            <InputBox type = {"email"} placeholder = {"johndoe@gmail.com"} label = {"Email"} />
            <InputBox type = {"password"} placeholder = {"********"} label = {"Password"} />
            <Button onClick={() => {alert("button clicked")}} label={"Sign Up"}/>
            <BottomWarning label={"Already have an account?"} underline={"Sign In"}/>
        </div>
        </div>
    </div>)
}