interface RuleBuilder
{
    addRuleTime(tim: time): void; //GOTO тут необходимо прояснить
                           //с типами
    addRuleDate(date): void;
    addRuleName(name: string): void;
    addRuleTag(tags: tag[]): void;
    getRules(): Rule[];
}

class VideoRuleBuilder implements RuleBuilder
{
    private RuleArray: Rule[];
    public addRuleTime(tim: time): void //GOTO тут необходимо прояснить
                           //с типами
    {
        console.log("addRuleTime");
    }
    public addRuleDate(date): void
    {
        console.log("addRuleDate");
    }
    public addRuleName(name: string): void
    {
        console.log("addRuleName");
    }
    public addRuleTag(tags: tag[]): void
    {
        console.log("addRuleTag");
    }
    public getRules(): Rule[]
    {
        console.log("getRules");
        return this.RuleArray;
    }
}