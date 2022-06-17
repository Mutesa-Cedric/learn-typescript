
/*

we implement things which are not of the same type

ex: a class can implement an interface.


*/

//  example:

interface Animal {
    speak(): void
}

class HumanBeing implements Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log("human speaks");
    }
}

/*
in the above example, we are saying that human being class does everything that an animal do.
(it implements animal class.)
*/