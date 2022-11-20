// Type Intersection
let weight: number & string;

type Draggable = {
    drag: () => void;
};

type Resizable = {
    resize: () => void;
};

type UiWidget = Draggable & Resizable;

let textBox: UiWidget = {
    drag: () => {},
    resize: () => {}
};

// Literal Value
type Quantity = 50 | 100;

let quantity: Quantity = 100;

type metric = "cm" | "m";

let test: 50 | 200 = 200

// Nullable Types
function greet(name: string | null | undefined) {
    if(name) {
        console.log(name.toUpperCase());
    } else {
        console.log("Hello");
    }
}

greet(null);
greet(undefined);
greet("Abc");

// Optional Chaining
type Customer = {
    birthDate: Date
};

function getCustomer(id: number) : Customer | null | undefined{
    return id === 0 ? null : {birthDate : new Date()}
}

const customer = getCustomer(0);
// if(customer !== null && customer !== undefined)
// Options property access operator
console.log(customer?.birthDate?.getFullYear());

// Optional element access operator
// customer?.[0]

// Optional Call
let log: any = null;

log?.("a");

// Nullish Coalescing Operator
let speed : number | null = null;

let ride = {
    // speed: speed || 30
    // speed: speed !== null ? speed : 30
    speed : speed ?? 30
};

// Type Assertion
// let phone = document.getElementById("phone") as HTMLInputElement;

let phone = <HTMLInputElement> document.getElementById("phone");
phone.value;

// Unknown Type
function render(document : unknown) {
    if(typeof document === "string") {
        document.toLocaleLowerCase();
    }
    // if(document instanceof WordDocument)
    // document.move();
    // document.toggle();
}

// Never

function reject(message: string) : never {
    throw new Error("Rejected" + message);
}

// reject("Hello");

function readFile(): never {
    while(true) {

    }
}

// readFile();
// console.log("Never");

// 
type User = {
    name : string;
    age: number;
    occupation?: string
};

let users : User[] = [  
    {
        name:'John Smith',
        age:30,
        occupation:'Software engineer'
    },  
    {
        name:'Kate Müller',
        age:28
    }
];

type Bird = {
    fly: () => void;
};

type Fish = {
    swim: () => void;
};

type Pet = Bird | Fish;