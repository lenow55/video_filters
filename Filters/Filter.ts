import { IRule } from "../Rules/IRule";
export abstract class Filter
{
    private linksRule: IRule[];
    private builder: any;
    public pushRule(rule: IRule)
    {
        this.linksRule.push(rule)
        console.log("add rule in filter FILTER")
    }
}
