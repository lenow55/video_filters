import { IRule } from "./IRule";

export class RuleName implements IRule {
    private selfLink: RuleName  = this
    private name:string

    fillRule(rule: IRule): RuleName {
        return this.selfLink
    }

    applyRule(): RuleName {
        return  this.selfLink
    }

    deleteRule(rule: IRule): void {
        // this.time = null
    }
    
    constructor(n: string){
        this.name = n;
    }

    public setName(item: string = ''): void{
        this.name = item        
    }

    public getName():string{
        return this.name
    }
    
}

// const test = new RuleName();

// test.setTime('First video')
// console.log(test.applyRule())
// console.log(test.getName())