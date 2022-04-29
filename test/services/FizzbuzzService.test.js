const FizzbuzzService = require("../../lib/services/FizzbuzzService");


describe("1) Test for Validation in Explorer Score", () => {
    test("Request 1: Apply Validation In Explorer 1", () => {
        const explorer1 = { name: "Explorer1", score: 1 };
        const result1 = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(result1).toEqual({ name: "Explorer1", score: 1, trick: 1 });
    });
    test("Request 2: Apply Validation In Explorer 3", () => {
        const explorer3 = { name: "Explorer3", score: 3 };
        const result2 = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(result2).toEqual({ name: "Explorer3", score: 3, trick: "FIZZ" });
    });
    test("Request 3: Apply Validation In Explorer 5", () => {
        const explorer5 = { name: "Explorer5", score: 5 };
        const result3 = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(result3).toEqual({ name: "Explorer5", score: 5, trick: "BUZZ" });
    });
    test("Request 4: Apply Validation In Explorer 15", () => {
        const explorer15 = { name: "Explorer15", score: 15 };
        const result4 = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(result4).toEqual({ name: "Explorer15", score: 15, trick: "FIZZBUZZ" });
    });
});

describe("2) Test for Validation in Number", () => {
    test("Request 1: Apply when number value is 1", () => {
        const number = 1;
        const result = FizzbuzzService.applyValidationInNumber(number);
        expect(result).toBe(1);
    });
    test("Request 2: Apply when number value is 3", () => {
        const number = 3;
        const result = FizzbuzzService.applyValidationInNumber(number);
        expect(result).toBe("FIZZ");
    });
    test("Request 3: Apply when number value is 5", () => {
        const number = 5;
        const result = FizzbuzzService.applyValidationInNumber(number);
        expect(result).toBe("BUZZ");
    });
    test("Request 3: Apply when number value is 15", () => {
        const number = 15;
        const result = FizzbuzzService.applyValidationInNumber(number);
        expect(result).toBe("FIZZBUZZ");
    });
});