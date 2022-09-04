const mongoose = require("mongoose")

const PlayerSchema = mongoose.Schema({
    player_name: {
        type: String,
        minLength: [4, "The length should be more than 4 char"],
        required: true
    },
    preffered_position: String,
    games: {
        game1: {name: String, status: String},
        game2: {name: String, status: String},
        game3: {name: String, status: String}

    }
})

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player; 