"use strict";
class RuleName {
    constructor() {
        this.selfLink = this;
        this.name = '';
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
        this.name = item;
    }
    getName() {
        return this.name;
    }
}
const test = new RuleName();
test.setTime('First video');
console.log(test.applyRule());
console.log(test.getName());
