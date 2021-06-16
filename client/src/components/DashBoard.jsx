import { Link, navigate } from '@reach/router';
import axios from 'axios';
import React, { useState ,useEffect } from 'react';
import style from '../style/style.css'


const DashBoard = props => {
    const [pirates, setPirates] = useState([{}])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate")
            .then(res => setPirates(res.data))
            .catch(err => console.log(err))
    }, [pirates])


    const delHandler = e => {
        axios.delete(`http://localhost:8000/api/pirate/${e.target.id}`)
            .then(res => {
                console.log(res.data)
            })
            .then(err => console.log(err))
            navigate("/pirates")
    }


    return(
        <div>
            <div className="ccenter">
                <span></span>
                <h1 className="brown">Pirate Crew</h1>
                <button className="right"><Link to="/pirate/new">Add Pirate</Link></button>
            </div>
            <div>
                <div className="ccenter">
                    {pirates.sort((pirate,index) => (pirate.name.toLowerCase() > index.name.toLowerCase()) ? 1 : -1).map((pirateMan, idx) => {
                        return(
                            <div>
                                <span className="squire"></span>
                                <span className="yellows">
                                    <h5>{pirateMan.name}</h5>
                                    <button><Link to={`/pirate/${pirateMan._id}`}>View Pirate</Link></button>
                                    <button onClick={delHandler} id={pirateMan._id}>Walk the Plank</button>
                                </span>


                            </div>
                        )
                    })}
                     
                </div>
            </div>




        </div>
    )
}

export default DashBoard;