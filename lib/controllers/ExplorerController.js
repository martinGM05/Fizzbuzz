const ExplorerService = require('../services/ExplorerService')
const Reader  = require('../utils/Reader')

class ExplorerController {
    static getExplorerByMission(mission){
        const explorers = Reader.readJsonFile("lib/data/explorers.json")
        return ExplorerService.filterByMission(explorers, mission)
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("lib/data/explorers.json")
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission)
    }

    static getAmountOfExplorersByMission(mission){
        const explorers = Reader.readJsonFile("lib/data/explorers.json")
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission)
    }
}

module.exports = ExplorerController

