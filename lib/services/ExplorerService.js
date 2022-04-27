class ExplorerService {

    static filterByMission(explorers, mission){
        return explorers.filter((explorer) => explorer.mission == mission);
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const newExplorers =  explorers.filter((explorer) => explorer.mission == mission);
        return explorers.length
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
    }
}

module.exports = ExplorerService