interface Products {
    name: string;
    price: number;
}

class Store<T> {
    protected _objects: T[] = [];

    add(obj : T): void{
        this._objects.push(obj);
    }

    find(property: keyof T, value : unknown) : T | undefined {
        return this._objects.find(obj => obj[property] === value);
    }
}

class CompressableStore<T> extends Store<T> {
    compress() {}
}

class SearchAbleProduct<T extends {name : string}> extends Store<T> {
    findProduct(name : string): T | undefined {
        return this._objects.find(obj => obj.name === name);
    }
}

class CategoryStore extends Store<Products> {
    findCategory(category: string) : Products[] {
        console.log(category);
        return []
    }
}

const store = new Store<Products>();
store.add({ name : "Abc", price : 20});
console.log(store.find("name", "Abc"));
// store.find("none", 20);

interface NewProduct {
    name: string;
    price: number;
}

type ReadOnlyProduct = {
    readonly [k in keyof NewProduct]: NewProduct[k]
};

type ReadOnly<T> = {
    readonly [k in keyof T]: T[k]
};

type Optional<T> = {
    [k in keyof T]? : T[k]
};

type Nullable<T> = {
    [k in keyof T]: T[k]| null
}

let product: NewProduct = {
    name : "Abc",
    price: 12
};

let product2: ReadOnlyProduct = {
    name : "Def",
    price : 21
};

product.name = "Def";

// product2.name = "de";

let product3: ReadOnly<NewProduct> = {
    name : "New",
    price: 25
};

let product4: Nullable<NewProduct> = {
    name : "Test",
    price: null
};