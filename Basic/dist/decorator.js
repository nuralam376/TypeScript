"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
class Component2 {
    insertInDoM() { }
}
function Component(selector) {
    return (component) => {
        console.log("Component decorator called");
        component.prototype.options = selector;
        component.prototype.uniqueId = Date.now();
        component.prototype.insertInDom = () => {
            console.log("Inserting in DOM");
        };
    };
}
function Pipe(constructor) {
    console.log("Pipe decorator called");
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent extends Component2 {
};
ProfileComponent = __decorate([
    Component({ selector: "#profile" }),
    Pipe
], ProfileComponent);
function Log(target, methodName, descriptor) {
    let original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return (typeof result === "string") ? result.toUpperCase() : result;
    };
}
class Persons {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    say(message) {
        console.log(`Person says ${message}`);
    }
    get FullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Log
], Persons.prototype, "say", null);
__decorate([
    Capitalize
], Persons.prototype, "FullName", null);
const persons = new Persons("Abc", "Def");
persons.say("Hello");
console.log(persons.FullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length) {
                    throw new Error(`${propertyName} should be at least ${length} long`);
                }
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class Users {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], Users.prototype, "password", void 0);
const newUser = new Users("12345");
console.log(newUser.password);
let watchedParameters = [];
function Watch(target, propertyName, propertyIndex) {
    watchedParameters.push({
        propertyName,
        propertyIndex
    });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
const vehicle = new Vehicle();
console.log(watchedParameters);
//# sourceMappingURL=decorator.js.map