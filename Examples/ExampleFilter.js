"use strict";
exports.__esModule = true;
var System;
(function (System) {
    System[System["Linux"] = 0] = "Linux";
    System[System["Window"] = 1] = "Window";
    System[System["MacOs"] = 2] = "MacOs";
})(System || (System = {}));
var obj1 = {
    prop1: 'Привет, Илья!',
    prop2: false
};
var obj2 = {
    prop1: 'Привет, Миша!',
    prop2: true
};
var obj3 = {
    prop1: 'Привет, мир!',
    prop2: true
};
var obj4 = {
    prop1: undefined,
    prop2: function () {
        return new Date();
    }
};
var obj5 = {
    prop1: undefined,
    prop2: function () {
        return new Date(2021, 3, 1);
    }
};
var obj6 = {
    prop1: 'Cats',
    prop2: true,
    prop3: System.Linux
};
var obj7 = {
    prop1: 'Dogs',
    prop2: true,
    prop3: System.MacOs
};
var array = [obj1, obj2, obj3, obj4, obj5, obj6, obj7];
function filter(array, type) {
    array.filter(function (e) {
        var size = Object.keys(e).length;
        if (type === 'FirstType')
            return size === 2 && typeof e.prop2 === 'boolean';
        if (type === 'SecondType')
            return typeof e.prop2 === 'function';
        if (type === 'ThirdType')
            return size === 3;
        return false;
    });
}

console.log(filter(array, 'FirstType')) 
console.log(filter(array, 'SecondType'));
console.log(filter(array, 'ThirdType'));
