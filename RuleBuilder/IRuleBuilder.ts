import * as RuleHeaders from "../Rules/IRule"
export interface IRuleBuilder
{
    addRuleTime(time: string): void;
    addRuleDate(date): void;
    addRuleName(name: string): void;
    addRuleTag(tags: string[]): void;
    getRules(): RuleHeaders.IRule[];
}

//продумать 