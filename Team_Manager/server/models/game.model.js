const mongoose = require("mongoose")

const GameSchema = mongoose.Schema({
    game_name: String,
    player_details: [
        {player_name: String, status: String}
    ]
})

const Game = mongoose.model("Game", GameSchema);

module.exports = Game; 