"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Not a valid amount");
        }
        this._balance += amount;
        this.calculateTax();
    }
    calculateTax() {
    }
    getBalance() {
        return this._balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error("Invalid value");
        }
        this._balance = value;
    }
}
let account = new Account(1, "Abc", 10000);
account.deposit(1000);
console.log(typeof account);
console.log(account instanceof Account);
console.log(account.getBalance());
console.log(account.balance);
account.balance = 10;
console.log(account.balance);
class SeatAssignment {
}
const seat = new SeatAssignment();
seat.A1 = "Abc";
seat["A2"] = "Def";
class Ride {
    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
const ride1 = new Ride();
ride1.start();
const ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
//# sourceMappingURL=class.js.map