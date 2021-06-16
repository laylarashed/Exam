// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from '../style/style.css'

const RegistrationForm = props => {
  
    const {formHandler, initialFName, initialLName, initialEmail, initialPassword} = props

    const [fName, setFName] = useState("") 
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const [fNameError, setFNameError] = useState("") //*
    const [lNameError, setLNameError] = useState("") //*
    const [emailError, setEmailError] = useState("") //*
    const [passwordError, setPasswordError] = useState("") //*
    const [cPasswordError, setCPasswordError] = useState("")


   
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

    const cPasswordHandler = e => {
        setCPassword(e.target.value)
        if(e.target.value.length < 8 && e.target.value.length > 3 && e.target.value.length !== 0){
            setCPasswordError("The First Name must be at least 3 characters long")
        }else{
            setCPasswordError("")
        }
    }


    const emailHandler = e => {
        setEmail(e.target.value)
        if(e.target.value.length < 50 && e.target.value.length > 8 && e.target.value.length !== 0){
            setEmailError("The Emaile must be at least 8 characters long")
        }else{
            setEmailError("")
        }
    }


        // console.log(name);
        useEffect(() => {
            setFName(initialFName);
            setLName(initialLName)
            setEmail(initialEmail)
            setPassword(initialPassword)
            // console.log(setFName)
        },[initialFName, initialLName, initialEmail, initialPassword])

    return(
        <div >
            <form onSubmit={e => {formHandler (e, {fName, lName, email, password} )}}>
                <div className="width">
                        <p className="form-group m-3">
                            <label className="p-2">First Name:</label>
                            <input type="text" onChange={fNameHandler} value={fName} placeholder="Enter your First Name" />
                            <p>{fNameError}</p>
                        </p>

                        <div className="form-group m-3">
                            <label className="p-2">Last Name:</label>
                            <input type="text" onChange={lNameHandler} value={lName} placeholder="Enter your Last Name" />
                            <p>{lNameError}</p>
                        </div>

                        <div className="form-group m-3">
                            <label className="p-2">Email:</label>
                            <input type="text" onChange={emailHandler} value={email} placeholder="Enter you Email" />
                            <p>{emailError}</p>
                        </div>

                        <div className="form-group m-3">
                            <label className="p-2">Password</label>
                            <input type="password" onChange={passwordHander} value={password} placeholder="Enter you Password" />
                            <p>{passwordError}</p>
                        </div>

                        <div className="form-group m-3">
                            <label className="p-2">Confirm Password:</label>
                            <input type="password" onChange={cPasswordHandler} value={cPassword} placeholder="Enter you Password" />
                            <p>{cPasswordError}</p>
                        </div>

                        <br />
                        <button className="btn btn-primary m-2 buttom" type="submit">Regiter</button>
                </div>
            </form>
           
        </div>

       
    )
}
export default RegistrationForm;


