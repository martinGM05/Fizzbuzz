const Reader = require("../../lib/utils/Reader");

describe("Tests for ExplorerService", () => {
    test("Request 1: Read data", () => {
        const explorers = Reader.readJsonFile("test/data/explorer.test.json");
        expect(explorers).not.toBeNull();
    });
});