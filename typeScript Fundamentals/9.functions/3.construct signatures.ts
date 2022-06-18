// in ts you  can use constructors inside interfaces and aliases.
//Construct signatures are similar to call signatures, 
//except they describe what should happen with the new keyword.
//example:

interface DateConstructor{
    new (value:number):Date;
}

let MyDateConstructor:DateConstructor=Date;

const d=new MyDateConstructor();

//for aliases:




