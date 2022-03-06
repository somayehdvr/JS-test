// Create a class called “Person”. The constructor should have 1 parameter called
// firstname. It should have 1 method called sayHello that should log: 'Hello my name is
// FIRSTNAME'
// Here is an example:
// const peter = new Person('peter');
// peter.sayHello(); // 'Hello my name is Peter'

class Person{
    constructor(firstname) {
        this.firstname = firstname
    }
    sayHello() {
        console.log(`Hello my name is ${this.firstname}`)
    }
}