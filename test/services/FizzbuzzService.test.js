const FizzbuzzService = require("../../lib/services/FizzbuzzService");


describe("Test fonr FizzbuzzService", () => {
    test("Request 1: Apply Validation In Explorer 1", () => {
        const explorer1 = { name: "Explorer1", score: 1 };
        const result1 = FizzbuzzService.applyValidationInExplorer(explorer1); // {name: "Explorer1", score: 1, trick: 1} 
        expect(result1).toEqual({ name: "Explorer1", score: 1, trick: 1 });
    });
    test("Request 1: Apply Validation In Explorer 3", () => {
        const explorer3 = { name: "Explorer3", score: 3 };
        const result2 = FizzbuzzService.applyValidationInExplorer(explorer3); // {name: "Explorer3", score: 3, trick: "FIZZ"}
        expect(result2).toEqual({name: "Explorer3", score: 3, trick: "FIZZ"});
    });
    test("Request 1: Apply Validation In Explorer 5", () => {
        const explorer5 = { name: "Explorer5", score: 5 };
        const result3 = FizzbuzzService.applyValidationInExplorer(explorer5); // {name: "Explorer5", score: 5, trick: "BUZZ"}
        expect(result3).toEqual({name: "Explorer5", score: 5, trick: "BUZZ"});
    });
    test("Request 1: Apply Validation In Explorer 15", () => {
        const explorer15 = { name: "Explorer15", score: 15 };
        const result4 = FizzbuzzService.applyValidationInExplorer(explorer15); // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}
        expect(result4).toEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"});

    });
});