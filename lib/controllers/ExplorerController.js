const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");
require('dotenv').config()
const TelegramBot = require("node-telegram-bot-api");

const explorers = Reader.readJsonFile("lib/data/explorers.json");

class ExplorerController {

    static getExplorerByMission(mission) {
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getAmountOfExplorersByMission(mission) {
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static getFizzbuz(number) {
        return FizzbuzzService.applyValidationInNumber(number);
    }

    static applyFizzbuzBotTelegram() {
        const token = process.env.tokenTelegram;
        const bot = new TelegramBot(token, { polling: true });

        bot.onText(/\/echo (.+)/, (msg, match) => {
            const chatId = msg.chat.id;
            const resp = match[1];
            bot.sendMessage(chatId, resp);
        });

        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const message = msg.text;
            const numberToApplyFb = parseInt(msg.text);

            const responseBot = {}
            responseBot[[true, false]] = 'Es un número válido';
            responseBot[[false, true]] = 'Misiones';
            responseBot[[false, false]] = 'Ninguna opción';
            const response = responseBot[[!isNaN(parseInt(msg.text)), message === 'node' || message === 'java']];
            if (response === 'Es un número válido') {
                const fizzbuzzTrick = this.getFizzbuz(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } else if (response === 'Misiones') {
                const explorers = this.getExplorersUsernamesByMission(message);
                const responseBot = `Mision: ${message} \nExplorers: ${explorers}`;
                bot.sendMessage(chatId, responseBot);
            } else {
                bot.sendMessage(chatId, "Envía un número para Fizzbuzz o una misión para obtener los explorers de node o java");
            }
        });
    }

}

module.exports = ExplorerController;

