import * as IFilterBuilders from "./IFilterBuilder"
import * as RuleHeaders from "../Rules/IRule"
import {VideoFilter} from "../Filters/VideoFilter"

class VideoRuleBuilder implements IFilterBuilders.IFilterCustomBuilder
{
    private videoFilter: VideoFilter
    private addRuleTime(time: string): void //GOTO тут необходимо прояснить
                           //с типами
    {
        this.videoFilter.setRule(new RuleHeaders.RuleTime())
        console.log("addRuleTime");
    }
    private addRuleDate(date: string): void
    {
        this.videoFilter.setRule(new RuleHeaders.RuleDate())
        console.log("addRuleDate");
    }
    private addRuleName(name: string): void
    {
        this.videoFilter.setRule(new RuleHeaders.RuleName())
        console.log("addRuleName");
    }
    private addRuleTag(tags: string[]): void
    {
        this.videoFilter.setRule(new RuleHeaders.RuleTag())
        console.log("addRuleTag");
    }

    //Public======================================
    public build(config: string): VideoFilter {
        console.log("build VideoFilter")
        this.videoFilter = new VideoFilter()
        this.addRuleTag(["tag"])
        this.addRuleDate("date")
        this.addRuleName("Name")
        this.addRuleTime("Time")
        return this.videoFilter
    }
}