let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published : boolean = true;

let limit;

function render1(document : any) {
    console.log(document);
}


// Arrays
let numbers: number[] = [1, 2, 3];
// numbers[1] = "2";
// numbers[2]  = "21";
numbers.forEach(n => n.toFixed());


// Tuples
let numbers2: [number, string] = [1, "Name"];
// numbers2[2] = "hello";
numbers2.push("Hello");

// Enum
const Small = 1;
const Medium = 2;
const Large = 3;

const enum Size {Small = 1, Medium, Large }

const size: Size = Size.Medium;

console.log(size);
