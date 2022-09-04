const TeamManagerController = require("../controllers/teamManager.controller")

function registerTeamManagerRoutes(app)
{
    app.get("/api/players", TeamManagerController.getallPlayers)
    app.post("/api/players/new", TeamManagerController.addnewPlayer)
    app.get("/api/players/game/:gm_no", TeamManagerController.getPlayerByGameName)
    app.put("/api/players/update/:player_id", TeamManagerController.updatePlayerById)
    app.delete("/api/players/delete/:player_id", TeamManagerController.deleteplayerById)
}

module.exports = registerTeamManagerRoutes