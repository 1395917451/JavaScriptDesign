class People {
    public name;
    public age;
    protected weight; //受保护的属性, 只有自己或者子类能访问
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.weight = 120;
    }
    eat() {
        console.log(`${this.name} eat something`);
    }
    speak() {
        console.log(`age ${this.name}`);
    }
}

class Student extends People {
    number;
    private girlfriend;
    constructor (name, age, number) {
        super(name, age);
        this.number = number;
        this.girlfriend = "alis";
    }
    study() {
        console.log(`${this.name} study`)
    }
    getWeitght() {
        console.log(`weight ${this.weight}`)
    }
}

let tony = new Student("tony", 10, "A1");
tony.getWeitght();

