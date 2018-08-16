class People {
    constructor(name, house) {
        this.name = name;
    }
}

class A extends People {
    constructor (name, house) {
        super(name, house);
    }
    saySomething() {
        console.log("i am A");
    }
}

class B extends People {
    constructor (name, house) {
        super(name, house);
    }
    saySomething() {
        console.log("i am B");
    }
}

let aHouse = new House("beijing");

let a = new A("a", aHouse);
let b = new B("b");

a.saySomething();
b.saySomething();