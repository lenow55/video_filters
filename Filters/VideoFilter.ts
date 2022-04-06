import { Filter } from "./Filter";
import { IRule } from "../Rules/IRule";

export class VideoFilter extends Filter {
    getFilterString() {
        this.linksRule.forEach( (rule: IRule) => {
            console.log(rule)
        });
    }
}
