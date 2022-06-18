/*
for example if we had a HTML Dom event listener for button

<button onClick="myClickHandler">Click Me!</button>

We could define myClickHandler as follows

  

function myClickHandler(event: Event) {
    this.disabled = true
    //'this' implicitly has type 'any' because it does not have a type annotation.
}
myClickHandler(new Event("click")) // seems ok



Try
Oops! TypeScript isn’t happy with us. Despite the fact that
 we know that this will be element that fired the event, the compiler doesn’t seem to be
  happy with us using it in this way.

  to handle this situation , we we need to give this function a "this" type

*/
function myClickHandler(this: HTMLButtonElement, event: Event) {
    this.disabled = true;
}