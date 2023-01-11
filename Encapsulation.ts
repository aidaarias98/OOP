// - Encapsulation is built on the idea of hiding data.
// - This is where we restrict access to specific properties or methods.
// - private or public


//EXAMPLE

class Identity{
    constructor(private name:string , private ssn:string){}

    //public method that when called will print out name/ssn
    getInfo(){
        console.log(`${this.name} - ${this.ssn}`);
    }
}

const id = new Identity("Aida", "769-90-3430");

//undo
// console.log(id.name); //error TS2341: Property 'name' is private and only accessible within class 'Identity'.
// console.log(id.ssn); //error TS2341: Property 'ssn' is private and only accessible within class 'Identity'.

//will print out the info bc we are calling it from the public method
id.getInfo(); //expected output: Aida - 769-90-3430


// // This is an example of encapsulation where the implementation details of the class 
// // (the private properties) are hidden and a public interface is provided for
// //  interacting with the class (the info() method).








