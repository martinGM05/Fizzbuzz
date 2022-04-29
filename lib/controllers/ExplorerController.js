const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader  = require("../utils/Reader");

class ExplorerController {
    static getExplorerByMission(mission){
        const explorers = Reader.readJsonFile("lib/data/explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("lib/data/explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getAmountOfExplorersByMission(mission){
        const explorers = Reader.readJsonFile("lib/data/explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getFizzbuz(number){
        return FizzbuzzService.applyValidationInNumber(number);
    }
}

module.exports = ExplorerController;

