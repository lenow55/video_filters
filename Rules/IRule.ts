export interface IRule {
    fillRule(rule: IRule): any //Заполнить
    applyRule(): any //Применить
    // deleteRule(rule: IRule):void//Удалить правило
}

export {RuleDate} from "./RuleDate";
export {RuleTime} from "./RuleTime";
export {RuleName} from "./RuleName";
export {RuleTag} from "./RuleTag";