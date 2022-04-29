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

app.listen(port, () => {
    console.log(`Fizzbuz server is running in ${port}`)
})