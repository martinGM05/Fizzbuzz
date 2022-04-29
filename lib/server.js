const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorerInMission = ExplorerController.getExplorerByMission(mission);
    response.json(explorerInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const amountOfExplorers = ExplorerController.getAmountOfExplorersByMission(mission);
    response.json({
        mission,
        quantity: amountOfExplorers
    });
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsernames = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({
        mission,
        explorers: explorersUsernames
    });
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const trick = ExplorerController.getFizzbuz(score);
    response.status(200).json({ score, trick });
});

app.listen(port, () => {
    console.log(`Fizzbuz server is running in ${port}`);
});