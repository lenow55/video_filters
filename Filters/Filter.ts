import { IRule } from "../Rules/IRule";
import { RuleDate } from "../Rules/RuleDate";
import { RuleName } from "../Rules/RuleName";

export class Filter
{
    private linksRule: IRule[];

    public setRule({ rule }: { rule: IRule; }): void{
        this.linksRule.push(rule);
    }

    checkRules(content: any): boolean{
        if (this.linksRule.length === 0){
            return false;
        }
        else if (this.linksRule.filter(content)){
            return true;
        }
    }
}

// const ruleN = new RuleName();
// ruleN.setName('First video')

// let filt = new Filter();
// let ruleD = new RuleDate();
// let date = new Date();
// ruleD.setDate(date);

// filt.setRule(ruleD);
// filt.setRule(ruleN);

// console.log(filt.checkRules(ruleD))