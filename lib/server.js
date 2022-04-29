const ExplorerController = require("./controllers/ExplorerController");
const express = require('express')

const app = express()
app.use(express.json())

const port = 3000

app.get('/v1/explorers/:mission', (request, response) => {
    const mission = request.params.mission;
    const explorerInMission = ExplorerController.getExplorerByMission(mission);
    response.json(explorerInMission)
})

app.get('/v1/explorers/amount/:mission', (request, response) => {
    const mission = request.params.mission;
    const amountOfExplorers = ExplorerController.getAmountOfExplorersByMission(mission);
    response.json({
        mission,
        quantity: amountOfExplorers
    })
})

app.listen(port, () => {
    console.log(`Fizzbuz server is running in ${port}`)
})