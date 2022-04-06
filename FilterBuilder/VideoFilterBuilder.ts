import * as IFilterBuilder from "./IFilterBuilder"
import * as RuleHeaders from "../Rules/IRule"
import {VideoFilter} from "../Filters/VideoFilter"

export class VideoFilterBuilder implements IFilterBuilder.IFilterCustomBuilder
{
    constructor(){
        return this
    }
    private videoFilter: VideoFilter
    private addRuleTime(time: number): void //GOTO тут необходимо прояснить
                           //с типами
    {
        this.videoFilter.setRule(new RuleHeaders.RuleTime(time));
        console.log("addRuleTime");
    }
    private addRuleDate(date: Date): void
    {
        this.videoFilter.setRule(new RuleHeaders.RuleDate(date));
        console.log("addRuleDate");
    }
    private addRuleName(name: string): void
    {
        this.videoFilter.setRule(new RuleHeaders.RuleName(name));
        console.log("addRuleName");
    }
    private addRuleTag(tags: string[]): void
    {
        this.videoFilter.setRule(new RuleHeaders.RuleTag({tagsArray: tags}));
        console.log("addRuleTag");
    }

    //Public======================================
    public build(config: string): VideoFilter {
        console.log("build VideoFilter")
        this.videoFilter = new VideoFilter()
        this.addRuleTag(["tag"])
        this.addRuleDate(new Date())
        this.addRuleName("Name")
        this.addRuleTime(1000)
        return this.videoFilter
    }
}