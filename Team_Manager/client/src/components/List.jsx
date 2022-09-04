import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


function List (props){
    const history = useHistory();
    const [playersList, setPlayersList] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
        .then(res => setPlayersList(res.data.players))
        .catch(err => console.log(err))
    },[])

function handledelete(player_id){

    confirmAlert({
        title: 'Alert',
        message: 'Are you sure to delete?',
        buttons: [
        {
            label: 'Yes',
            onClick: () => {
                axios.delete("http://localhost:8000/api/players/delete/"+player_id)
                    .then(res => { setPlayersList(playersList.filter((u) => u._id !== player_id));})
            }
        },
        {
            label: 'No',
            onClick: () => null
        }
        ]
    });
    
}


return (
    <div style={{ margin: "auto", width: "700px", marginTop: "30px"}}>
        <h3>All Players</h3>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div style={{margin: "15px"}}>
                <h5><Link to={"/new"}>Add Player</Link></h5>
            </div>
            <div style={{margin: "15px"}}>
                <h5><Link to={"/games/"+1}>Manage Players Status</Link></h5>
            </div>
        </div>

        <table width= "100%" className="table">
            <thead className="table-dark">
                <tr>
                    <td>Player Name</td>
                    <td>preffered position</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {playersList.map((player,i) => (
                    <tr key={player._id}>
                        <td>{player.player_name}</td>
                        <td>{player.preffered_position}</td>
                        <td>
                            <button className="btn btn-danger mx-2" onClick={() => handledelete(player._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

}

export default List;