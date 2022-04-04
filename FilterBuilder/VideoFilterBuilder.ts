import * as IFilterBuilders from "./IFilterBuilder"
import * as RuleHeaders from "../Rules/IRule"
import {VideoFilter} from "../Filters/VideoFilter"

class VideoRuleBuilder implements IFilterBuilders.IFilterCustomBuilder
{
    private videoFilter: VideoFilter
    private addRuleTime(time: string): void //GOTO тут необходимо прояснить
                           //с типами
    {
        const rule: RuleHeaders.RuleTime = new RuleHeaders.RuleTime()
        rule.setTime(time)
        this.videoFilter.setRule(rule)
        console.log("addRuleTime");
    }
    private addRuleDate(date: Date): void
    {
        const rule: RuleHeaders.RuleDate = new RuleHeaders.RuleDate()
        rule.setDate(date)
        this.videoFilter.setRule(rule)
        console.log("addRuleDate");
    }
    private addRuleName(name: string): void
    {
        const rule: RuleHeaders.RuleName = new RuleHeaders.RuleName()
        rule.setName(name)
        this.videoFilter.setRule(rule)
        console.log("addRuleName");
    }
    private addRuleTag(tags: string[]): void
    {
        const rule: RuleHeaders.RuleTag = new RuleHeaders.RuleTag()
        rule.addTag(tags)
        this.videoFilter.setRule(new RuleHeaders.RuleTag())
        console.log("addRuleTag");
    }

    //Public======================================
    public build(config: string): VideoFilter {
        console.log("build VideoFilter")
        this.videoFilter = new VideoFilter()
        this.addRuleTag(["tag"])
        this.addRuleDate(new Date())
        this.addRuleName("Name")
        this.addRuleTime("Time")
        return this.videoFilter
    }
}