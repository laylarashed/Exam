import React, { useState } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import PirateForm from './PirateForm';

const AddNewPirate = props => {
    const [errors, setErrors] = useState([]);

    const newPirateHndler = (e, data) =>{
        e.preventDefault();
        console.log(data);

        axios.post("http://localhost:8000/api/pirate", data)
            .then(res => navigate("/pirates"))
            .catch(err => {
                console.log(err.response)
                console.log(err.response.data.errors)
                const errRes = err.response.data.errors;
                const errArr = [];
                console.log(errRes);
                // for(const key of Object.keys(errRes)){
                //     errArr.push(errRes[key].message);
                if(errRes){
                    for(const key of Object.keys(errRes)){
                        errArr.push(errRes[key].message)
                    }
                }
                // }
                setErrors(errArr);
            })
}
    
    return(
        <div>
            <button className="btn btn-primary m-2 buttom"><Link to="/pirates">Back to Home</Link></button>
             {errors.map((err, idx) => {
                return(
                    <p key={idx}>{err}</p>
                )
            })}

            <PirateForm 
                formHandler = {newPirateHndler}
                initialName = ""
                initialUrl = ""
                initialTreasure = ""
                initialPirate = ""
                initialCrews = ""
                initialEyePatch= "" 
                initialPegleg="" 
                initialHookHand = ""
            />

        </div>
    )
}

export default AddNewPirate;