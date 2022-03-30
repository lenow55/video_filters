import {IRuleBuilder} from "./IRuleBuilder"
import * as RuleHeaders from "../Rules/IRule"

class VideoRuleBuilder implements IRuleBuilder
{
    private RuleArray: RuleHeaders.IRule[] = [];
    public addRuleTime(time: string): void //GOTO тут необходимо прояснить
                           //с типами
    {
        this.RuleArray.push(new RuleHeaders.RuleTime())
        console.log("addRuleTime");
    }
    public addRuleDate(date: string): void
    {
        this.RuleArray.push(new RuleHeaders.RuleDate())
        console.log("addRuleDate");
    }
    public addRuleName(name: string): void
    {
        this.RuleArray.push(new RuleHeaders.RuleName())
        console.log("addRuleName");
    }
    public addRuleTag(tags: string[]): void
    {
        this.RuleArray.push(new RuleHeaders.RuleTag())
        console.log("addRuleTag");
    }
    public getRules(): RuleHeaders.IRule[]
    {
        console.log("getRules");
        return this.RuleArray;
    }
}