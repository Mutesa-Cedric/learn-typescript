/*
Type Guards are special forms of code that help narrow down the type of the variable within a conditional block, 
such as if ... else if ... else statement or switch.

They are executed at runtime and guarantee the type in a scope.

type guards acts like a bridge between runtime and compiler time. besides static typing,
you can use type guards to check the types at the period between compiler time and runtime.

for example, if we don't know the exact return type or the type of parameters that a function 
is going to receive, we can use type guards.

let's take an example of a function
*/

function getUserInfo(userId?:number):string{
    if(typeof userId==="number"){
        return "userId is a number";
    }else{
        return "userId is undefined";
    }
}

//in the obove functon , we have done narrowing with type guard.