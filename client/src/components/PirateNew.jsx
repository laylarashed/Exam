import React from 'react';


const PirateNew = props => {
     const [name, setName] = useState(initialName) 
    const [url, setUrl] = useState(initialUrl)
    const [treasure, setTreasure] = useState(initialTreasure)
    const [pirate, setPirate] = useState(initialPirate)
    const [crews, setCrews] = useState("")
    const [pegleg, setPegleg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)

    const[onePirate, setOnePirate] ={
        
    }


    const formHandler = e => {
        e.preventDefault();
        thisPirate ={
            name,
            url,
            treasur,
            pirate,
            crews,
            eyePatch,
            hookHand
        }
        axios.post("http://localhost:8000/api/pirate", thisPirate)
            .then(res => ser)
    }


    return(
        <div>
            <form onSubmit={formHandler}>
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

                            {/* <select name="crew" id="crew" className="input-group-text" onChange={e => setCrews(e.target.value)} >
                                {crews.map((crew, idx) => {
                                    return(
                                    <option value={crew} key={idx} name="crew" id="crew">{crew}</option>
                                )})}
                            </select>  */}

                            

                                    {/* <select name="crew" id="crew" className="input-group-text" onChange={e => setCrews(e.target.value)} >
                                       
                                        <option value="Captain" name="crew" id="crew">Captain</option>
                                        <option value="First male" name="crew" id="crew">First male</option>
                                        <option value="Quater Master" name="crew" id="crew">Quater Master</option>
                                        <option value="Beatswain"  name="crew" id="crew">Beatswain</option>
                                        <option value="Powder Monkey"  name="crew" id="crew">Powder Monkey</option>
                                           
                                    </select> */}

                            <label className="d-inline m-2">Search For :</label>
                            <select className="input-group-text d-inline m-2 select" onChange={e => setCrews(e.target.value)}>
                                { crews.map((oneCrew, id) => (
                                    <option value={oneCrew} key={id}>{oneCrew}</option>
                                ))}
                            </select>
                            </div>
                          

                        <div className="form-group m-3">
                            <input type="checkbox" checked={pegleg} name="crew" onChange={peglegHandler} />
                            <label for="crew" className="p-2">Peg Leg</label>
                        </div>

                        <div className="form-group m-3">
                            <input type="checkbox" checked={eyePatch} name="eyePatch" onChange={eyePatchHandler}  />
                            <label for="eyePatch" className="p-2">Eye Patch:</label>
                        </div>

                        <div className="form-group m-3">
                            <input type="checkbox" checked={hookHand} name="hookHand" onChange={hookHandHandler} />
                            <label for="hookHand" className="p-2">Hook Hand:</label>
                        </div>

                        <br />
                        <button className="btn btn-primary m-2 buttom" type="submit">Add Pirate</button>
                </div>
            </form>
        </div>
    )
}

export default PirateNew;