# TYPESCRIPT

TypeScript is a syntactic superset of JavaScript which adds static typing.
Meaning that TypeScript adds syntax on top of JavaScript, allowing developers to add types.

# Why Typescript

JS is particularly a loosely typed language so it can become diffcult understanding what types of data are being passed around.
-Function parameters and variables don't have any information.
-So developers need to look at documentation, or guess based on the implementation.

TypeScript allows specifying the types of data being passed around within the code.
Also has the ability to report errors when the types don't match.

EXAMPLE: TS will give an error when passing a string into a function that expects a number. JavaScript will not.

# What is OOP

Object oriented programing (oop), is a programming paradigm that relies on the concepts of classes and objects.

# Four Pillars of OOP

With oop there are four concepts that define it.

1. Encapsulation

- Encapsulation is built on the idea of hiding data.
- This is where we restrict access to specific properties or methods.
- private or public

2. Abstraction

- Abstraction in OOP means to only expose the necessary details to the user of the class.
- To reach abstraction in TypeScript, you have multiple ways: abstract class/method, interfaces, and types.

3. Inheritance

- Inheritance lets one object acquire the properties and methods of another object
- Allows for code reusability
- EXAMPLE:

Imagine you have an existing class, and you build a new class, which uses properties or methods of that existing class while you want to add additional features to it.

These classes would usually be called sub-classes,child-classes, lower-class. Which would be extending from their upper/parent/super class.

4. Polymorphism

- Ability to create a class with more than one form
- AKA classes have the same methods just different implementations

# PART TWO OF THE ASSIGNMENT

1. Static- The static members of a class are accessed using the class name and dot notation, without creating an object. Static properties and methods are shared by all instances of a class.

2. Private - modifier allows access within the same class.

3. Protected - modifier allows access within the same class and subclasses.

4. Public - allows access from any location.

In typescript there are access modifiers that change the visibility of the properties and methods of a class. There are three main modifiers--private, protected, and public. The private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class. If there is any attempts to access private properties/methods outside the class there will be an error because that is not allowed. For the protected access modifier it is similar to the private access modifier, except that protected members can be accessed using their deriving classes. There will be an error if there are any attempts to access the protected properties or methods from anywhere else.The public access modifier is generally straight forward and is usually already the default when it comes to access modifiers. It essentially allows class properties and methods to be accessible from all locations. Using modifiers makes sure that the code is not doing things that shouldnt be doing or accessing thing it shouldnt.So it will make the code stricter and essentially there is less room for error.
