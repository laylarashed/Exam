import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const LoginForm = props => {
    const {formHandler, initialEmail, initialPassword} = props


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


        // console.log(name);
        useEffect(() => {
            setEmail(initialEmail)
            setPassword(initialPassword)
            // console.log(setFName)
        },[initialEmail, initialPassword])

    return(
        <div>
            <div>
                <form onSubmit={e => {formHandler (e, {email, password} )}}>
                    <div className="form-group m-3">
                        <label className="p-2">Email:</label>
                        <input type="text" onChange={e => setEmail(e.target.value)} value={email} placeholder="Enter you Email" />
                    </div>
                    <div className="form-group m-3">
                        <label className="p-2">Password</label>
                        <input type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Enter you Password" />
                    </div>
                    <button className="btn btn-primary m-2 buttom" type="submit">Login</button>
                </form>
            </div>

        </div>
    )
}

export default LoginForm;