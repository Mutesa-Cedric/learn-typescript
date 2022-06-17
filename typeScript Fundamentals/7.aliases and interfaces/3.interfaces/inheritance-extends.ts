//extending a class

/*

we extend things of the same type. ex:

    1.class can extend other class
    2.interface can extend other interface

*/

class Person {
    name: string;
    age: number;
    public explain(): string {
        return `${this.name} is ${this.age} years old`;
    }

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

}

class Man extends Person {
    gender: string;
    public isMan(gender: string): boolean {
        if (gender === "male") return true
        return false
    }

    constructor(name: string, age: number, gender: string) {
        super(name, age);//using super constructor of parent class
        this.gender = gender;
    }
}

let mutesa = new Man("mutesa", 17, "male");
/*
now mutesa has both properties of Person and those added to Person class;
*/

console.log(`info: ${mutesa.explain()}`);
console.log(` is man : ${mutesa.isMan(mutesa.gender)}`);
//extending a class


//extending an interface

interface Human {
    name: string;
    age: number;
    describe: (name: string, age: number) => string;
}

interface Student extends Human {
    yearOfStudy: number;
}

const student1 = {
    name: "mutesa",
    age: 17,
    describe(name: string, age: number): string {
        return `${name} is ${age} years old`;
    },
    yearOfStudy: 1
}

function describeStudent(student: Student): string {
    let basicDescription = student.describe(student.name, student.age);
    return `${basicDescription} and is in ${student.yearOfStudy} year of study`;
}
console.log(describeStudent(student1))

    //extending an interface


