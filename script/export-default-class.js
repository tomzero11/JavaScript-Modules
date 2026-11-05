export default class {

    name

    constructor(name) {
        this.name = name 
    }

    sayHello() {
        console.log(`Hello ${this.name}`)
    } 
}