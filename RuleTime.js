"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
class RuleTime {
    constructor() {
        this.selfLink = this;
        this.time = 0;
    }
    fillRule(rule) {
        return this.selfLink;
    }
    applyRule() {
        return this.selfLink;
    }
    deleteRule(rule) {
        // this.time = null
    }
    setTime(item) {
        // let item: string = ''
        let rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        do {
            console.log("Выберите дату загрузки");
            console.log("1. За последний час");
            console.log("2. Сегондя");
            console.log("3. За эту неделю");
            console.log("4. За этот месяц");
            console.log("5. За этот год");
            console.log("6. Выйти");
            switch (item) {
                case '1':
                    this.time = 1;
                    item = '6';
                    break;
                case '2':
                    this.time = 24;
                    item = '6';
                    break;
                case '3':
                    this.time = 168;
                    item = '6';
                    break;
                case '4':
                    this.time = 720;
                    item = '6';
                case '5':
                    this.time = 8760;
                    item = '6';
                    break;
                default:
                    console.log('Invalid answer!');
            }
        } while (item != '6');
    }
    getTime() {
        return this.time;
    }
}
const test = new RuleTime();
test.setTime('1');
console.log(test.applyRule());
