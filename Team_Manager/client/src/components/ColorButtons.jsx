import {useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function ColorButton(props){
    const { singlePlayer, status, game_no, myFlag, setMyFlag} = props;
    // const theStatus = "";

    useEffect(() => {
    
},[myFlag])

function handleClick(event, player){
    const udatePlayer = player;
    if(game_no == 1){
        const updateGames = event.target.value;
        udatePlayer.games.game1.status = updateGames;
    }
    else if(game_no == 2){
        const updateGames = event.target.value;
        udatePlayer.games.game2.status = updateGames;
    }
    else{
        const updateGames = event.target.value;
        udatePlayer.games.game3.status = updateGames;
    }

    axios.put("http://localhost:8000/api/players/update/"+player._id, udatePlayer)
                .then(res => {
                    setMyFlag(!myFlag);
                    console.log(res.data)
                })
                .catch(err => console.log(err))
}


    return(
        <div>
            {status == "Playing" ? 
            (<div>
                <button className="btn btn-success mx-2" value="Playing" onClick={(event) => 
                    handleClick(event, singlePlayer)}>Playing</button>
                <button className="btn btn-outline-secondary mx-2" value="Not Playing" onClick={(event) => 
                    handleClick(event, singlePlayer)}>Not Playing</button>
                <button className="btn btn-outline-secondary mx-2" value="Undecided" onClick={(event) => 
                handleClick(event, singlePlayer)}>Undecided</button>
            </div>) : status == "Not Playing" ? 

            (<div>
            <button className="btn btn-outline-secondary mx-2" value="Playing" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Playing</button>
            <button className="btn btn-danger mx-2" value="Not Playing" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Not Playing</button>
            <button className="btn btn-outline-secondary mx-2" value="Undecided" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Undecided</button>
            </div>) : 

            (<div>
            <button className="btn btn-outline-secondary mx-2" value="Playing" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Playing</button>
            <button className="btn btn-outline-secondary mx-2" value="Not Playing" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Not Playing</button>
            <button className="btn btn-warning mx-2" value="Undecided" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Undecided</button>
            </div>)}

        </div>


    );

}

export default ColorButton;