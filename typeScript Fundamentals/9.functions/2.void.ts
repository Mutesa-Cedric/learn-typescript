/*
we use void when function does not "return" anything while undefined means that the function 
return undefined.
ex:
*/

function printFormatedJSON(obj: string[]) {
    console.log(JSON.stringify(obj, null, " "));
}

const x = printFormatedJSON(["hello", "world"]);//x will be void.

//the return type of void function is intended to be ignored.

/*
We could type functions as returning undefined, but there are some interesting
differences that highlight the reason for void’s existence:

*/

function invokeInFourSeconds(callback: () => undefined) {
    setTimeout(callback, 4000)
}
function invokeInFiveSeconds(callback: () => void) {
    setTimeout(callback, 5000)
}

const values: number[] = []
// invokeInFourSeconds(() => values.push(4))//Type 'number' is not assignable to type 'undefined'
invokeInFiveSeconds(() => values.push(4))

//when we have used void , anything you can return , ts is happy with it because it's not going to be used.
//while for undefined, the function must return undefined.