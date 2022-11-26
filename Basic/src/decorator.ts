class Component2 {
    insertInDoM() {}
}

type ComponentOptions = {
    selector: string;
}

function Component(selector: ComponentOptions) {
    return (component : Function) => {
        console.log("Component decorator called");
        component.prototype.options = selector;
        component.prototype.uniqueId = Date.now();
        component.prototype.insertInDom = () => {
            console.log("Inserting in DOM");
        };
    }
}

// function Component(constructor: Function) {
//     console.log("Component decorator called");
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDom = () => {
//         console.log("Inserting in dom");
//     };
// }

function Pipe(constructor: Function) {
    console.log("Pipe decorator called");
    constructor.prototype.pipe = true;
}

@Component({ selector : "#profile" })
@Pipe
class ProfileComponent extends Component2{}

function Log(target: any, methodName: string, descriptor : PropertyDescriptor) {
    let original = descriptor.value as Function;

    descriptor.value = function(...args : any) {
        console.log("Before");
        // original.call(this, "Hi");
        original.call(this, ...args);
        console.log("After");
    }
}

class Persons {
    @Log
    say(message: string): void {
        console.log(`Person says ${message}`);
    }
}

const persons = new Persons();
persons.say("Hello");