class Account {
    // readonly id: number;
    // owner: string;
    // private _balance: number;
    name?: string;

    constructor(public readonly id: number, public owner: string, private _balance: number) {
        // this.id = id;
        // this.owner = owner;
        // this._balance = balance;
    }

    deposit(amount: number) : void {
        // this.id = 0;
        if(amount <= 0) {
            throw new Error("Not a valid amount")
        }
        this._balance += amount;
        this.calculateTax();
    }

    private calculateTax(): void {

    }

    getBalance(): number {
        return this._balance;
    }

    get balance(): number {
        return this._balance;
    }

    set balance(value: number) {
        if(value < 0) {
            throw new Error("Invalid value");
        }
        this._balance = value;
    }
}

let account = new Account(1, "Abc", 10000);
account.deposit(1000);
console.log(typeof account);
console.log(account instanceof Account);
// console.log(account._balance);
console.log(account.getBalance());
console.log(account.balance);
account.balance = 10;
console.log(account.balance);


class SeatAssignment {
    // Index Signature
    [seatNumber: string]: string;
}

const seat = new SeatAssignment();
seat.A1 = "Abc";
seat["A2"] = "Def";

class Ride {
    private static _activeRides: number = 0;

    start() { Ride._activeRides++; }
    stop() { Ride._activeRides--; }

    static get activeRides(): number {
      return Ride._activeRides;  
    }
}

const ride1 = new Ride();
ride1.start();

const ride2 = new Ride();
ride2.start();

// console.log(ride1.activeRides);
// console.log(ride2.activeRides);
// console.log(Ride.activeRides);
console.log(Ride.activeRides);