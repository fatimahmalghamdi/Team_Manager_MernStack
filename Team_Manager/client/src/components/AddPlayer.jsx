import React, {useState} from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom"

function AddPlayer (props){
    const [myFlag, setMyFlag] = useState(true);
    const history= useHistory();
    const [player, setPlayer] = useState({
        player_name: "",
        preffered_position: "",
        games: {
            game1: {name: "game_1", status: "undecided"},
            game2: {name: "game_2", status: "undecided"},
            game3: {name: "game_3", status: "undecided"}
        }
    });
    const [createdSuccess, setCreatedSuccess] = useState(false);
    const [theErrors, setTheErrors] = useState([]);

    function handleChange(event){
        setPlayer({...player,[event.target.name]: event.target.value});
        const thePrpertyName = event.target.name;
        console.log(thePrpertyName);


        if (thePrpertyName == "player_name" && event.target.value.length > 3){
            setMyFlag(false);
        }
        if (thePrpertyName == "player_name" && event.target.value.length < 3){
            setMyFlag(true);
        }
    }

    function handleSubmit (event){
        event.preventDefault();
        setCreatedSuccess(false);
        setTheErrors([]);

        axios.post("http://localhost:8000/api/players/new", player)
                .then(res => {
                    console.log(res);
                    setCreatedSuccess(true);
                })
                .catch(err => {
                    console.log(err.response.data.error.message);
                    const mydata = err.response.data;
                    const errorMessages = [];
                    if ("error" in mydata){
                        errorMessages.push(mydata.error.message); 
                        }
                    setTheErrors(errorMessages);
                })
    }

    return(
        <div>
            <div style={{display: "flex", justifyContent: "center", backgroundColor: "lightgray"}}>
                <div style={{margin: "15px"}}>
                    <h5><Link to={"/"}>List</Link></h5>
                </div>
                <div style={{margin: "15px"}}>
                    <h5><Link to={"/games/"+1}>Manage Players Status</Link></h5>
                </div>
            </div>
            {theErrors.map((err,index) => 
                (<div style={{color: "red"}} key={index}>Error: {err}</div>)
            )}
            
            {createdSuccess && <div style={{color: "green"}}> The Author has been added successfully</div>}

            <form onSubmit={handleSubmit} style={{width: "400px", margin: "auto"}}>

            <div className="form-outline mb-4">
                <label className="form-label">Player Name: </label>
                <input type="text" name="player_name" className="form-control" value={player.player_name} onChange={handleChange} />
            </div>

            <div className="form-outline mb-4">
                <label className="form-label">Preffered position: </label>
                <input type="text" name="preffered_position" className="form-control" value={player.preffered_position} onChange={handleChange} />
            </div>
            <div>
                <button className="btn btn-primary mx-2" disabled={myFlag}>Add</button>
            </div>
            </form>
        </div>
    );


}

export default AddPlayer;