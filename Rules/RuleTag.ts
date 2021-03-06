import { IRule } from "./IRule";

export class RuleTag implements IRule {
    selfLink: RuleTag  = this
    tags:string[]
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

    constructor({ tagsArray = [] }: { tagsArray: string[]; }){
        this.tags = tagsArray.slice(0);
    }

    public addTag(items: string[]): void{ // <= old version
    //public addTag({ items }: { items: string[]; }): void{ // вроде бы при таком варианте он автоматически удалит переданный массив
        for (let index = 0; index < items.length; index++) {
            this.tags.push(items[index])
            this.size++
        }
        // you can
        this.tags = items.slice(0)
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