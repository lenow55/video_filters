import {IRuleBuilder} from "./IRuleBuilder"
class VideoRuleBuilder implements IRuleBuilder
{
    private RuleArray: IRule[] = [];
    public addRuleTime(time: string): void //GOTO тут необходимо прояснить
                           //с типами
    {
        this.RuleArray.push(new RuleTime())
        console.log("addRuleTime");
    }
    public addRuleDate(date: string): void
    {
        this.RuleArray.push(new RuleDate())
        console.log("addRuleDate");
    }
    public addRuleName(name: string): void
    {
        this.RuleArray.push(new RuleName())
        console.log("addRuleName");
    }
    public addRuleTag(tags: string[]): void
    {
        this.RuleArray.push(new RuleTag())
        console.log("addRuleTag");
    }
    public getRules(): IRule[]
    {
        console.log("getRules");
        return this.RuleArray;
    }
}