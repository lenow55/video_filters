import { IRule } from "./IRule";

class RuleDate implements IRule {
    selfLink: RuleDate  = this
    date: string
    fillRule(rule: IRule): RuleDate {
        return this.selfLink
    }
    
    applyRule(): RuleDate {
        return  this.selfLink
    }

    deleteRule(rule: IRule): void {
        // this.time = null
    }

    public setDate(item: string): void{
        this.date = item
    }

    public getDate():string{
        return this.date
    }
    Date
}

let Test = new RuleDate();

Test.setDate(Date())

console.log(Test.applyRule())
console.log(Test.getDate())