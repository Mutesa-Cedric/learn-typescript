//we use generics to allow parametizing variables and functions and allow dynamicity
//but without loosing types like when we have used "any"
//example:
//1.a function that will recive either number or string and return the last index:
const returnLast=<T>(arr:Array<T>):T=>{
    return arr[arr.length-1];
}

const l1= returnLast(["m","u","t","e","s","a"]);
//l1 automatically get the type of string;
const l2= returnLast([1,2,3,4,5,6,7,8,9,10]);
//l2 automatically get the the number type.

//typescript does inference but you can specify the type your self like:
const l3=<number> returnLast([1,2,3,4,5,]);

//2.make array function which will make the array of values passed in based on their type

const makeArray =<X,Y>(x:X,y:Y):[X,Y]=>{
    return [x,y];
}
const nameArray=makeArray("mutesa","cedric");//stringArray[X,Y]
const numberArray=makeArray(2,4);//numberArray[X,Y]
const mixArray=makeArray("mutesa",1);//mixArray[X,Y]

//3.extending generic types
const makeFullName=<T extends {firstName:string, lastName:string}>(obj:T)=>{
    return {
        ...obj,
        fullName:obj.firstName+ ""+obj.lastName
    }
}
//we use "extends" to inforce the properties that must be available
const person1=makeFullName({firstName:"mutesa",lastName:"cedric"});
const person2=makeFullName({firstName:"gihozo",lastName:"germaine",randomField:"random"})//this will work
// const person3=makeFullName({lastName:"random",another:"random"})//this will not work because we have defined that lastname and firstname must be available
console.log(person2.randomField);//this will work because we have kept all fields .

//using generics with interfaces

interface Tab<T>{
    id:string
    postion:string
    data:T
}
type  NumberTab=Tab<number>;
type StringTab=Tab<string>;
