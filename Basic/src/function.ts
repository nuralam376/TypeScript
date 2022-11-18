function calculateTax(income: number, taxYear: number = 2022): number {
    if(taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

console.log(calculateTax(10_000));


// Type Aliases
type Employee = {
    readonly id: number;
    name? : string;
    retire: (date: Date) => void;
}

// Objects
let employee : Employee = {
    id : 1,
    // name : "",
    retire: (date : Date) => {
        console.log("date ", date);
    }
};
employee.name = "Abc";
// employee.id = 0;
