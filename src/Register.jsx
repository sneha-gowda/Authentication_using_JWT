import React,{useState} from "react";
import "./register.css";
import Aside from "./Aside.jsx"
import validator from 'validator'
const Register=()=>{
    const [emailmessage,setEmailMessage]=useState("")
    const [phonemessage, setPhoneMessage] = useState("")
    const [emailValidatorVariable, setEmailValidatorVariable]=useState("");
    const [phoneValidatorVariable,setPhoneValidatorVariable]=useState("");
    const OnChangeEventHandler=(event)=>{
        if(event.target.type==="email"){
            setEmailValidatorVariable(event.target.value);
            return;
        }
        console.log(event.target.type)
        if(event.target.type==="number"){
            setPhoneValidatorVariable(event.target.value);
            // console.log(phoneValidatorVariable)
        }
    }
    const validate=(event)=>{
        console.log(phoneValidatorVariable,"phone")
        console.log(emailValidatorVariable,"mail")
        if(!validator.isEmail(emailValidatorVariable)){
            setEmailMessage("Enter valid email")
            event.preventDefault();
        }
        else{
            setEmailMessage("")
        }
        if (!validator.isMobilePhone(phoneValidatorVariable)){
            setPhoneMessage("Enter valid phone number")
            console.log("2hg")
            event.preventDefault();
        }
        else{
            setPhoneMessage("")
        }

    }
    return(
        <>
            <div className="register">
                <Aside></Aside>
                <div>
                    <form className="registerForm" onSubmit={validate} action="" method="post">
                        <span>{emailmessage}</span>
                        <br></br>
                        <input type="email" placeholder="Email" onChange={OnChangeEventHandler} required></input>
                        <br></br>
                        <span>{phonemessage}</span>
                        <br></br>
                        <input type="number" placeholder="Phone" onChange={OnChangeEventHandler} required></input>
                        <br></br>
                        <br></br>
                        <input type="password" placeholder="Password" required minLength="8"></input>
                        <br></br>
                        
                        <button type="submit" className="registerFormSubmit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;