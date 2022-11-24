class NumberKeyValuePair {
    constructor(public key : number, public value: string) {}
}

class StringKeyValuePair {
    constructor(public key: string, public value: string) {}
}

const pair = new NumberKeyValuePair(1, "Abc");
const pair2 = new StringKeyValuePair("2", "Def");

class KeyValuePair<TKey, TValue> {
    constructor(public key : TKey, public value: TValue) {}

    static wrapInArray<T>(value: T) {
        return [value];
    }
}


const pair3 = new KeyValuePair<number, string>(1, "Abc");
const pair4 = new KeyValuePair("1", "Def");
KeyValuePair.wrapInArray("1");
KeyValuePair.wrapInArray(1);


interface Result<T> {
    data: T | null,
    error: string | null
}

function fetch<T>(url: string) : Result<T> {
    console.log(url);
    return {data: null, error: null };
}

interface Users {
    name: string;
}

interface Product {
    title: string;
}

fetch<Users>("url");
fetch<Product>("url");

function echo<T>(value: T): T {
    return value;
}

function echo2<T extends string | number>(value: T): T {
    return value;
}

echo("a");
echo(1);
// echo2({ name : "a"});
echo2(1);

interface Person {

}

interface Person2 {
    name: string
}

function echo3<T extends Person2>(value : T) : T {
    return value;
}

echo3({name : "Abc"});

class People {
    constructor(public name: string) {}
}

class Customers extends People {

}

function echo4<T extends People>(value : T) : T {
    return value;
}

echo4(new People("Abc"));
echo4(new Customers("Def"));