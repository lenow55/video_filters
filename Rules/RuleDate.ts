import { IRule } from "./IRule";

export class RuleDate implements IRule {
    selfLink: RuleDate  = this
    date: Date
    fillRule(rule: IRule): RuleDate {
        return this.selfLink
    }
    
    applyRule(): RuleDate {
        return  this.selfLink
    }

    deleteRule(rule: IRule): void {
        // this.time = null
    }

    public setDate(item: Date): void{
        this.date = item
    }

    public getDate():Date{
        return this.date
    }
}

// let Test = new RuleDate();

// Test.setDate(new Date())

// console.log(Test.applyRule())
// console.log(Test.getDate())