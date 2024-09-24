/**
 * Class syntax with constructor overloaded
 */
class Automobile {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
}

let autoa = new Automobile("Octavio", "Skoda");
console.log(autoa.name + " " + autoa.brand);
console.log(autoa["name"] + " " + autoa["brand"]);
console.log(JSON.stringify(autoa));
for (const k in autoa) {
    console.log(k + " " + autoa[k]);
}
/**
 * Cars class with mutators
 */
class Cars {
    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    _brand;
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
    _engType;
    get engType() {
        return this._engType;
    }
    set engType(value) {
        this._engType = value;
    }
}
const cara = new Cars();
cara.name = "Punto";
cara.brand = "Fiat";
cara.engType = "Cessna";
console.log(cara.name + " " + cara.brand + " " + cara.engType);
console.log(JSON.stringify(cara));
for (const k in cara) {
    console.log(
        k + " " + cara[k]
    );
}
console.log(cara["name"] + " " + cara["brand"] + " " + cara["engType"]);
/***
 * Anonymous class
 */
const Person = class {
    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    _email;
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    _mobile;
    get mobile() {
        return this._mobile;
    }
    set mobile(value) {
        this._mobile = value;
    }
}
console.log("*".repeat(30));
const obja = new Person();
obja.name = "James Chaterley";
obja.email = "Auckridge@gmail.com";
obja.mobile = "9877654321";
console.log(JSON.stringify(obja));
console.log(obja.name + " " + obja.email + " " + obja.mobile);
console.log(obja["name"] + " " + obja["email"] + " " + obja["mobile"]);
for (const k in obja) {
    console.log(k + " " + obja[k]);
}
/**
 * Inheritance
 */
class A {
    constructor(id) {
        this.id = id;
    }
    funa() {
        console.log("From grand parent");
    }
}
class B extends A {
    constructor(id, name) {
        super(id);
        this.name = name;
    }
    funb() {
        console.log("From Parent");
    }
}
class C extends B {
    constructor(id, name, email) {
        super(id, name);
        this.email = email;
    }
}
const cc = new C(212, "Mukesh", "mukesh@yahoo.com");
console.log(JSON.stringify(cc));
cc.funa();
cc.funb();
/**
 * Inheritance in classes with get,set
 */
class D {
    _id;
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    _name;
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}

class E extends D {
    _mobile;
    get mobile() {
        return this._mobile;
    }
    set mobile(value) {
        this._mobile = value;
    }
}

let objb = new E();
objb.id = 999;
objb.mobile = 93938338;
objb.name = "Ram";
for (const k in objb) {
    console.log(k + " " + objb[k]);
}
/**
 * Multilevel inheritance
 */
class AA {
    constructor() {
        console.log("Constructor of Aa");
    }
}
class AB extends AA {
    constructor() {
        super();
        console.log("Constructor of Ab");
    }
}
class AC extends AB {
    constructor() {
        super();
        console.log("Constructor of Ac");
    }
}
/**
 * Chaining of constructors
 */
const ac = new AC();
/**
 * Overriding samp
 */
class AD {
    funaa() {
        console.log("Iam funaa");
    }
}
class AE extends AD {
    //Overriding
    funaa() {
        console.log("Iam funaa from child class");
    }
}
const objk = new AE();
objk.funaa();
