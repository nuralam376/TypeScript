"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    takeTest() {
        this.walk();
        console.log("Taking a test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
class Principal extends Person {
    get fullName() {
        return "Principal " + super.fullName;
    }
}
function printNames(persons) {
    for (let person of persons) {
        console.log(person.fullName);
    }
}
printNames([
    new Student(1, "Abc", "Def"),
    new Teacher("Ghi", "JKL"),
    new Principal("John", "Smith")
]);
//# sourceMappingURL=inheritance.js.map