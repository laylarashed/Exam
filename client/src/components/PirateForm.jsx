// import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PirateForm = props => {
  
    const {formHandler, initialName, initialUrl, initialTreasure, initialPirate, 
        initialCrews, initialEyePatch, initialPegleg, initialHookHand} = props

    const [name, setName] = useState(initialName) 
    const [url, setUrl] = useState(initialUrl)
    const [treasure, setTreasure] = useState(initialTreasure)
    const [pirate, setPirate] = useState(initialPirate)
    const [crews, setCrews] = useState(initialCrews)
    const [pegleg, setPegleg] = useState(true)
    const [eyePatch, setEyePatch] = useState(false)
    const [hookHand, setHookHand] = useState(false)

    // const crews = ["Enter your crew", "Captain", "First male", "Quater Master", "Beatswain", "Powder Monkey" ]


        // console.log(name);
        useEffect(() => {
            setName(initialName);
            setUrl(initialUrl)
            setTreasure(initialTreasure)
            setPirate(initialPirate)
            setCrews(initialCrews)
            setPegleg(initialPegleg)
            setEyePatch(initialEyePatch)
            setHookHand(initialHookHand)
            // console.log(setFName)
            // console.log(initialCrews)
            // console.log(setCrews)
        },[initialName, initialUrl, initialTreasure, initialPirate, initialCrews, initialPegleg, 
        initialEyePatch, initialHookHand])
                        // console.log(initialCrews)

    const peglegHandler = e => {
        // setPegleg(!pegleg)
        setPegleg(e.target.checked)
        console.log(pegleg)
    }

    const eyePatchHandler = e => {
        // setEyePatch(!eyePatch)
        setEyePatch(e.target.checked)
        console.log(eyePatch)
    }

    const hookHandHandler = e => {
        // setHookHand(!hookHand)
        setHookHand(e.target.checked)
        console.log(hookHand)
    }

    const crewHandler = e => {
        console.log(crews)
        console.log(e.target.value)
        console.log("world")
        setCrews(e.target.value)
        console.log(crews)
    }


    return(
        <div>
            <form onSubmit={e => {formHandler (e, {name, url, treasure, pirate, crews, pegleg, eyePatch, hookHand} )}}>
                <div className="width">
                        <p className="form-group m-3">
                            <label className="p-2">Pirate Name:</label>
                            <input type="text" onChange={e => setName(e.target.value)} value={name} />
                        </p>


                        <div className="form-group m-3">
                            <label className="p-2">Image Url:</label>
                            <input type="text" onChange={e => setUrl(e.target.value)} value={url} />
                        </div>

                        <div className="form-group m-3">
                            <label className="p-2">of treasur Chests:</label>
                            <input type="number" onChange={e => setTreasure(e.target.value)} value={treasure} />
                        </div>
                        
                        <div className="form-group m-3">
                            <label className="p-2">Pirate:</label>
                            <input type="text" onChange={e => setPirate(e.target.value)} value={pirate} />
                        </div>

                        <div className="form-group m-3">
                            <label foe="crew" className="p-2">Crew Position:</label>

                            {/* <select name="crew" id="crew" className="input-group-text" onChange={crewHandler} >
                                {crews.map((crew, idx) => {
                                    return(
                                    <option value={crew} key={idx} name="crew" id="crew">{crew}</option>
                                )})}
                            </select>  */}

                            

                                    <select name="crew" id="crew" className="input-group-text" onChange={crewHandler} >
                                        <option value="Captain" name="Captain" id="crew">Captain</option>
                                        <option value="First male" name="First male" id="crew">First male</option>
                                        <option value="Quater Master" name="Quater Master" id="crew">Quater Master</option>
                                        <option value="Beatswain"  name="Beatswain" id="crew">Beatswain</option>
                                        <option value="Powder Monkey"  name="Powder Monkey" id="crew">Powder Monkey</option>
                                    </select>

                            {/* <label className="d-inline m-2">Crew :</label>
                            <select className="input-group-text d-inline m-2 select" onChange={crewHandler}>
                                { crews.map((oneCrew, id) => (
                                    <option value={oneCrew} key={id}>{oneCrew}</option>
                                ))}
                            </select> */}
                            </div>
                          

                        <div className="form-group m-3">
                            <input type="checkbox" checked={pegleg} name="crew" onChange={peglegHandler} />
                            <label className="p-2">Peg Leg</label>
                        </div>

                        <div className="form-group m-3">
                            <input type="checkbox" checked={eyePatch} name="eyePatch" onChange={eyePatchHandler}  />
                            <label  className="p-2">Eye Patch:</label>
                        </div>

                        <div className="form-group m-3">
                            <input type="checkbox" checked={hookHand} name="hookHand" onChange={hookHandHandler} />
                            <label  className="p-2">Hook Hand:</label>
                        </div>

                        <br />
                        <button className="btn btn-primary m-2 buttom" type="submit">Add Pirate</button>
                </div>
            </form>
           
        </div>

       
    )
}
export default PirateForm;


