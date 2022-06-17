/*
union types are defined using | pipe its simply "OR" operator

ex: if we need to define success or failure, we can use:

"sucess"| "failure"

For example, the flipCoin() function will return "heads" if a number selected from (0, 1) is >= 0.5,
 or "tails" if <=0.5.
*/

function flipCoin():"heads"|"tails"{
    
    if(Math.random()>0.5) return "heads";
    return "tails";
}

const outPut=flipCoin();

//using tuples

function mayBeGetUserInfo1():["error",Error]|["success",{name:string,email:string}]{
    if(flipCoin()=="heads"){
        return [
            "success",{name:"mutesa cedric",email:"mutesacedric@gmail.com"}
        ]
    }else{
        return ["error",new Error("the coin landed on tails")]
    }
}

//working with tuples

const outCome=mayBeGetUserInfo1();

const [var1,var2]=outCome /*var1 will be of type "error"|"success"
var2 will be of type Error|{name:string,email:string}

when a value has a type including a union , we can only directly access the common
properties for both unions.

on the example above, var2 will be of type Error|{name:string,email:string}
because both error and that special object has name property. so, only name property can be directly accessible.
*/

//we can access email property using type guarding. you can reffer two 3.narrowing with type guards

if(var2 instanceof Error){
    var2//now this var 2 has type of "Error";
}else{
    var2//now this var2 has type of {name:string,email:string}
}