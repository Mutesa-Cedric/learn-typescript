/*
Intersection types in TypeScript can be described using the & (ampersand) operator.
& can be used to marge together two types
example:
*/
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7
function returnInterval():Date & {end:Date}{
    let start =new Date();
    let end=new Date(start.valueOf()+ONE_WEEK);

    return {...start,end};
}

console.log(returnInterval());


