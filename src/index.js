class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} eat something`);
    }
    speak() {
        console.log(`age ${this.name}`);
    }
}

class Student extends People {
    constructor (name, age, number) {
        super(name, age);
        this.number = number;
    }
    study() {
        console.log(`${this.name} study`)
    }
}

let tony = new Student("tony", 20, "A1");
let tom = new Student("tom", 18, "A2");

tony.study();
console.log(tony)