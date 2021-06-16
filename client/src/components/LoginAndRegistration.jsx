import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import style from '../style/style.css'

const LoginAndRegistration = props => {
    const [errors, setErrors] = useState([]);

    const registerHandler = (e, data) =>{
        e.preventDefault();
        console.log(data);

        axios.post("http://localhost:8000/api/user", data)
            .then(res => navigate("/pirates"))
            .catch(err => {
                console.log(err)
                const errRes = err.response.data.errors;
                const errArr = [];
                console.log(errRes);
                for(const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message);
                }
                setErrors(errArr);
            })
    }

    const LoginHandler = (e, data) =>{
        e.preventDefault();
        console.log(data);

        axios.post("http://localhost:8000/api/pirate", data)
            .then(res => navigate("/"))
            .catch(err => {
                console.log(err)
                const errRes = err.response.data.errors;
                const errArr = [];
                console.log(errRes);
                for(const key of Object.keys(errRes)){
                    errArr.push(errRes[key].message);
                }
                setErrors(errArr);
            })
    }

    return(
        <div>
            <h1 className="brown">Welcome to Pirate Crew.</h1>
            <div className="fflex">
             {errors.map((err, idx) => {
                return(
                    <p key={idx}>{err}</p>
                )
            })}

            <RegistrationForm 
                formHandler = {registerHandler}
                initialFName = ""
                initialLName = ""
                initialEmail = ""
                initialPassword = ""

            />

        </div>

            <LoginForm 
                formHandler = {LoginHandler}
                initialEmail = ""
                initialPassword = ""
            />

        </div>
    )
}

export default LoginAndRegistration;