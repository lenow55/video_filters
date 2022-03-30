export interface IRule {
    fillRule(rule: IRule): any //Заполнить
    applyRule(): any //Применить
    // deleteRule(rule: IRule):void//Удалить правило
}