class FizzbuzzService {
    static applyValidationInExplorer(explorer) {
        const validation = {};
        validation[[true, true]] = "FIZZBUZZ";
        validation[[true, false]] = "FIZZ";
        validation[[false, true]] = "BUZZ";
        validation[[false, false]] = explorer.score;
        explorer.trick = validation[[explorer.score % 3 === 0, explorer.score % 5 === 0]];
        return explorer;
    }

    static applyValidationInNumber(number){
        const validation = {};
        validation[[true, true]] = "FIZZBUZZ";
        validation[[true, false]] = "FIZZ";
        validation[[false, true]] = "BUZZ";
        validation[[false, false]] = number;
        return validation[[number % 3 === 0, number % 5 === 0]];
    }
}

module.exports = FizzbuzzService;