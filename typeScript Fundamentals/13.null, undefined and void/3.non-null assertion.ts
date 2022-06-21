//we use non-null assertion operator (!.) to remove the possibility that the value can be "null" or "undefined"
//it tells typescript to ignore the possiblility that the function can be null or undefined.

//example:

type GroseryCart = {
    fruits?: { name: string, qty: number }[],
    vegetables?: { name: string, qty: number }[]
}

const cart: GroseryCart = {};
// cart.fruits.push({name:"mango",qty:20});//object is possibly undefined.
//this can be solved by using !.

cart.fruits!.push({ name: "mango", qty: 20 });//ok.

