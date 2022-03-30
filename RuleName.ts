import { IRule } from "./IRule";

class RuleName implements IRule {
    selfLink: RuleName  = this
    name:string = ''

    fillRule(rule: IRule): RuleName {
        return this.selfLink
    }

    applyRule(): RuleName {
        return  this.selfLink
    }

    deleteRule(rule: IRule): void {
        // this.time = null
    }

    public setTime(item: string): void{
        this.name = item        
    }

    public getName():string{
        return this.name
    }
    
}

const test = new RuleName();

test.setTime('First video')
console.log(test.applyRule())
console.log(test.getName())