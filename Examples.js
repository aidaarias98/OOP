//javascript 
// let var1 = "Hello";
// var1 = 10;
// console.log(var1); 
//typescript
// let var1: string = "Hello";
// var1 = '10'; 
// console.log(var1);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ENCAPSULATION EXAMPLE
// class BankAccount {
//     private _balance: number;
//     constructor(initialBalance: number) {
//         this._balance = initialBalance;
//     }
//     get balance(): number {
//         return this._balance;
//     }
//     deposit(amount: number): void {
//         this._balance += amount;
//     }
//     withdraw(amount: number): void {
//         if (amount <= this._balance) {
//             this._balance -= amount;
//         } else {
//             console.log("Insufficient funds");
//         }
//     }
// }
// let account = new BankAccount(1000);
// console.log(account.balance);  // Output: 1000
// account.deposit(500);
// console.log(account.balance);  // Output: 1500
// account.withdraw(2000);
// console.log(account.balance);  // Output: "Insufficient funds"
// console.log(account._balance); // Output: Property '_balance' is private and only accessible within class 'BankAccount'.
// ABSTRACTION EXAMPLE
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
// INHERITANCE EXAMPLE
// POLYMORPHISM EXAMPLE
