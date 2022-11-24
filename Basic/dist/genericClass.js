"use strict";
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
class CompressableStore extends Store {
    compress() { }
}
class SearchAbleProduct extends Store {
    findProduct(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
class CategoryStore extends Store {
    findCategory(category) {
        console.log(category);
        return [];
    }
}
const store = new Store();
store.add({ name: "Abc", price: 20 });
console.log(store.find("name", "Abc"));
//# sourceMappingURL=genericClass.js.map