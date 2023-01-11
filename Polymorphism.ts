// - Ability to create a class with more than one form
// - AKA classes have the same methods just different implementations


//Example

class Creature{
    makeSound(){
        console.log('Animal Sound');
    }
}

class Wolf extends Creature{
    makeSound(){
        console.log('bark');
    }
}

class Tiger extends Creature{
    makeSound(){
        console.log('meow');
    }
}

//bc we did not change the implementation of this child class
//the implementation will be the default aka the parents 
class Fish extends Creature{

}

//we dont know what is being implemenented
//we just know tha
function makeAnimalSound(animal: Creature){
    animal.makeSound();
}

//new instances
let animal1 = new Creature(); 
makeAnimalSound(animal1); //output: Animal Sound

let animal2 = new Wolf(); 
makeAnimalSound(animal2); //output: bark

let animal3 = new Tiger();
makeAnimalSound(animal3); // output: meow

let animal4 = new Fish(); 
makeAnimalSound(animal4); //output: Animal Sound
