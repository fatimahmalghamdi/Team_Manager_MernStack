import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import ColorButton from "./ColorButtons";

function Games(props) {
    const history = useHistory();
    const [playersInGame, setPlayersInGame] = useState([]);
    const { game_no } = useParams();
    const [myFlag, setMyFlag] = useState(false);
    const [mystatus, setMystatus] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/players/game/" + game_no)
            .then(res => setPlayersInGame(res.data.players))
            .catch(err => console.log(err))
    }, [myFlag])



    // function handleClick(event, player){
    //     const udatePlayer = player;
    //     if(game_no == 1){
    //         const updateGames = event.target.value;
    //         udatePlayer.games.game1.status = updateGames;
    //     }
    //     else if(game_no == 2){
    //         const updateGames = event.target.value;
    //         udatePlayer.games.game2.status = updateGames;
    //     }
    //     else{
    //         const updateGames = event.target.value;
    //         udatePlayer.games.game3.status = updateGames;
    //     }

    //     axios.put("http://localhost:8000/api/players/update/"+player._id, udatePlayer)
    //                 .then(res => console.log(res.data))
    //                 .catch(err => console.log(err))
    // }



    // function handlevar(num, singlePlayer){
    //     console.log(singlePlayer.games.game1.status);
    //     if (num == 1){
    //         setMystatus(singlePlayer.games.game1.status);
    //     }
    //     else if (num == 2){
    //         setMystatus(singlePlayer.games.game2.status);
    //     }
    //     else{
    //         setMystatus(singlePlayer.games.game3.status);
    //     }
    // }




    return (
        <div style={{ margin: "auto", width: "700px", marginTop: "30px" }}>
            <h3>All Players in Game {game_no}</h3>
            <div style={{ margin: "15px" }}>
                <h5><Link to={"/"}>Main Page</Link></h5>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
               
                {/* <h5 style={{ margin: "15px" }}><Link onClick={()=> setMyFlag(!myFlag)} to={"/games/" + 1}>Game 1</Link></h5>
                <h5 style={{ margin: "15px" }}><Link onClick={()=> setMyFlag(!myFlag)} to={"/games/" + 2}>Game 2</Link></h5>
                <h5 style={{ margin: "15px" }}><Link onClick={()=> setMyFlag(!myFlag)} to={"/games/" + 3}>Game 3</Link></h5> */}
                <h5><a href="/games/1">Game1</a> | 
                <a href="/games/2"> Game2</a> | 
                <a href="/games/3"> Game3</a></h5>
            </div>

            <table width="100%" className="table">
                <thead className="table-dark">
                    <tr>
                        <td>Player Name</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {playersInGame.map((singlePlayer, i) => (
                        <tr key={singlePlayer._id}>
                            <td>{singlePlayer.player_name}</td>
                            <td>
                            {(game_no == 1) ?
                                (<ColorButton singlePlayer={singlePlayer} game_no={game_no} status={singlePlayer.games.game1.status} myFlag={myFlag} setMyFlag={setMyFlag}/>)

                                : (game_no == 2) ?

                                    (<ColorButton singlePlayer={singlePlayer} game_no={game_no} status={singlePlayer.games.game2.status} myFlag={myFlag} setMyFlag={setMyFlag}/>)

                                    :

                                    (<ColorButton singlePlayer={singlePlayer} game_no={game_no} status={singlePlayer.games.game3.status} myFlag={myFlag} setMyFlag={setMyFlag}/>)
                            }
                            </td>
                            {/* {(game_no == 1)? handlevar(1, singlePlayer) : 
                        (game_no == 2)? handlevar(2, singlePlayer) : 
                        (game_no == 3)? handlevar(3, singlePlayer) : null} */}

                            {/* {
                        (( mystatus == "Playing") ? 
                        (<td>
                            <button className="btn btn-success mx-2" value="Playing" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Playing</button>

                            <button className="btn btn-outline-secondary mx-2" value="Not Playing" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Not Playing</button>

                            <button className="btn btn-secondary mx-2" value="Undecided" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Undecided</button>

                        </td>)
                        : ( mystatus == "Not Playing") ? 
                        (<td>
                            <button className="btn btn-outline-secondary mx-2" value="Playing" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Playing</button>

                            <button className="btn btn-danger mx-2" value="Not Playing" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Not Playing</button>

                            <button className="btn btn-outline-secondary mx-2" value="Undecided" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Undecided</button>

                        </td>)
                        :
                        (<td>
                            <button className="btn btn-outline-secondary mx-2" value="Playing" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Playing</button>

                            <button className="btn btn-outline-secondary mx-2" value="Not Playing" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Not Playing</button>

                            <button className="btn btn-warning mx-2" value="Undecided" onClick={(event) => 
                                handleClick(event, singlePlayer)}>Undecided</button>

                        </td>))} */}


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default Games;