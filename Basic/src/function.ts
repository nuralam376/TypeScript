function calculateTax(income: number, taxYear: number = 2022): number {
    if(taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}

console.log(calculateTax(10_000));

// Objects
let employee : {
    readonly id : number,
    name? : string,
    retire: (date: Date) => void
} = {
    id : 1,
    // name : "",
    retire: (date : Date) => {
        console.log("date ", date);
    }
};
employee.name = "Abc";
// employee.id = 0;
