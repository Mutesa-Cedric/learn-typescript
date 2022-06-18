/*
Both type aliases and interfaces offer the capability to describe call signatures:
example:
*/

interface TwoNumberCalculation{
    (a:number,b:number):number
}
type TwoNumberCalc=(a:number,b:number)=>number
const add:TwoNumberCalculation=(a,b)=>a+b;
const subtract:TwoNumberCalc=(a,b)=>a-b;

console.log(add(3,4));