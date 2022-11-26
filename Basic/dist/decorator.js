"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
        original.call(this, "Hi");
        console.log("After");
    };
}
class Persons {
    say(message) {
        console.log(`Person says ${message}`);
    }
}
__decorate([
    Log
], Persons.prototype, "say", null);
const persons = new Persons();
persons.say("Hello");
//# sourceMappingURL=decorator.js.map