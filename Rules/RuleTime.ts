import { IRule } from "./IRule";

export class RuleTime implements IRule {
    selfLink: RuleTime  = this
    time: Number = 0

    fillRule(rule: IRule): RuleTime {
        return this.selfLink
    }

    applyRule(): RuleTime {
        return  this.selfLink
    }

    deleteRule(rule: IRule): void {
        // this.time = null
    }

    public setTime(item: string): void{
        // let item: string = ''
        
        do{
            console.log("Выберите дату загрузки")
            console.log("1. За последний час")
            console.log("2. Сегондя")
            console.log("3. За эту неделю")
            console.log("4. За этот месяц")
            console.log("5. За этот год")
            console.log("6. Выйти")
                switch(item) {
                    case '1':
                        this.time = 1
                        item = '6'
                    break;
                    case '2':
                        this.time = 24
                        item = '6'
                    break;
                    case '3':
                        this.time = 168
                        item = '6'
                    break;
                    case '4':
                        this.time = 720
                        item = '6'
                    case '5':
                        this.time = 8760
                        item = '6'
                    break;
                        
                  default:
                    console.log('Invalid answer!');
                }
        } while (item != '6')
    }

    getTime():Number{
        return this.time
    }
    
}

const test = new RuleTime();

test.setTime('1')
console.log(test.applyRule())
