//inhertance
         class Rect
         {
             width:number ;
             length:number ;
         
             constructor(_width:number , _length:number)
             {
                  this.width = _width ;
                  this.length = _length
             }
                 calcCircumference()
                 {
                     return (this.width + this.length) *2
                 }
         
                 static WhoAmI()
                 {
                     console.log("I am rectangle")
                 }
         }
 
     class Square extends Rect
     {
         constructor(width2:number , length2?:number) 
         {
            super(width2,length2|1)

         }

        calcCircumference()
                 {
                     return this.width*4
                 }
         
                 static WhoAmI()
                 {
                     console.log("I am square")
                 }

     }
         
 let r1 = new Rect(3,4)
let s1 = new Square(3) 

////////////////////////////////////////////////////////////////////////////////


////////////////////interface and union types/////////////////
interface Bird {
    fly(): void;
    layEggs(): void;
  }
   
  interface Fish {
    swim(): void;
    layEggs(): void;
  }
   
  declare function getSmallPet(): Fish | Bird;
   
  let pet = getSmallPet();
  pet.layEggs();

  //////////////////////genaric////////////////


  function identity<Type>(arg: Type): Type {
    return arg;
  }
   
  let myIdentity: <Type>(arg: Type) => Type = identity;
  
  //////////////////////enums/////////////////////

  enum Direction {
    Up = 1,
    Down=2,
    Left=3,
    Right=4,
  }

  /////////////////////////namespaces/////////////////

//   interface StringValidator {
//     isAcceptable(s: string): boolean;
//   }

  namespace Validation {
    export interface StringVal {
      isAcc(s: string): string;
    }
}


////////////////////////////modules///////////////////
let numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
//export = ZipCodeValidator;

//import zip = require("./ZipCodeValidator");    افترض هنجيبهم من فولدر تاني علشان مكسل احط ملف تاني واعمل منوا اكسبورت وامبورت اصلييييي

//////////////////////////////////////function with return value//////////////////////////

function add(x:number, y:number) {
    return x + y;
  }

/////////////////inhartance , function overriding////////
  

  class Person{
    name:string

    eat():void{
        console.log(this.name+" eats when hungry.")
    }
}

class Student extends Person{
    // variables
    rollnumber:number;

    // constructors
    constructor(rollnumber:number, name1:string){
        super(); // calling Parent's constructor
        this.rollnumber = rollnumber
        this.name = name1
    }

    // functions
    displayInformation():void{
        console.log("Name : "+this.name+", Roll Number : "+this.rollnumber)
    }

    // overriding super class method
    eat():void{
        console.log(this.name+" eats during break.")
    }
}

var student1 = new Student(2, "Rohit")

student1.displayInformation()
student1.eat()





