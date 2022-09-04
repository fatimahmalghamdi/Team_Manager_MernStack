const Player = require("../models/player.model")
const Game = require("../models/game.model")
const { response } = require("express")

//add new player:
function addnewPlayer(req, res) {
    Player.create(req.body)
        .then(newlycreatedplayer => res.json(newlycreatedplayer))
        .catch(error => res.status(400).json({error}))
}

// //get all player:
function getallPlayers(req, res){
    Player.find()
    .then(allplayers => res.json({
        records_count: allplayers.length,
        players: allplayers
    }))
    .catch(err => res.json({errorMsg: "Faild to fetch the players data"}))
}

// //update player by id:
function updatePlayerById (req, res) {
    const { player_id } = req.params;
    Player.findOneAndUpdate({_id: player_id}, req.body)
        .then(updateplayer => res.json({player: updateplayer}))
        .catch(err => res.json({error: true, message: "Faild to update Author"}))
}

// //delete player by id:
function deleteplayerById (req, res) {
    const { player_id } = req.params;
    Player.deleteOne({_id: player_id})
        .then((result) => res.json(result))
        .catch(err => res.json({error: true, message: "Faild to delete Player"}))
}

//in the front end, will send the number (1,2,3) to back end
//number 1=>game_1, 2=>game_2, 3=>game_3
//get all player by game name :
function getPlayerByGameName(req, res){
    const { gm_no } = req.params;
    if(gm_no == 1){
        // Player.find({games:{game1:{name: "game_1"}}})
        // Player.find({games: "games.game1.name= 'game_1'"})
        Player.find({'games.game1.name': "game_1"})
        .then(theplayers => res.json({
            players: theplayers
        }))
        .catch(err => res.json({errorMsg: "Faild to fetch the Players of game 1"}))
    }
    else if(gm_no == 2){
        Player.find({'games.game2.name': "game_2"})
        .then(theplayers => res.json({
            players: theplayers
        }))
        .catch(err => res.json({errorMsg: "Faild to fetch the Players of game 2"}))
    }
    else if(gm_no == 3){
        Player.find({'games.game3.name': "game_3"})
        .then(theplayers => res.json({
            players: theplayers
        }))
        .catch(err => res.json({errorMsg: "Faild to fetch the Players of game 3"}))
    }
}


module.exports = {
    addnewPlayer,
    getallPlayers,
    updatePlayerById,
    getPlayerByGameName,
    deleteplayerById
    
}