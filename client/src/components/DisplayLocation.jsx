import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import style from '../style/style.css'

const DisplayLocation = ({id}) => {
    const [Onepirate, setOnePirate] = useState([{}])
    const [pegLeg, setPegLeg] = useState(false)
    const [eyePatch, setEyePatch] = useState(false)
    const [hookHand, setHookHand] = useState(true)


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirate/${id}`)
            .then(res => setOnePirate(res.data))
            .catch(err => console.log(err))
    }, [id, Onepirate])

    const peglegHandler = e => {
        axios.put(`http://localhost:8000/api/pirate/${id}`, {pegLeg})
            .then(res => {
                setPegLeg(!pegLeg)
                navigate(`/pirate/${id}`)
            })
            .catch(err => console.log(err))
    }

    const eyePatchHandler = e => {
        axios.put(`http://localhost:8000/api/pirate/${id}`, {eyePatch})
            .then(res => {
                setEyePatch(!eyePatch)
                navigate(`/pirate/${id}`)
            })
            .catch(err => console.log(err))
    }

    const hookHandHandler = e => {
        axios.put(`http://localhost:8000/api/pirate/${id}`, {hookHand})
            .then(res => {
                console.log(hookHand)
                setHookHand(!hookHand)
                console.log(hookHand)
                navigate(`/pirate/${id}`)
            })
            .catch(err => console.log(err))
    }


    return(
        <div className="center">
            <h1 className="brown">{Onepirate.url}</h1>
            <button className="btn btn-primary m-2" onClick={e => navigate("/pirates")}>Back to DashBoard</button>
            <h1>{Onepirate.pirate}</h1>
            <div>
                <div>
                    <div></div>
                    <h4>Shaver me timbers</h4>
                </div>
            </div>
            <div>
                <h6>About</h6>
                <p>Position: {Onepirate.crew}</p>
                <p>Treasures: {Onepirate.treasure}</p>
                <p>Peg Leg: {Onepirate.pegleg}</p> <button className="btn btn-primary m-2" onClick={peglegHandler}>{pegLeg ? "Yes" : "No"}</button>
                <p>Eye Patch: {Onepirate.eyePatch}</p> <button  className="btn btn-primary m-2" onClick={eyePatchHandler}>{eyePatch ? "Yes" : "No"}</button>
                <p>Hook Hand: {Onepirate.hookHand}</p> <button className="btn btn-primary m-2" onClick={hookHandHandler}>{hookHand ? "Yes" : "No"}</button>
            </div>
        </div>
    )
}

export default DisplayLocation;