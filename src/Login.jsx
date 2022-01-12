import React, { useState } from "react";
import Aside from "./Aside.jsx"
import validator from 'validator'
import "./login.css"
const Login = () => {
    const [emailmessage, setEmailMessage] = useState("")
    const [emailValidatorVariable, setEmailValidatorVariable] = useState("");
    const OnChangeEventHandler = (event) => {
        if (event.target.type === "email") {
            setEmailValidatorVariable(event.target.value);
            return;
        }
    }
    const validate = (event) => {
        console.log(emailValidatorVariable, "mail")
        if (!validator.isEmail(emailValidatorVariable)) {
            setEmailMessage("Enter valid email")
            event.preventDefault();
        }
        else {
            setEmailMessage("")
        }

    }
    return (
        <>
            <div className="login">
                <Aside></Aside>
                <div>
                    <form className="loginForm" onSubmit={validate} action="" method="get">
                        <span>{emailmessage}</span>
                        <br></br>
                        <input type="email" placeholder="Email" onChange={OnChangeEventHandler} required></input>
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
export default Login;