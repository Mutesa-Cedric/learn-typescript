/*
function overloading means that you can have multiple functions with the same names
but with different parameter types and return types.However, the number of parameters should be the
equal.
*/

//examples:

function addTwo(a:string,b:string):string
function addTwo(a:number,b:number):number
function addTwo(a:any,b:any):any{
    return a+b;
}

addTwo("hello","cedric")//return hello cedric
addTwo(3,4)//return 7