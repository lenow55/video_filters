import * as IFilterBuilders from "./IFilterBuilder"
import * as RuleHeaders from "../Rules/IRule"
import {VideoFilter} from "../Filters/VideoFilter"

class VideoRuleBuilder implements IFilterBuilders.IFilterCustomBuilder
{
    private videoFilter: VideoFilter
    // private addRuleTime(time: string): void //GOTO тут необходимо прояснить
    //                        //с типами
    // {
    //     this.RuleArray.push(new RuleHeaders.RuleTime())
    //     console.log("addRuleTime");
    // }
    // private addRuleDate(date: string): void
    // {
    //     this.RuleArray.push(new RuleHeaders.RuleDate())
    //     console.log("addRuleDate");
    // }
    // private addRuleName(name: string): void
    // {
    //     this.RuleArray.push(new RuleHeaders.RuleName())
    //     console.log("addRuleName");
    // }
    // private addRuleTag(tags: string[]): void
    // {
    //     this.RuleArray.push(new RuleHeaders.RuleTag())
    //     console.log("addRuleTag");
    // }
    // private getRules(): RuleHeaders.IRule[]
    // {
    //     console.log("getRules");
    //     return this.RuleArray;
    // }

    //Public======================================
    public build(config: string): VideoFilter {
        console.log("build VideoFilter")
        this.videoFilter = new VideoFilter()
        return this.videoFilter
    }
}