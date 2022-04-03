import { getSystemErrorMap } from "util"

enum System {
    Linux = 0,
    Window = 1,
    MacOs = 2,
}

type FirstType = {
    prop1: string,
    prop2: boolean,
}

type SecondType = {
    prop1: typeof undefined,
    prop2: () => Date,
}

type ThirdType = {
    prop1: string,
    prop2: boolean,
    prop3: System,
}

const obj1: FirstType = {
    prop1: 'Привет, Илья!',
    prop2: false,
}

const obj2: FirstType = {
    prop1: 'Привет, Миша!',
    prop2: true,
}

const obj3: FirstType = {
    prop1: 'Привет, мир!',
    prop2: true,
}


const obj4: SecondType = {
    prop1: undefined,
    prop2: () => {
        return new Date()
    },
}

const obj5: SecondType = {
    prop1: undefined,
    prop2: () => {
        return new Date(2021, 3, 1)
    },
}

const obj6: ThirdType = {
    prop1: 'Cats',
    prop2: true,
    prop3: System.Linux,
}

const obj7: ThirdType = {
    prop1: 'Dogs',
    prop2: true,
    prop3: System.MacOs
}

const array: Array<FirstType | SecondType | ThirdType> = [obj1, obj2, obj3, obj4, obj5, obj6, obj7]

function filter(array: Array<FirstType | SecondType | ThirdType>, type: string){
    array.filter(x => {
        let size = Object.keys(x).length
        if (type === 'FirstType')
            return size === 2 && typeof x.prop2 === 'boolean'
        if (type === 'SecondType')
            return typeof x.prop2 === 'function'
        if (type === 'ThirdType')
            return size === 3
        return false
    })
}

filter(array, 'FirstType')
filter(array, 'SecondType')
filter(array, 'ThirdType')

