// - Abstraction in OOP means to only expose the necessary details to the user of the class.
// - To reach abstraction in TypeScript, you have multiple ways: abstract class/method, interfaces, and types.



//ABSTRACTION EXAMPLE

//animal class is an abstract class that cant be instantiated directly
//defines abstract method makesound()
//it doesnt have an implementation and it has to be implemented by concrete classes that inherit from it
abstract class Animal {
    abstract makeSound(): string; 

    constructor(private name:string){}
    //returning private property from constructor
    getName(){
        return this.name;
    }
}

//dog cat classes are concrete classes that inherit from the animal class
//and provide implementation for the makesound method.
class Dog extends Animal {
    makeSound(): string {
        return "Woof woof";
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow";
    }
}

//creating a new instance of dog 
const myDog = new Dog("doggy");
console.log(myDog.getName() + " says: " + myDog.makeSound()); 
// Output: "doggy says: Woof woof"

const myCat = new Cat("kitty");
console.log(myCat.getName() + " says: " + myCat.makeSound());
// Output: "kitty says: Meow"

// This example demonstrates how abstraction allows you to define a common interface
// for different types of animals, and also how you can use inheritance to create classes
// that are based on that interface, while implementing their specific behavior and also 
//encapsulating their specific name property.
