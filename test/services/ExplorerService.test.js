const Reader = require('../../lib/utils/Reader')
const ExplorerService = require('../../lib/services/ExplorerService')

const explorers = Reader.readJsonFile("explorers.json")

describe("Tests for ExplorerService", () => {
    test("Request 1: Filter by mission", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode).not.toBeNull();
    })

    test("Requests 2: Get Amount Of Explorers By Mission", () => {
        const explorersAmount = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersAmount).toBe(10)
    })

    test("Request 3: Get Explorers Usernames By Mission", () => {
        const userNameExplorersByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(userNameExplorersByMission).toEqual([
            'ajolonauta1',
            'ajolonauta2',
            'ajolonauta3',
            'ajolonauta4',
            'ajolonauta5',
            'ajolonauta11',
            'ajolonauta12',
            'ajolonauta13',
            'ajolonauta14',
            'ajolonauta15'
        ])
    })
})