/*
PART1:ANY TYPE
--------------

You can think of values with an 
any type as “playing by the usual JavaScript rules”. Here’s an illustrative example:

*/
let flexible: any = 4
flexible = "Download some more ram"
flexible = window.document
flexible = setTimeout

//any type does not provide any safety we expect from typescript you can access any propery.

flexible.it.is.possible.to.access.invalid.property
/*
some people think that any type is a problem. but, in some cases, it's the most appropriate type to use.
example:
*/

console.log(window, Promise, setTimeout, "foo")


/*
PART2:UNKNOWN TYPE
------------------
like any, unknown type is a type that can be anything.

example:

*/

let myUnknown: unknown = 2;
myUnknown = "hello";
myUnknown = true;
myUnknown = null;
myUnknown = "world";

//but the difference is that you can not access the properties of unknown type.

// unknown.toUpperCase();//error: Property 'toUpperCase' does not exist on type 'unknown'.


/*
Practical use of top types
You will run into places where top types come in handy very often. 
In particular, if you ever convert a project from JavaScript 
to TypeScript, it’s very convenient to be able to incrementally add increasingly strong types.
 A lot of things will be any until you get a chance to give them some attention.

unknown is great for values received at runtime (e.g., your data layer).
 By obligating consumers of these values to perform some light validation before using them,
  errors are caught earlier, and can often be surfaced with more context.

  */