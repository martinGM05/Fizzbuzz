const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("explorers.json");
// console.log(explorers)


const explorersNode = ExplorerService.filterByMission(explorers, "node");
console.log(explorersNode);

const explorersAmount = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
console.log(explorersAmount);

const userNameExplorersByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log(userNameExplorersByMission);

const explorer1 = {name: "Explorer1", score: 1};
const result1 = FizzbuzzService.applyValidationInExplorer(explorer1);
console.log(result1);

const explorer3 = {name: "Explorer3", score: 3};
const result2 = FizzbuzzService.applyValidationInExplorer(explorer3);
console.log(result2);

const explorer5 = {name: "Explorer5", score: 5};
const result3 = FizzbuzzService.applyValidationInExplorer(explorer5);
console.log(result3);

const explorer15 = {name: "Explorer15", score: 15};
const result4 = FizzbuzzService.applyValidationInExplorer(explorer15);
console.log(result4);