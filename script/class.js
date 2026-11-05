export class Person {
    
    name    

    constructor(name) {
        this.name = name
    }

    sayHello(name) {
        console.log(`Hello ${name} ${this.name}`)
    }
}