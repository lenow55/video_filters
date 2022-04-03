import { IRule } from "./IRule";

export class RuleTag implements IRule {
    selfLink: RuleTag  = this
    tags:string[] = []
    size:number = 0
    fillRule(rule: IRule): RuleTag {
        return this.selfLink
    }

    applyRule(): RuleTag {
        return  this.selfLink
    }

    deleteRule(rule: IRule): void {
        // this.time = null
    }

    public addTag(item: string, count: number): void{
        for (let index = 0; index < count; index++) {
            this.tags.push(item)
            this.size++
        }
    }

    public getTags():string{
        for (let index = 0; index < this.tags.length; index++) {
            return this.tags[index]
        }
    }
    
}

// let Test = new RuleTag();

// Test.addTag('First video', 3)

// console.log(Test.applyRule())
// console.log(Test.getTags())