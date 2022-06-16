/*tuples are datatypes which hold collection of information like arrays but each index
has meaning.
*/

//example:

let myCar1:[number,string,string]=[2002,"Ford","Fiesta"];

//you define the order and type of the members of a tuple.

//another way

let myCar2=[2002,"Ford","Fiesta"];

const [year,make,model]=myCar2;

console.log(typeof myCar1[0]);//number

