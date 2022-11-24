"use strict";
class NumberKeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
class StringKeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
const pair = new NumberKeyValuePair(1, "Abc");
const pair2 = new StringKeyValuePair("2", "Def");
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    static wrapInArray(value) {
        return [value];
    }
}
const pair3 = new KeyValuePair(1, "Abc");
const pair4 = new KeyValuePair("1", "Def");
KeyValuePair.wrapInArray("1");
KeyValuePair.wrapInArray(1);
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
fetch("url");
fetch("url");
function echo(value) {
    return value;
}
function echo2(value) {
    return value;
}
echo("a");
echo(1);
echo2(1);
function echo3(value) {
    return value;
}
echo3({ name: "Abc" });
class People {
    constructor(name) {
        this.name = name;
    }
}
class Customers extends People {
}
function echo4(value) {
    return value;
}
echo4(new People("Abc"));
echo4(new Customers("Def"));
//# sourceMappingURL=generic.js.map