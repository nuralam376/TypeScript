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

function Capitalize(target: any, methodName : string, descriptor : PropertyDescriptor) {
    const original = descriptor.get;

    descriptor.get = function() {
        const result = original?.call(this);
        return (typeof result === "string") ? result.toUpperCase() : result;
    }
}

class Persons {
    constructor(public firstName: string, public lastName: string) {}

    @Log
    say(message: string): void {
        console.log(`Person says ${message}`);
    }

    @Capitalize
    get FullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const persons = new Persons("Abc", "Def");
persons.say("Hello");
console.log(persons.FullName);

function MinLength(length: number) {
    return (target: any, propertyName : string) => {
        let value: string;

        const descriptor: PropertyDescriptor = {
            get() {
                return value;
            },
            set(newValue: string) {
                if(newValue.length < length) {
                    throw new Error(`${propertyName} should be at least ${length} long`);
                }
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}

class Users {
    @MinLength(4)
    password: string;

    constructor(password: string) {
        this.password = password;
    }
}

const newUser = new Users("12345");
// newUser.password = "1";
console.log(newUser.password);


type WatchedParameter = {
    propertyName: string;
    propertyIndex: number;
};


let watchedParameters: WatchedParameter[] = [];

function Watch(target: any, propertyName: string, propertyIndex: number) {
    watchedParameters.push({
        propertyName,
        propertyIndex
    });
}
class Vehicle {
    move(@Watch speed : number) {}
}

const vehicle = new Vehicle();
// vehicle.move(52);
console.log(watchedParameters);