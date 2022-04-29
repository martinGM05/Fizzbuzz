const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test for ExplorerController", () => {
    test("Request 1: Search explorers by mission by parameters", () => {
        const explorerInJava = ExplorerController.getExplorerByMission("java");
        expect(explorerInJava.length).not.toBe(0);
    });

    test("Request 2: Get username of eplorers by mission", () => {
        const usernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(usernames.length).not.toBe(0);
    });

    test("Request 3: Get amount of eplorers by mission", () => {
        const usernames = ExplorerController.getAmountOfExplorersByMission("node");
        expect(usernames).not.toBe(0);
    });
});