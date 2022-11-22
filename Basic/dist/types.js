"use strict";
var _a;
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let test = 200;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log("Hello");
    }
}
greet(null);
greet(undefined);
greet("Abc");
function getCustomer(id) {
    return id === 0 ? null : { birthDate: new Date() };
}
const customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthDate) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30
};
let phone = document.getElementById("phone");
phone.value;
function render(document) {
    if (typeof document === "string") {
        document.toLocaleLowerCase();
    }
}
function reject(message) {
    throw new Error("Rejected" + message);
}
function readFile() {
    while (true) {
    }
}
let users = [
    {
        name: 'John Smith',
        age: 30,
        occupation: 'Software engineer'
    },
    {
        name: 'Kate Müller',
        age: 28
    }
];
//# sourceMappingURL=types.js.map