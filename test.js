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
//inhertance
var Rect = /** @class */ (function () {
    function Rect(_width, _length) {
        this.width = _width;
        this.length = _length;
    }
    Rect.prototype.calcCircumference = function () {
        return (this.width + this.length) * 2;
    };
    Rect.WhoAmI = function () {
        console.log("I am rectangle");
    };
    return Rect;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width2, length2) {
        return _super.call(this, width2, length2 | 1) || this;
    }
    Square.prototype.calcCircumference = function () {
        return this.width * 4;
    };
    Square.WhoAmI = function () {
        console.log("I am square");
    };
    return Square;
}(Rect));
var r1 = new Rect(3, 4);
var s1 = new Square(3);
var pet = getSmallPet();
pet.layEggs();
//////////////////////genaric////////////////
function identity(arg) {
    return arg;
}
var myIdentity = identity;
//////////////////////enums/////////////////////
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
////////////////////////////modules///////////////////
var numberRegexp = /^[0-9]+$/;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5 && numberRegexp.test(s);
    };
    return ZipCodeValidator;
}());
//export = ZipCodeValidator;
//import zip = require("./ZipCodeValidator");    افترض هنجيبهم من فولدر تاني علشان مكسل احط ملف تاني واعمل منوا اكسبورت وامبورت اصلييييي
//////////////////////////////////////function with return value//////////////////////////
function add(x, y) {
    return x + y;
}
/////////////////inhartance , function overriding////////
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.eat = function () {
        console.log(this.name + " eats when hungry.");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // constructors
    function Student(rollnumber, name1) {
        var _this = _super.call(this) || this;
        _this.rollnumber = rollnumber;
        _this.name = name1;
        return _this;
    }
    // functions
    Student.prototype.displayInformation = function () {
        console.log("Name : " + this.name + ", Roll Number : " + this.rollnumber);
    };
    // overriding super class method
    Student.prototype.eat = function () {
        console.log(this.name + " eats during break.");
    };
    return Student;
}(Person));
var student1 = new Student(2, "Rohit");
student1.displayInformation();
student1.eat();
