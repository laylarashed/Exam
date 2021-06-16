import React, { useState } from 'react';
import axios from 'axios';

const LoginAndRegstration = props => {
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const [fNameError, setFNameError] = useState("")
    const [lNameError, setLNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    // const [cPasswordError, setCPasswordError] = useState("")


    const fNameHandler = e => {
        setFName(e.target.value)
        if(e.target.value.length < 8 && e.target.value.length > 3 && e.target.value.length !== 0){
            setFNameError("The First Name must be at least 3 characters long")
        }else{
            setFNameError("")
        }
    }

    const lNameHandler = e => {
        setLName(e.target.value)
        if(e.target.value.length < 8 && e.target.value.length > 3 && e.target.value.length !== 0){
            setLNameError("The Last Name must be at least 3 characters long")
        }else{
            setLNameError("")
        }
    }
    
    const passwordHander = e => {
        setPassword(e.target.value)
        if(e.target.value.length < 18 && e.target.value.length > 8 && e.target.value.length !== 0){
            setPasswordError("The First Name must be at least 8 characters long")
        }else{
            setPasswordError("")
        }
    }

    // const cPasswordHandler = e => {
    //     setCPassword(e.target.value)
    //     if(e.target.value.length < 8 && e.target.value.length > 3 && e.target.value.length !== 0){
    //         setCPasswordError("The First Name must be at least 3 characters long")
    //     }else{
    //         setCPasswordError("")
    //     }
    // }


    const emailHandler = e => {
        setEmail(e.target.value)
        if(e.target.value.length < 50 && e.target.value.length > 8 && e.target.value.length !== 0){
            setEmailError("The Emaile must be at least 8 characters long")
        }else{
            setEmailError("")
        }
    }


    const registerHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pirate", {fName, lName, email, password})
            .then(res => s)
    }



    return(
        <div>
            <h1>Welcome to Pirate Crew</h1>
            <div>
                <h1>Register</h1>
                <form onSubmit={registerHandler}>
                    <div>
                        <label>First Name:</label>
                        <input type="text" onChange={fNameHandler} placeholder="Enter your First Name" />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" onChange={lNameHandler} placeholder="Enter your Last Name" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="text" onChange={emailHandler} placeholder="Enter you Email" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" onChange={passwordHander} placeholder="Enter you Password" />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type="password" onChange={cPasswordHandler} placeholder="Enter you Password" />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
            <div>
                <h1>Login</h1>
                <form>
                    <div>
                        <label>Email:</label>
                        <input type="text" onChange={} placeholder="Enter your Email" />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="Password" onChange={} placeholder="Enter your password" />
                    </div>
                    <button type="submit">Login</button>
                </form>

            </div>

        </div>
    )
}

export default LoginAndRegstration;