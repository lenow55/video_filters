export interface IRuleBuilder
{
    addRuleTime(time: string): void;
    addRuleDate(date): void;
    addRuleName(name: string): void;
    addRuleTag(tags: string[]): void;
    getRules(): IRule[];
}
