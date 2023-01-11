// Inheritance lets one object acquire the properties and methods of another object
// - Allows for code reusability

//INHERITANCE EXAMPLE

class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}


//extends keyword to allow a class to inherit from another class.
//in essence the employee is a child of the person class 

//since the Parent class Person has a constructor that initializes firstname/lastname properties
//you need to initialize the properties in the employee constructor by calling its parent constructor
//able to do it using super()
class Employee extends Person {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {
        
        // call the constructor of the Person class:
        super(firstName, lastName);
    }
}



//creating an instance of the employee class
let employee = new Employee('John', 'Doe', 'Web Developer');

// Because the Employee class inherits properties and methods of the Person class
// you can call the getFullName() and describe() methods on the employee object as follows

console.log(employee.getFullName()); //output: John Doe
console.log(employee.describe());//output: This is John Doe