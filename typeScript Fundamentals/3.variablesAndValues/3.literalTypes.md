## literal type

The type 6 is called a literal type. If our let declaration is a
 variable that can hold any number, the const declaration is one that can hold only 6 — a specific number.

 ** Theme: Inferring with safe specificity
There’s a common idea you’ll see again and again when working with TypeScript. Inference is not so specific as to get in the way of common behavior.

For example, the let variable declaration above could have assumed age to be of type 6, but this would have interfered with our ability to set this re-assignable variable to 7 or 8.


A literal is a more concrete sub-type of a collective type. What this means is that "Hello World" is a string , but a string is not "Hello World" inside the type system.