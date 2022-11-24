class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    protected walk() {
        console.log("Walking");
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string) {
        super(firstName, lastName);
    }

    takeTest() {
        this.walk();
        console.log("Taking a test");
    }
}

class Teacher extends Person {
    override get fullName() {
        return "Professor " + super.fullName;
    }
}

class Principal extends Person {
    override get fullName() {
        return "Principal " + super.fullName;
    }
}

// const teacher = new Teacher("Abc", "Def");
// console.log(teacher.fullName);


function printNames(persons : Person[])  {
    for(let person of persons) {
        console.log(person.fullName);
    }
}

printNames([
    new Student(1, "Abc", "Def"),
    new Teacher("Ghi", "JKL"),
    new Principal("John", "Smith")
]);